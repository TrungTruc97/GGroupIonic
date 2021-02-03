import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../../service/util.service';
import { AppConsts } from '../../../shared/AppConsts';
import * as moment from 'moment';
import { AlertController, LoadingController, Platform, ToastController } from '@ionic/angular';
import { AnnouncementServiceProxy, CHAMCONGServiceProxy, TokenAuthServiceProxy } from '../../../shared/service-proxies/service-proxies';
import { LocalStorageService } from '../../core/local-storage/local-storage.service';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';
import 'rxjs/add/operator/timeout';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import { Plugins } from '@capacitor/core';
import { MenuController } from '@ionic/angular';
import { SignalRService } from '../../../service/signalR.service';
import { Storage } from '@ionic/Storage';
import { ELocalNotificationTriggerUnit, LocalNotifications } from '@ionic-native/local-notifications/ngx';
export const STORAGE_KEY = 'my_images'

const { App } = Plugins;

export const AUTH_KEY = 'AUTH';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ipAddress: string;
  userId: any;
  branchType: string;
  maChamCong: any;
  checkPauseResume = false;
  hoVaTen: string;
  totalUnred: number = 0;
  isChecked: number = 1;
  isLoading = false;
  tenCty: string;
  dateCurrent: string = moment().locale('vi').format('dddd, DD/MM/YYYY');
  momentCurrent: string = moment().locale('vi').clone().format('HH:mm');
  countToLogout: number = 0;
  clearInterval: boolean;
  backbutton: any;
  public counter: number = 0;
  @HostListener('document:ionBackButton', ['$event']) overrideHardwareBackAction(event: any) {
    if(this._menu.isOpen()){
      this._menu.close();
    }
    if(this._router.url === '/app/main/home'){
      event.detail.register(100, async () => {
        if (this.counter == 0) {
          this.counter++;
          this.presentToast();
          setTimeout(() => { this.counter = 0 }, 2000)
        } else {
          navigator['app'].exitApp();
          event.stopImmediatePropagation();
          event.stopPropagation();
          event.preventDefault();
        }
      });
    }
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: "Nhấn lần nữa để thoát ứng dụng",
      duration: 2000,
      position: "bottom"
    });
    await toast.present();
  }
  
  constructor(
    private _utilService: UtilService,
    private _router: Router,
    public _alertController: AlertController,
    private _loadingCtrl: LoadingController,
    private _localStorageService: LocalStorageService,
    private _dataChamCongsServiceProxy: CHAMCONGServiceProxy,
    private _networkInterface: NetworkInterface,
    private _platform: Platform,
    private _tokenAuthServiceProxy: TokenAuthServiceProxy,
    private _browserTab: BrowserTab,
    public _menu: MenuController,
    private _signalRSevice: SignalRService,
    private _announcementServiceProxy: AnnouncementServiceProxy,
    private storage: Storage,
    private localNotifications: LocalNotifications,
    private toastCtrl: ToastController
  ) {
    _platform.ready().then(() => {
      this.localNotifications.on('click').subscribe(res => {
      });
      this.localNotifications.on('trigger').subscribe(res => {
      });
      this._platform.pause.subscribe(() => {
       
      });
      this._platform.resume.subscribe(() => {
        this.loadingDefault();
        this.kiemTraCheckTrongNgay();
      });
    });

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
    this.hoVaTen = this._localStorageService.getItem(AUTH_KEY).hoVaTen;
    this.tenCty = this._localStorageService.getItem(AUTH_KEY).tenCty;
    this.maChamCong = this._localStorageService.getItem(AUTH_KEY).maChamCong;
    this._utilService.getCookieValue(AppConsts.authorization.encrptedAuthTokenName);
    this.branchType = this._localStorageService.getItem(AUTH_KEY).branchType;
    setInterval(() => {
      this.dateCurrent = moment().locale('vi').format('dddd, DD/MM/YYYY');
    }, 60000);
    setInterval(() => {
      this.momentCurrent = moment().locale('vi').clone().format('HH:mm');
      if(this.momentCurrent === '08:01' || this.momentCurrent === '20:01' || this.momentCurrent === '02:01'){
        this.kiemTraCheckTrongNgay();
      }
    }, 1000);
    this.repeatingDaily();
  }
  ionViewWillEnter() {
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
    this.kiemTraCheckTrongNgay();
  }

  kiemTraCheckTrongNgay() {
    this._dataChamCongsServiceProxy.checkTrongNgay(this.maChamCong, moment().clone().locale('vi')).subscribe({
      next: (res) => {
        if (res !== null) {
          if (res.status == 'PROCESS') {
            this.isChecked = 2;
          } else if (res.status == 'SUCCESS') {
            this.isChecked = 3;
          }
        }
        this.dismissLoading();
      }
    });
    this.dismissLoading();
  }

  async checkChamCongClick() {
    this.loadingDefault();
    if (this.branchType === 'TCNS' || this.branchType === 'BGDDH') {
      this.showAlertController('Tài khoàn này không thể chấm công');
      return;
    }
    if (isNaN(this.maChamCong)) {
      this.showAlertController('Mã chấm công không hợp lệ');
      return;
    }

    this._networkInterface.getWiFiIPAddress()
      .then(async (address) => {
        var ipWifi = address.ip
        console.log(ipWifi);
        var pointWifi = ipWifi.split('.');
        if (((pointWifi[0] === '172')
          && (pointWifi[1] === '20')
          && (parseInt(pointWifi[2]) >= 0 && parseInt(pointWifi[2]) <= 3
            && parseInt(pointWifi[3]) >= 1 && parseInt(pointWifi[3]) <= 255)) || 
            ((pointWifi[0] === '172')
            && (pointWifi[1] === '21')
            && ((parseInt(pointWifi[2]) == 20 || parseInt(pointWifi[2]) == 30 || parseInt(pointWifi[2]) == 1)
              && parseInt(pointWifi[3]) >= 1 && parseInt(pointWifi[3]) <= 255))) {
          await this.checkChamCong(this.maChamCong);
        } else {
          this.showAlertController('Bạn chưa kết nối mạng nội bộ');
        }
      })
      .catch(async (error) => {
        this.showAlertController('Bạn chưa kết nối mạng nội bộ');
      });
  }

  checkOutClick() {
    this.questionCheckOut();
  }
  async questionCheckOut() {
    const alert = await this._alertController.create({
      cssClass: 'my-custom-class',
      header: 'Thông báo',
      message: 'Bạn có chắc muốn checkout ngay bây giờ không?',
      buttons: [{ text: 'Hủy', role: 'cancel' }, {
        text: 'Đồng ý', handler: () => {
          this.checkChamCongClick();
        }
      }]
    });
    await alert.present();
  }
  
  checkChamCong(maChamCong) {
    this._dataChamCongsServiceProxy.createOrEditMobile(maChamCong, this.userId).subscribe({
      next: async (result) => {
        // if (result.statusCode == 400) { this.showAlertController(result.message); } else {
        //   await this.kiemTraCheckTrongNgay();
        // }
         await this.kiemTraCheckTrongNgay();
      },
      error: async (err: any) => {
        this.showAlertController('Có lỗi xuất hiện, vui lòng thử lại sau.');
      }
    });
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

  repeatingDaily(){
   
    this.localNotifications.getAll().then(res => {
    });
      this.localNotifications.cancelAll().then(() => {
        this.localNotifications.getAll().then(res => {
        });
       this.localNotifications.schedule([{
         id: 1,
         title: 'Chào buổi sáng',
         text: 'Đã bắt đầu giờ làm việc. Bạn đã checkin chưa?',
         trigger: {every: {weekday: 5, hour: 7, minute:35}, count: 1 },
         sound: this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
        // foreground: true
       },
       {
         id: 2,
         title: 'Chào buổi sáng',
         text: 'Đã bắt đầu giờ làm việc. Bạn đã checkin chưa?',
         trigger: {every: {weekday: 5, hour: 7, minute:50}, count: 1 },
         sound: this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
        // foreground: true
       },
       {
         id: 3,
         title: 'Chào buổi sáng',
         text: 'Đã bắt đầu giờ làm việc. Bạn đã checkin chưa?',
         trigger: {every: {weekday: 5, hour: 7, minute:50}, count: 1 },
         sound: this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
        // foreground: true
       },
       {
         id: 4,
         title: 'Chào buổi sáng',
         text: 'Đã bắt đầu giờ làm việc. Bạn đã checkin chưa?',
         trigger: {every: {weekday: 5, hour: 7, minute:50}, count: 1 },
         sound: this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
        // foreground: true
       },{
         id: 5,
         title: 'Chào buổi sáng',
         text: 'Đã bắt đầu giờ làm việc. Bạn đã checkin chưa?',
         trigger: {every: {weekday: 5, hour: 7, minute:50}, count: 1 },
         sound: this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
        // foreground: true
       },
       {
         id: 6,
         title: 'Chào buổi tối',
         text: 'Đã hết giờ làm việc. Bạn đã checkout chưa?',
         trigger: {every: {weekday: 1, hour: 17, minute:35}, count: 1 },
         sound: this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
        // foreground: true
       },
       {
         id: 7,
         title: 'Chào buổi tối',
         text: 'Đã hết giờ làm việc. Bạn đã checkout chưa?',
         trigger: {every: {weekday: 2, hour: 17, minute:35}, count: 1 },
         sound: this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
        // foreground: true
       },
       {
         id: 8,
         title: 'Chào buổi tối',
         text: 'Đã hết giờ làm việc. Bạn đã checkout chưa?',
         trigger: {every: {weekday: 3, hour: 17, minute:35}, count: 1 },
         sound: this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
        // foreground: true
       },{
         id: 9,
         title: 'Chào buổi tối',
         text: 'Đã hết giờ làm việc. Bạn đã checkout chưa?',
         trigger: {every: {weekday: 4, hour: 17, minute:35}, count: 1 },
         sound: this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
        // foreground: true
       },
       {
         id: 10,
         title: 'Chào buổi tối',
         text: 'Đã hết giờ làm việc. Bạn đã checkout chưa?',
         trigger: {every: {weekday: 5, hour: 17, minute:35}, count: 1 },
         sound: this._platform.is("android") ? 'file://assets/sounds/boot.mp3' : 'file://assets/sounds/boot.caf'
        // foreground: true
       }]);
      }).then(() => {
       this.localNotifications.getAll().then(res => {
        });
      });
  }

}
