import { AnnouncementServiceProxy, SendAnnouncement_ENTITY, WorkTimeServiceProxy } from '../../../../shared/service-proxies/service-proxies';
//import { AnnouncementServiceProxy, WorkTimeServiceProxy } from '../../../../shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { SignalRService } from '../../../../service/signalR.service';
import { LocalStorageService } from '../../../core/local-storage/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { AppConsts } from '../../../../shared/AppConsts';
import { AppSettings } from '../../../../AppSettings';
export const AUTH_KEY = 'AUTH';


@Component({
  selector: 'app-quanly-congtac',
  templateUrl: './QuanLyCongTac.page.html',
  styleUrls: ['./QuanLyCongTac.page.scss']
})
export class QuanLyCongTac implements OnInit {
  globalUrlAPI: string = AppConsts.remoteServiceBaseUrl + '/attachments/';
  hrWorkTimeDto: any = {};
  isLoading: boolean = false;
  denies: string = '';
  totalUnred: number = 0;
  id: any;
  receiveId: any;
  isReceive: boolean = true;
  avatar: string;
  hoVaTen: string;
  tenCty: string;

  constructor(
    private _loadingCtrl: LoadingController,
    public _alertController: AlertController,
    private _signalRSevice: SignalRService,
    private _announcementServiceProxy: AnnouncementServiceProxy,
    private _localStorageService: LocalStorageService,
    private acRouter: ActivatedRoute,
    private workTimeServiceProxy: WorkTimeServiceProxy,
    private http: HttpClient,
    private _router: Router,


  ) {
    this.id = this.acRouter.snapshot.queryParams.id;
    this.receiveId = this._localStorageService.getItem(AUTH_KEY).userId;
    this._signalRSevice.retrieveMappedObject().subscribe(
      (message) => {
        this._announcementServiceProxy.getAllUnRead(this.receiveId).subscribe({
          next: (res) => {
            if (res) {
              this.totalUnred = res.length;
            }
          }
        });
      });
  }

  ngOnInit() {
    this.avatar = this._localStorageService.getItem(AUTH_KEY).image;
    this.hoVaTen = this._localStorageService.getItem(AUTH_KEY).hoVaTen;
    this.tenCty = this._localStorageService.getItem(AUTH_KEY).tenCty;
  }

  ionViewWillEnter() {
    this.loadingDefault();
    this._announcementServiceProxy.getAllUnRead(this.receiveId).subscribe({
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

  getDetail() {
    this.workTimeServiceProxy.getWorkTimeDetail(this.id).subscribe({
      next: async (res) => {
        if(res){
          this.hrWorkTimeDto = res;
          this.hrWorkTimeDto['timeFromMoment'] = moment(res.timeFrom).clone().locale('vi').format('HH:mm DD/MM/YYYY');
          this.hrWorkTimeDto['timeToMoment'] = moment(res.timeTo).clone().locale('vi').format('HH:mm DD/MM/YYYY');
        }
        this.dismissLoading();
      },
      error: (err: any) => {
        this.dismissLoading();
        console.log(err);
      }
    });
  }

  onCreateOrEdit(form: NgForm) {
    this.loadingDefault();
    let formData = new FormData;
    if (this.id) formData.append('Id', this.id);
    if (!this.isReceive) {
      if (this.denies.trim().length === 0) {
        this.showAlertController('Từ chối đơn bắt buộc phải có lý do.');
        return false;
      }
      if (form.value.denies) formData.append('Notes', form.value.denies);
    }
    if (this.hrWorkTimeDto.nextApproverId) formData.append('NextApproverId', this.hrWorkTimeDto.nextApproverId.toString());
    if (this.hrWorkTimeDto.reasons) formData.append('Reasons', this.hrWorkTimeDto.reasons);
    if (this.avatar) formData.append('Image', this.avatar);
    if (this.hoVaTen) formData.append('HoVaTen', this.hoVaTen);
    if (this.tenCty) formData.append('TenCty', this.tenCty);
    if (this.hrWorkTimeDto.documentType) formData.append('DocumentType', this.hrWorkTimeDto.documentType);
    if (this.hrWorkTimeDto.creatorUserId) formData.append('CreatorUserId', this.hrWorkTimeDto.creatorUserId.toString());
    if (this.hrWorkTimeDto) formData.append('Email', this.hrWorkTimeDto.emailAddress);
    if (this.receiveId) formData.append('ApproverId', this.receiveId);
    if (this.hrWorkTimeDto.truongNhomId) formData.append('TruongNhomId', this.hrWorkTimeDto.truongNhomId.toString());
    if (this.hrWorkTimeDto.truongPhongId) formData.append('TruongPhongId', this.hrWorkTimeDto.truongPhongId.toString());
    if (this.hrWorkTimeDto.giamDocKhoiId) formData.append('GiamDocKhoiId', this.hrWorkTimeDto.giamDocKhoiId.toString());
    if (this.hrWorkTimeDto.tcnsId) formData.append('TcnsId', this.hrWorkTimeDto.tcnsId.toString());
    if (this.hrWorkTimeDto.giamDocDieuHanhId) formData.append('GiamDocDieuHanhId', this.hrWorkTimeDto.giamDocDieuHanhId.toString());
    if (this.hrWorkTimeDto.timeFrom) formData.append('TimeFrom', this.hrWorkTimeDto.timeFrom.clone().locale('vi').format('YYYY-MM-DD') + 'T' + this.hrWorkTimeDto.timeFrom.clone().locale('vi').format('HH:mm:ss'));
    if (this.hrWorkTimeDto.timeTo) formData.append('TimeTo', this.hrWorkTimeDto.timeTo.clone().locale('vi').format('YYYY-MM-DD') + 'T' + this.hrWorkTimeDto.timeTo.clone().locale('vi').format('HH:mm:ss'));
    if (this.hrWorkTimeDto.documentType) formData.append('DocumentType', this.hrWorkTimeDto.documentType);

    if(Object.keys(this.hrWorkTimeDto).length === 0 && this.hrWorkTimeDto.constructor === Object){
      this.showAlertController('Có lỗi xảy ra, vui lòng thử lại..!');
      return;
    }

    this.http.post(AppSettings.API_ENDPOINT + "/api/WorkTime/CreateOrEditForMobile", formData).subscribe({
      next: async (res: any) => {
        let sendUserDto: SendAnnouncement_ENTITY = new SendAnnouncement_ENTITY();
        sendUserDto = res.result;
        this._announcementServiceProxy.sendMessageToClient(sendUserDto).subscribe(async (res) => {
        });
        this.denies = '';
        this._router.navigateByUrl('app/main/danhsach-choduyet');
        !this.isReceive ? this.showAlertController('Bạn đã từ chối đơn đăng ký thành công!') : this.showAlertController('Bạn đã duyệt đơn đăng ký thành công!');
      }, error: (err: any) => {
        console.log(err);
        this.showAlertController('Có lỗi xảy ra, vui lòng thử lại.');
      },
    });
  }

  async loadingDefault() {
    this.isLoading = true;
    return await this._loadingCtrl.create({
      //   message: 'Đang xử lý........',
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

  public greaterThan(sub: number, num: number): boolean {
    return true ? sub <= num : sub >= num;
  }

}
