import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppConsts } from '../../../shared/AppConsts';
import * as moment from 'moment';
import { AlertController, LoadingController } from '@ionic/angular';
//import { AnnouncementServiceProxy, TokenAuthServiceProxy } from '../../../shared/service-proxies/service-proxies';
import { HR_Announcement_ENTITY, AnnouncementServiceProxy, WorkTimeServiceProxy } from '../../../shared/service-proxies/service-proxies';
import { LocalStorageService } from '../../core/local-storage/local-storage.service';
import 'rxjs/add/operator/timeout';
import { Plugins } from '@capacitor/core';
import { MenuController } from '@ionic/angular';
import { SignalRService } from '../../../service/signalR.service';
// import { Subscription } from 'rxjs';
import { InfiniteScroll } from '@ionic/angular';

const { App } = Plugins;

export const AUTH_KEY = 'AUTH';
@Component({
  selector: 'announcement',
  templateUrl: 'announcement.page.html',
  styleUrls: ['announcement.page.scss'],
})
export class AnnouncementPage implements OnInit {
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
  ipAddress: string;
  processDate: any;
  branchType: any;
  maChamCong: any;
  moment = moment();
  address: any;
  hoVaTen: any;
  creatorUserId: number;
  flgChecked: number;
  isLoading = false;
  tenCty: any;
  momentCurrent: string;
  dateCurrent: string;
  momentTmp = moment();
  checkList = [];
  globalUrlAPI: string = AppConsts.remoteServiceBaseUrl;
  numtimeLeft: number = 5;
  masterSelected:boolean = false;
  checkedList: any = [];
  pageSize: number = 10;
  page: number = 1;
  constructor(
    private _router: Router,
    public _alertController: AlertController,
    private _loadingCtrl: LoadingController,
    private _localStorageService: LocalStorageService,
    public _menu: MenuController,
    public _signalRSevice: SignalRService,
    private _announcementServiceProxy: AnnouncementServiceProxy,
    private workTimeServiceProxy: WorkTimeServiceProxy,
  ) {
   // this.getCheckedItemList();
  }

  ngOnInit() {
    this.creatorUserId = this._localStorageService.getItem(AUTH_KEY).userId;
  }

  ionViewWillEnter() {
    this.loadingDefault();
    this.getAnnounmentList();
  }

  getAnnounmentList() {
    this.page = 1;
    this._announcementServiceProxy.getAllUnReadPagination(this.creatorUserId, this.page, this.pageSize).subscribe({
      next: (res) => {
        this.checkList = res;
        for (const { index, value } of this.checkList.map((value, index) => ({ index, value }))){
          this.checkList[index].isSelected = false;
          this.checkList[index].userReadId = this.creatorUserId;
        }
        this._announcementServiceProxy.markAsReadAll(res).subscribe({
          next: (res) => {
          },
          error: (err) => {
            console.log(err);
          }
        });
        this.dismissLoading();
      },
      error: (err) => {
        this.dismissLoading();
        console.log(err);
      }
    });
  }



  viewQuanLy(entityId: any, id: string, hasRead: boolean) {
    // if(!hasRead){
    //   let userReadId = this.creatorUserId;
    //   this._announcementServiceProxy.markAsRead(id, userReadId).subscribe({
    //     next: (res) => {}
    //   });
    // }
    if (entityId) {
      this._router.navigate(['app/main/quanly-congtac'], {
        queryParams: { id: entityId }
      });
    }
  }

 

  async loadingDefault() {
    this.isLoading = true;
    return await this._loadingCtrl.create({
      // message: 'Đang xử lý........',
      // duration: 3000
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then(() => { });
        }
      });
    });
    // loading.present();
  }
  async dismissLoading() {
    this.isLoading = false;
    return await this._loadingCtrl.dismiss().then(() => { });
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      this.page += 1;
      this._announcementServiceProxy.getAllUnReadPagination(this.creatorUserId, this.page, this.pageSize).subscribe({
        next: (res: any) => {
          let list = res;
          for (const { index, value } of list.map((value, index) => ({ index, value }))){
            list[index].isSelected = false;
            list[index].userReadId = this.creatorUserId;
            this.checkList.push(list[index]);
          }
          this._announcementServiceProxy.markAsReadAll(res).subscribe({
            next: (res) => {
            },
            error: (err) => {
              console.log(err);
            }
          });
        },
        error: (err) => {
          console.log(err);
        }
      });

      if (this.checkList.length == 100) {
        event.target.disabled = true;
      }
    }, 500);
  }

  checkUncheckAll() {
    for (var i = 0; i < this.checkList.length; i++) {
      this.checkList[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.masterSelected = this.checkList.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }

  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.checkList.length; i++) {
      if(this.checkList[i].isSelected){
      this.checkedList.push(this.checkList[i]);
      }
    }
  }
  async ConfirmDelete(id){
    const alert = await this._alertController.create({
      cssClass: 'my-custom-class',
      header: 'Thông báo',
      message: 'Bạn có chắc muốn xóa thông báo này không?',
      buttons: [{
        text: 'Đồng ý', handler: () => {
          this.markAsDelete(id);
        }
      },{ text: 'Hủy', role: 'cancel' }]
    });

    await alert.present();
  }

  markAsDelete(id: string) {
    this.loadingDefault();
    let userReadId = this.creatorUserId;
    this._announcementServiceProxy.markAsDelete(id, userReadId).subscribe({
      next: (res) => {
        this.getAnnounmentList();
      }, error: (err: any) => {
        this.dismissLoading();
        console.log(err);
      }
    });
  }

  async confirmDeleteAll(){
    const alert = await this._alertController.create({
      cssClass: 'my-custom-class',
      header: 'Thông báo',
      message: 'Bạn có chắc muốn xóa không?',
      buttons: [{
        text: 'Đồng ý', handler: () => {
          this.deleteAll();
        }
      },{ text: 'Hủy', role: 'cancel' }]
    });

    await alert.present();
  }
  deleteAll(){
    this.loadingDefault();
    let paramsRequest: any;
    paramsRequest = [];
    for (const { index, value } of this.checkedList.map((value, index) => ({ index, value }))){
      paramsRequest.push({'userReadId': !isNaN(value.userReadId) ? parseInt( value.userReadId, 10) : 0, 'id': value.id});
    }
   // paramsRequest = JSON.stringify(paramsRequest);
    this._announcementServiceProxy.markAsDeleteAll(paramsRequest).subscribe({
      next: (res) => {
        this.getAnnounmentList();
        this.masterSelected = false;
      }, error: (err: any) => {
        this.dismissLoading();
        console.log(err);
      }
    });
  }

  viewDetail(entityId: any, id: any, hasRead: boolean){
    // if(!hasRead){
    //   let userReadId = this.creatorUserId;
    //   this._announcementServiceProxy.markAsRead(id, userReadId).subscribe({
    //     next: (res) => {}
    //   });
    // }
    if(entityId != null){
      this._router.navigate(['app/main/chitiet-dangky'], {
        queryParams: { id: entityId }
      });
     }else{
        let index: number;
        index = this.checkList.findIndex(x => x.id === id);
        console.log(index);
        this.checkList[index].hasRead = true;
        console.log(this.checkList);
     }
  }
}
