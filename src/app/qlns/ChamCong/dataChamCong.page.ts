import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { UtilService } from '../../../service/util.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AnnouncementServiceProxy, CHAMCONGServiceProxy, TokenAuthServiceProxy } from '../../../shared/service-proxies/service-proxies';
import { LocalStorageService } from '../../core/local-storage/local-storage.service';
import 'rxjs/add/operator/timeout';
import { CalendarState, DateRangeCalendarPage, FilterBtnConstants } from '../../date-range-calendar/date-range-calendar.page';
import { LoggerService } from '../../../service/logger.service';
import { SignalRService } from '../../../service/signalR.service';

export const AUTH_KEY = 'AUTH';
@Component({
  selector: 'app-data-chamcong',
  templateUrl: './dataChamCong.page.html',
  styleUrls: ['./dataChamCong.page.scss']
})
export class dataChamCong implements OnInit {

  maChamCong: any;
  branchType: any;
  startDateUserChoose: any;
  endDateUserChoose: any;
  groupList: Array<any>;
  flagGlobal: boolean;
  typeGlobal: string = "individual";
  branchId: any;
  search: any;
  searchTmp: any;
  userId: number;
  isItemAvailable = false;
  items = [];
  listHovaten = [];
  showBtnRefresh: boolean = false;
  totalUnred: number = 0;

  calendarData: CalendarState = {
    dateFrom: null,
    dateTo: null,
    scrollPosition: 0,
    selectedButtonName: FilterBtnConstants.empthyString
  };

  dateFrom = moment().clone().locale('vi').startOf("month");
  dateTo = moment().clone().locale('vi');
  isLoading: boolean = false;

  constructor(
    private _loadingCtrl: LoadingController,
    private _utilService: UtilService,
    public _alertController: AlertController,
    private _router: Router,
    private _dataChamCongsServiceProxy: CHAMCONGServiceProxy,
    private _localStorageService: LocalStorageService,
    private _tokenAuthServiceProxy: TokenAuthServiceProxy,
    private modalController: ModalController,
    private loggerService: LoggerService,
    private _signalRSevice: SignalRService,
    private _announcementServiceProxy: AnnouncementServiceProxy,
  ) {
   
  this.userId = this._localStorageService.getItem(AUTH_KEY).userId;
  this._signalRSevice.retrieveMappedObject().subscribe(
    (message) => {
        this._announcementServiceProxy.getAllUnRead(this.userId).subscribe({
          next: (res) => {
            if (res) {
              this.totalUnred = res.length;
            }
          }
        });
    });

  }

  ngOnInit() {
    this.showBtnRefresh = false;
    this.search = '';
    this.searchTmp = '';
    this.groupList = [];
    this.maChamCong = this._localStorageService.getItem(AUTH_KEY).maChamCong;
    this.branchType = this._localStorageService.getItem(AUTH_KEY).branchType;
    this.branchId = this._localStorageService.getItem(AUTH_KEY).branchId;
    this.userId = this._localStorageService.getItem(AUTH_KEY).userId;
  }

  initializeItems(){
   this.items = this.listHovaten;
}

ionViewWillEnter(){
  this.loadingDefault();
  this._announcementServiceProxy.getAllUnRead(this.userId).subscribe({
    next: (res) => {
      if (res) {
        this.totalUnred = res.length;
      }
    },
    error: (err) => {
      this.showAlertController('Lỗi kết nối mạng, vui lòng thử lại.');
      return;
    }
  });
  this.getAllFullNameByFilterKeyWord();
  this.getDataChamCongTrongThang();
}

  //nút tìm kiếm
   filterProcessDate(form: NgForm) {
   this.loadingDefault();
    this.startDateUserChoose = moment(this.dateFrom.clone().locale('vi').startOf('day'));
    this.endDateUserChoose = moment(this.dateTo.clone().locale('vi').startOf('day'));
    this.getAllByBranch();
  }

  getAllFullNameByFilterKeyWord(){
    this._dataChamCongsServiceProxy.getAllFullNameByFilterKeyWord(this.branchId).subscribe({
      next: async (res) => {
        if(res && res.length > 0){
          res.map(value => {
            this.listHovaten.push(value);
          });
        }
     }, error: (err) => {
       this.dismissLoading();
       console.log(err);
     }
    });
  }

  getAllByBranch() {
    this.flagGlobal = true ? this.typeGlobal == "all" : this.typeGlobal == "individual";
    if(this.search.length < 1){
      this.search = this.searchTmp;
    }
    this._dataChamCongsServiceProxy.getAllByBranchId(this.branchId, this.endDateUserChoose, this.startDateUserChoose, this.maChamCong, this.search, this.flagGlobal).timeout(5000).subscribe( {
      next: async (res) => {
        var listArrayResult = [];
        if (res && res.length > 0) {
          res.forEach(function (item, index) {
            item['processDateFormat'] = item.processDate.locale("vi").format('dddd, DD/MM/YYYY');
            var array_tmp = [];
            array_tmp['processDateFormat'] = item['processDateFormat'];
            array_tmp['checkOut'] = item.checkOut;
            array_tmp['checkIn'] = item.checkIn;
            array_tmp['hoVaTen'] = item.hoVaTen;
            listArrayResult.push(array_tmp);
          });
        }
        this.showBtnRefresh = true;
        await this.getResultToList(listArrayResult);
      }, error: async (err: any) => {  
        this.dismissLoading();
        console.log(err);
      }
    });
  }

  refresh(){
    this.loadingDefault();
    this.typeGlobal = "individual";
    this.dateFrom = moment().clone().locale('vi').startOf("month");
    this.dateTo = moment().clone().locale('vi');
    this.search = '';
    this.searchTmp = '';
    this.flagGlobal = false;
    this.showBtnRefresh = false;
    this.getDataChamCongTrongThang();
  }

  getResultToList(listArrayResult: Array<any>) {
    this.groupList = [];
    this.groupList = listArrayResult;
    this.search = '';
    this.searchTmp = '';
    this.dismissLoading();
  }

  getDataChamCongTrongThang() {
    this._dataChamCongsServiceProxy.getAllByMaChamCong(this.maChamCong).subscribe({
      next: async (res) => {
        var listArrayResult = [];
        if (res && res.length > 0) {
          res.forEach(function (item, index) {
            item['processDateFormat'] = item.processDate.locale("vi").format('dddd, DD/MM/YYYY');
            var array_tmp = [];
            array_tmp['processDateFormat'] = item['processDateFormat'];
            array_tmp['checkOut'] = item['checkOut'];
            array_tmp['checkIn'] = item['checkIn'];
            listArrayResult.push(array_tmp);
          });
        }
        await this.getResultToList(listArrayResult);
      },
      error: async (err: any) => {  
        this.dismissLoading()
        console.log(err);
      }
       });
  }

  private async ShowError(data: {}) {
    const obj: any = data;
    const alert = await this._alertController.create({
      header: 'Error',
      subHeader: obj.error.message,
      message: obj.error.details,
      buttons: ['OK']
    });

    await alert.present();
  }

  

getItems(ev: any) {
  this.initializeItems();
    // set val to the value of the searchbar
    const val = ev.target.value;
    this.searchTmp = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '' && val.trim() != this.search) {
        this.isItemAvailable = true;
        this.items = this.items.filter((item) => {
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
    } else {
        this.isItemAvailable = false;
    }
}

sendValueHovaten(item: string){
  this.search = item;
  this.isItemAvailable = false;
}

public async openCalendar(): Promise<void> {
  try {
    const modal = await this.modalController.create({
      component: DateRangeCalendarPage, // we are using our calendar page as a modal
      componentProps: {
        previousState: this.calendarData
      }
    });
    await modal.present().then(() => {
      // loader.dismiss();
    });
    modal.onDidDismiss().then((data: any) => {
      if (!data.data) {
        return;
      }
      this.calendarData = data.data['calendarData'];
      if (this.calendarData.dateFrom) {
        this.dateFrom = this.calendarData.dateFrom;
        this.dateTo = this.calendarData.dateTo;
      }
    });
  } catch (err) {
    this.loggerService.error(`HomePage->openCalendar():err`, err);
  }
  
}

async loadingDefault(){
  this.isLoading = true;
  return await this._loadingCtrl.create({
    // message: 'Đang xử lý........',
    // duration: 3000
  }).then(a => {
    a.present().then(() => {
      if (!this.isLoading) {
        a.dismiss().then(() => {});
      }
    });
  });
  // loading.present();
}
async dismissLoading() {
  this.isLoading = false;
  return await this._loadingCtrl.dismiss().then(() => {});
}


async showAlertController(message: string){
  this.dismissLoading();
  const alertController = this._alertController;
  let alert = await alertController.create({
    header: 'Thông báo',
    message: message,
    buttons: ['OK']
  });
  await alert.present();
}

public greaterThan(sub: number, num: number): boolean {
  return true ? sub <= num : sub >= num;
}

backToHome() {
  setTimeout(() => {
    this._router.navigateByUrl('app/main/home');
  }, 1000);
}


}
