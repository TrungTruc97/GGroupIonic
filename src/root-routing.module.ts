import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/app/main/home', pathMatch: 'full' },
  {
    path: 'account', loadChildren: './account/account.module#AccountModule'
  },
  {
    path: 'date-range-calendar',
    loadChildren: '../src/app/date-range-calendar/date-range-calendar.module#DateRangeCalendarPageModule'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
