import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../../../service/util.service';
import { AppConsts } from '../../../../shared/AppConsts';
import * as moment from 'moment';
import { AlertController, LoadingController } from '@ionic/angular';
// import {  AnnouncementServiceProxy, TokenAuthServiceProxy, WorkTimeServiceProxy, HrWorkTime_ENTITY } from '../../../../shared/service-proxies/service-proxies';
import {  AnnouncementServiceProxy, HrWorkTime_ENTITY, HrWorkTimeRequest_ENTITY, SendAnnouncement_ENTITY, TokenAuthServiceProxy, WorkTimeServiceProxy, HrWorkTime } from '../../../../shared/service-proxies/service-proxies';
import {LocalStorageService } from '../../../core/local-storage/local-storage.service';
import 'rxjs/add/operator/timeout';
import { Plugins } from '@capacitor/core';
import { MenuController } from '@ionic/angular';
import { SignalRService } from '../../../../service/signalR.service';
// import { Subscription } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppSettings } from '../../../../AppSettings';

const { App } = Plugins;

export const AUTH_KEY = 'AUTH';
@Component({
  selector: 'danhsachchoduyet',
  templateUrl: 'DanhSachChoDuyet.page.html',
  styleUrls: ['DanhSachChoDuyet.page.scss'],
})
export class DanhSachChoDuyet implements OnInit {
  userId: number;
  branchType: any;
  maChamCong: any;
  moment = moment();
  checkPauseResume = false;
  hoVaTen: any;
  creatorUserId: number;
  isLoading = false;
  tenCty: any;
  globalUrlAPI : string = AppConsts.remoteServiceBaseUrl;
  image: string;
  avatar: string;
  receiveId: any;
  masterSelected:boolean = false;
  checkList = [];
  checkedList: any = [];
  totalUnred: number = 0;
  page: number;
  pageSize: number = 10;

  constructor(
    private _utilService: UtilService,
    private _router: Router,
    public _alertController: AlertController,
    private _loadingCtrl: LoadingController,
    private _localStorageService: LocalStorageService,
    private _tokenAuthServiceProxy: TokenAuthServiceProxy,
    public _menu: MenuController,
    public _signalRSevice: SignalRService,
    private _announcementServiceProxy: AnnouncementServiceProxy,
    private workTimeServiceProxy: WorkTimeServiceProxy,
    private http: HttpClient,  
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
    this.receiveId = <string>this._localStorageService.getItem(AUTH_KEY).userId;
    this.hoVaTen = this._localStorageService.getItem(AUTH_KEY).hoVaTen;
    this.tenCty = this._localStorageService.getItem(AUTH_KEY).tenCty;
    this.avatar = this._localStorageService.getItem(AUTH_KEY).image;
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
    this.getAllWorkTimeUnread();
  }

  getAllWorkTimeUnread(){
    this.page = 1;
    this.workTimeServiceProxy.getWorkTimeUnCheck(this.receiveId, this.page, this.pageSize).subscribe({
      next: (res: any) => {
        this.checkList = res;
        for (const { index, value } of this.checkList.map((value, index) => ({ index, value }))){
          this.checkList[index].isSelected = false;
        }
        this.masterSelected = false;
        this.dismissLoading();
      }, 
      error: (err: any) => {
        this.dismissLoading();
        console.log(err);
      }
    });
  }

  viewDetail(id: any){
    if (id) {
      this._router.navigate(['app/main/quanly-congtac'], {
        queryParams: { id: id }
      });
    }
  }

  duyetDon(id: any){
    this.workTimeServiceProxy.getWorkTimeDetail(id).subscribe({
      next: async (res: HrWorkTime) => {
      let thongtinWorkTime : HrWorkTime = new HrWorkTime();
      thongtinWorkTime = res;
        await this.onCreateOrEdit(id, thongtinWorkTime);
      }, 
      error: (err: HttpErrorResponse) => {
        this.dismissLoading();
        console.log(err);
      }
    });
  }

  onCreateOrEdit(id: any, thongtinWorkTime: HrWorkTime){
    this.loadingDefault();
      let formData = new FormData;
      formData.append('Id',id);
      formData.append('NextApproverId', thongtinWorkTime.nextApproverId.toString());
      formData.append('Reasons', thongtinWorkTime.reasons);
      formData.append('Image', this.avatar);
      formData.append('HoVaTen', this.hoVaTen);
      formData.append('TenCty', this.tenCty);
      formData.append('DocumentType', thongtinWorkTime.documentType);
      formData.append('CreatorUserId', thongtinWorkTime.creatorUserId.toString());
      formData.append('Email', thongtinWorkTime.emailAddress);
      if(thongtinWorkTime.truongNhomId) formData.append('TruongNhomId', thongtinWorkTime.truongNhomId.toString());
      if(thongtinWorkTime.truongPhongId) formData.append('TruongPhongId', thongtinWorkTime.truongPhongId.toString());
      if(thongtinWorkTime.giamDocKhoiId) formData.append('GiamDocKhoiId', thongtinWorkTime.giamDocKhoiId.toString());
      if(thongtinWorkTime.tcnsId) formData.append('TcnsId', thongtinWorkTime.tcnsId.toString());
      if(thongtinWorkTime.giamDocDieuHanhId) formData.append('GiamDocDieuHanhId', thongtinWorkTime.giamDocDieuHanhId.toString());
      formData.append('TimeFrom', thongtinWorkTime.timeFrom.clone().locale('vi').format('YYYY-MM-DD') +'T'+ thongtinWorkTime.timeFrom.clone().locale('vi').format('HH:mm:ss'));
      formData.append('TimeTo', thongtinWorkTime.timeTo.clone().locale('vi').format('YYYY-MM-DD') +'T'+ thongtinWorkTime.timeTo.clone().locale('vi').format('HH:mm:ss'));
      formData.append('DocumentType', thongtinWorkTime.documentType);

      this.http.post(AppSettings.API_ENDPOINT + "/api/WorkTime/CreateOrEditForMobile", formData).subscribe({
        next: async(res: any) => {
          let sendUserDto: SendAnnouncement_ENTITY = new SendAnnouncement_ENTITY();
          sendUserDto = res.result;
          this._announcementServiceProxy.sendMessageToClient(sendUserDto).subscribe({
            next: (res) => {}
          });
           this.getAllWorkTimeUnread();
           this.showAlertController('Bạn đã duyệt đơn thành công!');
          }, error: (err: any) => {
            console.log(err);
            this.showAlertController('Lỗi xuất hiện, vui lòng kiểm tra lại');
     },
       });
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

  async revieceAll(){
    this.loadingDefault();
    let hrWorkTimeDtoRequestArray: HrWorkTimeRequest_ENTITY[] = [];
    for (const { index, value } of this.checkList.map((value, index) => ({ index, value }))) {
      //kiem tra
      if(value.isSelected){
        let hrWorkTimeDtoRequest = new HrWorkTimeRequest_ENTITY();
        hrWorkTimeDtoRequest.id = value.id;
        hrWorkTimeDtoRequest.hoVaTen = this.hoVaTen;
        hrWorkTimeDtoRequest.tenCty = this.tenCty;
        if(value.truongNhomId) hrWorkTimeDtoRequest.truongNhomId = value.truongNhomId;
        if(value.truongPhongId) hrWorkTimeDtoRequest.truongPhongId = value.truongPhongId;
        if(value.giamDocKhoiId) hrWorkTimeDtoRequest.giamDocKhoiId = value.giamDocKhoiId;
        if(value.tcnsId) hrWorkTimeDtoRequest.tcnsId = value.tcnsId;
        if(value.giamDocDieuHanhId) hrWorkTimeDtoRequest.giamDocDieuHanhId = value.giamDocDieuHanhId;
        hrWorkTimeDtoRequest.timeFrom = value.timeFrom;
        hrWorkTimeDtoRequest.timeTo = value.timeTo;
        hrWorkTimeDtoRequest.documentType = value.documentType;
        hrWorkTimeDtoRequest.creatorUserId = value.creatorUserId;
        hrWorkTimeDtoRequest.reasons = value.reasons;
        hrWorkTimeDtoRequest.status = value.status;
        hrWorkTimeDtoRequest.nextApproverId = value.nextApproverId;
        hrWorkTimeDtoRequest.image = this.avatar;
        hrWorkTimeDtoRequestArray.push(hrWorkTimeDtoRequest);
      }
    }
    this.workTimeServiceProxy.editAllForMobile(hrWorkTimeDtoRequestArray).subscribe({
     next: (res: any) => {
       let sendUserDto: SendAnnouncement_ENTITY = new SendAnnouncement_ENTITY();
       sendUserDto = res;
       this._announcementServiceProxy.sendMessageToClient(sendUserDto).subscribe({
         next: (res) => {}
       });
       this.getAllWorkTimeUnread();
       this.showAlertController('Bạn đã duyệt đơn thành công!');
     },
     error: (err:any) => {
       this.dismissLoading();
       console.log(err);
     }
    })
  }


  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      this.page += 1;
      this.workTimeServiceProxy.getWorkTimeUnCheck(this.receiveId, this.page, this.pageSize).subscribe({
        next: (res: any) => {
          let list = res;
          for (const { index, value } of list.map((value, index) => ({ index, value }))){
            list[index].isSelected = false;
            list[index].userReadId = this.creatorUserId;
            this.checkList.push(list[index]);
          }
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

  // Select all / Deselect all
  checkUncheckAll() {
    for (var i = 0; i < this.checkList.length; i++) {
      this.checkList[i].isSelected = this.masterSelected;
    }
 
    this.getCheckedItemList();
  }

  isAllSelected(i: any) {
    this.masterSelected = this.checkList.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }

  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.checkList.length; i++) {
      if(this.checkList[i].isSelected)
      this.checkedList.push(this.checkList[i]);
    }
    // this.checkedList = JSON.stringify(this.checkedList);
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
