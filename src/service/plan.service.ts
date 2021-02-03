import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { LocalStorageService } from '../app/core/local-storage/local-storage.service';

export interface month {
  dates: moment.Moment[];
  monthName: string;
  year: string;
}

interface state {
  date: moment.Moment;
  plan: month[];
}

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  // momentClone: moment.Moment;
  // moment: moment.Moment;
  state: state = {
    date: null,
    plan: [
      {
        dates: null,
        monthName: null,
        year: null
      }
    ]
  };

  setState = (nextState: Partial<state>) => {
    this.state = { ...this.state, ...nextState };
  }

  constructor(
    private _localStorageService: LocalStorageService

  ) {
    //this service is a singleton therefore its constructor will only
    //be called once during the application life cycle
  }

  public getPlan() {
    return [...this.state.plan];
  }

  public initPlan(): void {
    var momentC = this._localStorageService.getItem('MOMENT').moment;
    this.setState({date: moment(momentC)});
    const { date }  = this.state;
    const firstMonth = this.generateMonth(date);
    const plan = [firstMonth];
    const currentDate = date.clone();
    const dateYearNext = currentDate.clone().add(1, 'year');
    while (date.isSameOrBefore(dateYearNext)) { // creating one year plan
      plan.unshift(this.nextMonth());
    } 
    const currentMonthIndex = plan.length - 1;
    plan[currentMonthIndex].dates = plan[currentMonthIndex].dates.filter(this.filterFutureDates);
    this.setState({plan: plan });
  }

  private nextMonth(): month {
    const  { date }  = this.state;
    const newDate = date.add(1, 'month');
    const month = this.generateMonth(newDate);
    this.setState({ date: newDate });
    return month;
  }


  private filterFutureDates(date: moment.Moment) {
    if (!date) {
      return true;
    }
    return date.isSameOrBefore(date);
  }

  private generateMonth(date: moment.Moment): month {
    const firstDay = moment(date).startOf('month');
    const monthName = moment(date).locale('vi').format('MMMM');
    const year = moment(date).format('YYYY');
    const monthLength = date.daysInMonth();
    const totalDatesInMonth = this.generateMonthDates(firstDay, monthLength);
    const emptyCellsBeforeFirstDay = Array(firstDay.weekday()).fill(null);
    const dates = [...emptyCellsBeforeFirstDay, ...totalDatesInMonth];
    return {
      dates,
      monthName,
      year
    };
  }

  private generateMonthDates(firstDay: moment.Moment, length: number): moment.Moment[] {
    return Array(length).fill(null).map((v, i) => moment(firstDay).add(i, 'day'));
  }
}
