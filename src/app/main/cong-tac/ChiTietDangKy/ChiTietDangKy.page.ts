import { AnnouncementServiceProxy, HrWorkTime, WorkTimeServiceProxy } from '../../../../shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { SignalRService } from '../../../../service/signalR.service';
import { LocalStorageService } from '../../../core/local-storage/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { AppConsts } from '../../../../shared/AppConsts';
import { ImageModalPage } from '../../../../shared/image-modal/image-modal.page';
export const AUTH_KEY = 'AUTH';

@Component({
    selector: 'chitietdangky',
    templateUrl: 'ChiTietDangKy.page.html',
    styleUrls: ['ChiTietDangKy.page.scss']
})

export class ChiTietDangKy implements OnInit{
    id: any;
    creatorUserId: number;
    totalUnred: number;
    isLoading: boolean = false;
    hrWorkTimeDto: HrWorkTime;
    globalUrlAPI: string = AppConsts.remoteServiceBaseUrl + '/attachments/';

    sliderOpts = {
      zoom: {
        maxRatio: 2
      }
    }
    
    constructor(
        private _loadingCtrl: LoadingController,
        public _alertController: AlertController,
        private _router: Router,
        private _signalRSevice: SignalRService,
        private _announcementServiceProxy: AnnouncementServiceProxy,
        private _platform: Platform,
        private http: HttpClient, 
        private workTimeServiceProxy: WorkTimeServiceProxy,
        private acRouter: ActivatedRoute,
        private _localStorageService: LocalStorageService,
        private _modalContoller : ModalController
    ){
        this.id = this.acRouter.snapshot.queryParams.id;
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
    ngOnInit(){

    }
    ionViewWillEnter() {
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
        this.getDetail();
      }

      getDetail(){
        this.workTimeServiceProxy.getWorkTimeDetail(this.id).subscribe({
            next: res => {
                console.log(res);
                this.hrWorkTimeDto = res;
                this.dismissLoading();
            },
            error: err => {
                console.log(err);
            }
        })
      }

      async loadingDefault() {
        this.isLoading = true;
        return await this._loadingCtrl.create({
        }).then(a => {
            a.present().then(() => {
                if (!this.isLoading) {
                    a.dismiss().then(() => { });
                }
            });
        });
    }
    async dismissLoading() {
        this.isLoading = false;
        return await this._loadingCtrl.dismiss().then(() => { });
    }

    public greaterThan(sub: number, num: number): boolean {
        return true ? sub <= num : sub >= num;
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

      openPreview(img){
        this._modalContoller.create({
          component: ImageModalPage,
          componentProps: { 
            img: img
          }
        }).then(modal => modal.present());
      }

}