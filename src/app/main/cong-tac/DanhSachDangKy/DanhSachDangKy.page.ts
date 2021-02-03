import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../../../service/util.service';
import { AppConsts } from '../../../../shared/AppConsts';
import * as moment from 'moment';
import { AlertController, LoadingController } from '@ionic/angular';
// import { AnnouncementDto, AnnouncementServiceProxy, HrWorkTimeDto, SendUserDto, TokenAuthServiceProxy, WorkTimeServiceProxy } from '../../../../shared/service-proxies/service-proxies';
import { HR_Announcement_ENTITY, AnnouncementServiceProxy,HrWorkTime_ENTITY, HrWorkTime, SendAnnouncement_ENTITY, TokenAuthServiceProxy, WorkTimeServiceProxy } from '../../../../shared/service-proxies/service-proxies';
import { LocalStorageService } from '../../../core/local-storage/local-storage.service';
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
    selector: 'danhsachdangky',
    templateUrl: 'DanhSachDangKy.page.html',
    styleUrls: ['DanhSachDangKy.page.scss'],
})
export class DanhSachDangKy implements OnInit {
    userId: string;
    branchType: string;
    maChamCong: any;
    moment = moment();
    checkPauseResume = false;
    hoVaTen: string;
    creatorUserId: number;
    isLoading = false;
    tenCty: string;
    // anouncementArrayDto: AnnouncementDto[];
    globalUrlAPI: string = AppConsts.remoteServiceBaseUrl;
    avatar: string;
    hrWorkTimeDto: HrWorkTime_ENTITY[] = [];
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
        this.userId = <string>this._localStorageService.getItem(AUTH_KEY).userId;
        this.creatorUserId = this._localStorageService.getItem(AUTH_KEY).userId;

        this._signalRSevice.retrieveMappedObject().subscribe(
            (message) => {
              this._announcementServiceProxy.getAllUnRead(this.creatorUserId).subscribe({
                next: (res) => {
                  if (res) {
                    this.totalUnred = res.length;
                  }
                }
              });
            });
    }

    ngOnInit() {
        this.hoVaTen = this._localStorageService.getItem(AUTH_KEY).hoVaTen;
        this.tenCty = this._localStorageService.getItem(AUTH_KEY).tenCty;
        this.avatar = this._localStorageService.getItem(AUTH_KEY).image;
    }

    ionViewWillEnter(){
        this.loadingDefault();
        this._announcementServiceProxy.getAllUnRead(this.creatorUserId).subscribe({
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
        this.getListMyWorkTime();
    }

    getListMyWorkTime() {
        this.page = 1;
        this.workTimeServiceProxy.getListMyWorktime(this.userId, this.page, this.pageSize).subscribe({
            next: (res: HrWorkTime_ENTITY[]) => {
                this.hrWorkTimeDto = res;
                this.dismissLoading();
            },
            error: (err: any) => {
                this.dismissLoading();
                console.log(err);
            }
        });
    }

    edit(id: any) {
        if (id) {
            this._router.navigate(['app/main/edit-congtac'], {
                queryParams: { id: id }
            });
        }
    }

    onCreateOrEdit(id: any, thongtinWorkTime: HrWorkTime) {
        this.loadingDefault();
        let formData = new FormData;
        formData.append('Id', id);
        formData.append('NextApproverId', thongtinWorkTime.nextApproverId.toString());
        formData.append('Reasons', thongtinWorkTime.reasons);
        formData.append('Image', this.avatar);
        formData.append('HoVaTen', this.hoVaTen);
        formData.append('TenCty', this.tenCty);
        formData.append('DocumentType', thongtinWorkTime.documentType);
        formData.append('CreatorUserId', thongtinWorkTime.creatorUserId.toString());
        formData.append('Email', thongtinWorkTime.emailAddress);
        if (thongtinWorkTime.truongNhomId) formData.append('TruongNhomId', thongtinWorkTime.truongNhomId.toString());
        if (thongtinWorkTime.truongPhongId) formData.append('TruongPhongId', thongtinWorkTime.truongPhongId.toString());
        if (thongtinWorkTime.giamDocKhoiId) formData.append('GiamDocKhoiId', thongtinWorkTime.giamDocKhoiId.toString());
        if (thongtinWorkTime.tcnsId) formData.append('TcnsId', thongtinWorkTime.tcnsId.toString());
        if (thongtinWorkTime.giamDocDieuHanhId) formData.append('GiamDocDieuHanhId', thongtinWorkTime.giamDocDieuHanhId.toString());
        formData.append('TimeFrom', thongtinWorkTime.timeFrom.format('HH:mm DD/MM/YYYY'));
        formData.append('TimeTo', thongtinWorkTime.timeTo.format('HH:mm DD/MM/YYYY'));
        formData.append('DocumentType', thongtinWorkTime.documentType);

        this.http.post(AppSettings.API_ENDPOINT + "/api/WorkTime/CreateOrEditForMobile", formData).subscribe({
            next: (res: any) => {
                let sendUserDto: SendAnnouncement_ENTITY = new SendAnnouncement_ENTITY();
                sendUserDto = res.result;
                this._announcementServiceProxy.sendMessageToClient(sendUserDto).subscribe({
                    next: (res) => {}
                });
                this.getListMyWorkTime();
            }, error: (err: any) => {
                console.log(err);
                this.showAlertController('Có lỗi xuất hiện, vui lòng thử lại.');
            },
        });
    }

    async questionDelete(id: any) {
        const alert = await this._alertController.create({
            cssClass: 'my-custom-class',
            header: 'Thông báo',
            message: 'Bạn có chắc muốn xóa đơn đăng ký này không?',
            buttons: [{
              text: 'Đồng ý', handler: () => {
                this.delete(id);
              }
            },{ text: 'Hủy', role: 'cancel' }]
          });
      
          await alert.present();
      
    }

    async delete(id: any){
        this.loadingDefault();
        this.workTimeServiceProxy.deleteWorkTime(id).subscribe({
            next: async (res) => {
                this.getListMyWorkTime();
                const alertController = this._alertController;
                let alert = await alertController.create({
                    header: 'Thông báo',
                    message: 'Xóa đơn đăng ký thành công',
                    buttons: ['OK']
                });
                await alert.present();
            },
            error: (err) => {
                this.dismissLoading();
                console.log(err);
            }
        })
    }


    loadData(event) {
        if(this.hrWorkTimeDto.length > 0){
            setTimeout(() => {
                event.target.complete();
                // App logic to determine if all data is loaded
                // and disable the infinite scroll
                this.page += 1;
                this.workTimeServiceProxy.getListMyWorktime(this.userId, this.page, this.pageSize).subscribe({
                  next: (res: any) => {
                    let list = res;
                    for (const { index, value } of list.map((value, index) => ({ index, value }))){
                      this.hrWorkTimeDto.push(list[index]);
                    }
                  },
                  error: (err) => {
                    console.log(err);
                  }
                });
          
                if (this.hrWorkTimeDto.length == 1000) {
                  event.target.disabled = true;
                }
              }, 500);
        }
      }

    async showAlertController(message: string) {
        this.dismissLoading();
        const alertController = this._alertController;
        let alert = await alertController.create({
            header: 'Thông báo',
            message: message,
            buttons: ['OK']
        });
        await alert.present();
    }

    viewDetail(id: any){
        if (id) {
            this._router.navigate(['app/main/chitiet-dangky'], {
                queryParams: { id: id }
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
    
    public greaterThan(sub: number, num: number): boolean {
        return true ? sub <= num : sub >= num;
      }


  



}
