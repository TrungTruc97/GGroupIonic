// import { AnnouncementServiceProxy } from '../../../../shared/service-proxies/service-proxies';
import { AnnouncementServiceProxy, SendAnnouncement_ENTITY, WorkTimeServiceProxy } from '../../../../shared/service-proxies/service-proxies';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActionSheetController, LoadingController, Platform, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { SignalRService } from '../../../../service/signalR.service';
import { Announcement } from '../../../../core/modal/Announcement';
import { LocalStorageService } from '../../../core/local-storage/local-storage.service';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/Storage';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppSettings } from '../../../../AppSettings';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Router } from '@angular/router';

export const AUTH_KEY = 'AUTH';
export const STORAGE_KEY = 'my_images'

@Component({
  selector: 'app-create-congtac',
  templateUrl: './CreateCongTac.page.html',
  styleUrls: ['./CreateCongTac.page.scss']
})
export class CreateCongTac implements OnInit {
  startDate: String = new Date().toISOString();
  endDate: String = new Date().toISOString();
  dateFrom = moment().clone().locale('vi').add(1, 'days');
  dateTo = moment().clone().locale('vi').add(1, 'days');

  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  isLoading: boolean = false;
  items = [];
  listHovaten = [];
  infoTruongNhom: any;
  infoTruongPhong: any;
  infoGiamDocKhoi: any;
  infoPhongTCNS: any;
  infoGiamDocDieuHanh: any;
  hoVaTen: string;
  tenCty: string;
  customPickerOptions: any;
  tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  // myDate = (new Date(Date.now() - this.tzoffset)).toISOString().slice(0, -1);
  chonNgay = (new Date(Date.now() - this.tzoffset)).toISOString().slice(0, -1);
  tuNgay = (new Date(Date.now() - this.tzoffset)).toISOString().slice(0, -1);
  denNgay = (new Date(Date.now() - this.tzoffset)).toISOString().slice(0, -1);
  creatorUserId: number;
  lydo: string = '';
  announcement: Announcement;
  totalUnred: number = 0;
  avatar: string;
  valueFirstTime: string = '07:45';
  valueLastTime: string = '17:30';
  tabActive: number = 1;
  documentType: string = 'NP';
  images = [];
  branchType: string;
  branchId: any;
  email: string;
  loaiNghiPhep: string = 'NGHIPHEPNAM';

  constructor(
    private _loadingCtrl: LoadingController,
    public _alertController: AlertController,
    private _signalRSevice: SignalRService,
    private _announcementServiceProxy: AnnouncementServiceProxy,
    private _localStorageService: LocalStorageService,
    private camera: Camera,
    private file: File,
    private webView: WebView,
    private _platform: Platform,
    private storage: Storage,
    private toastController: ToastController,
    private actionSheetController: ActionSheetController,
    private ref: ChangeDetectorRef,
    private http: HttpClient,
    private filePath: FilePath,
    private workTimeServiceProxy: WorkTimeServiceProxy,
    private _router: Router

  ) {
    this._platform.ready().then(() => {
      this.loadStoredImages();
    });
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
    this.branchId = this._localStorageService.getItem(AUTH_KEY).branchId;
    this.hoVaTen = this._localStorageService.getItem(AUTH_KEY).hoVaTen;
    this.tenCty = this._localStorageService.getItem(AUTH_KEY).tenCty;
    this.avatar = this._localStorageService.getItem(AUTH_KEY).image;
    this.branchType = this._localStorageService.getItem(AUTH_KEY).branchType;
    this.email = this._localStorageService.getItem(AUTH_KEY).email;
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
    this.getQuyTrinhDuyet();
  }

  getQuyTrinhDuyet() {
    this.workTimeServiceProxy.getQuyTrinhDuyet(this.branchId).subscribe({
      next: (res) => {
        if (res) {
          if (res.truongNhom) this.infoTruongNhom = res.truongNhom;
          if (res.truongPhong) this.infoTruongPhong = res.truongPhong;
          if (res.giamDocKhoi) this.infoGiamDocKhoi = res.giamDocKhoi;
          if (res.tcns) this.infoPhongTCNS = res.tcns;
          if (res.giamDocDieuHanh) this.infoGiamDocDieuHanh = res.giamDocDieuHanh;
        }
        this.dismissLoading();
      }, error: (err) => {
        console.log(err);
      }
    });
  }



  ionViewDidLeave() {
    this.storage.set(STORAGE_KEY, null).then();
  }

  loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        let arr = JSON.parse(images);
        this.images = [];
        for (let img of arr) {
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({ name: img, path: resPath, filePath: filePath });
        }
      }
    });
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webView.convertFileSrc(img);
      return converted;
    }
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Chọn nguồn ảnh",
      buttons: [{
        text: 'Chọn ảnh từ thư viện',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Sử dụng camera',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Hủy',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
      if (this._platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    });
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      this.updateStoredImages(newFileName);
    }, error => {
      this.presentToast('Lỗi');
    });
  }

  createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  updateStoredImages(name) {
    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      if (!arr) {
        let newImages = [name];
        this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
        arr.push(name);
        this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);

      let newEntry = {
        name: name,
        path: resPath,
        filePath: filePath
      };

      this.images = [newEntry, ...this.images];
      this.ref.detectChanges(); // trigger change detection cycle
    });
  }

  async confirmDeleteImage(imgEntry, position, flag) {
    const alert = await this._alertController.create({
      cssClass: 'my-custom-class',
      header: 'Thông báo',
      message: 'Bạn có chắc muốn xóa hình này không?',
      buttons: [{ text: 'Hủy', role: 'cancel' }, {
        text: 'Đồng ý', handler: () => {
          this.deleteImage(imgEntry, position, flag);
        }
      }]
    });
    await alert.present();
  }

  deleteImage(imgEntry, position, flag) {
    this.images.splice(position, 1);
    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      let filtered = arr.filter(name => name != imgEntry.name);
      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
      var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
      this.file.removeFile(correctPath, imgEntry.name).then(async (res) => {
        if (flag === true) {
          await this.presentToast('Đã xóa hình ảnh, vui lòng chọn lại.');
        }
      });
    });
  }

  onCreateWorkTime(form: NgForm) {
    this.loadingDefault();
    if (this.documentType === 'QCC' || this.documentType == 'CT') {
      if (this.images.length == 0) {
        this.dismissLoading();
        this.showAlertController("Cần upload ảnh chứng minh");
        return false;
      }
    }
    if (form.value.lydo.trim().length <= 0) {
      this.showAlertController('Không được bỏ trống mục lý do.');
      return false;
    }

    this.workTimeServiceProxy.getQuyTrinhDuyet(this.branchId).subscribe({
      next: (res) => {
        if (res) {
          if (res.truongNhom) this.infoTruongNhom = res.truongNhom;
          if (res.truongPhong) this.infoTruongPhong = res.truongPhong;
          if (res.giamDocKhoi) this.infoGiamDocKhoi = res.giamDocKhoi;
          if (res.tcns) this.infoPhongTCNS = res.tcns;
          if (res.giamDocDieuHanh) this.infoGiamDocDieuHanh = res.giamDocDieuHanh;
        }
        if (this.images.length > 0) {
          this.file.resolveLocalFilesystemUrl(this.images[0].filePath)
            .then(entry => {
              (<FileEntry>entry).file(file => this.readFile(file, form))
            })
            .catch(err => {
              this.presentToast('Lỗi khi đọc file');
            });
        } else {
          let formData: FormData = new FormData();
          this.prepareCreateOrEditMobile(formData, form);
        }
      }, error: (err) => {
        console.log(err);
        this.showAlertController('Có lỗi xảy ra. Vui lòng thử lại.');
      }
    });
  }

  readFile(file: any, form: NgForm) {
    const reader = new FileReader();
    reader.onload = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {
        type: file.type
      });
      if (this.documentType === 'QCC' || this.documentType === 'CT') formData.append('Attachment', imgBlob, file.name);
      this.prepareCreateOrEditMobile(formData, form);
    };
    reader.readAsArrayBuffer(file);
  }

  async prepareCreateOrEditMobile(formData: FormData, form: NgForm) {

    // let truongNhomId: any;
    let formatTuNgayForCompare: string = '';
    let formatDenNgayForCompare: string = '';
    let formatFirstTime: string = '';
    let formatLastTime: string = '';
    let tuNgayDate: string = '';
    let denNgayDate: string = '';
    if (this.tabActive == 4) {
      let tuNgayFromForm = form.value.tuNgay;
      let denNgayFromForm = form.value.denNgay;
      let formatTuNgay: string = '';
      let formatDenNgay: string = '';
      if (typeof (tuNgayFromForm) !== 'string') {
        let timeTemp = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '00:00:00';
        formatTuNgay = moment(timeTemp).clone().format('dddd') == 'Monday' ? tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text : tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text;
        formatTuNgayForCompare = moment(timeTemp).clone().format('dddd') == 'Monday' ? tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '07:30:00' : tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '07:45:00';
        tuNgayDate = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text;
      } else {
        let timeTemp = moment(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '00:00:00';
        formatTuNgay = moment(timeTemp).clone().format('dddd') == 'Monday' ? moment(tuNgayFromForm).format('DD/MM/YYYY') : moment(tuNgayFromForm).format('DD/MM/YYYY');
        formatTuNgayForCompare = moment(timeTemp).clone().format('dddd') == 'Monday' ? moment(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '07:30:00' : moment(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '07:45:00';
        tuNgayDate = moment(tuNgayFromForm).format('YYYY-MM-DD');
      }
      formData.append('TimeFrom', formatTuNgay);
      // body.timeFrom = formatTuNgay;
      formatDenNgay = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.day.text + '/' + denNgayFromForm.month.text + '/' + denNgayFromForm.year.text : moment(denNgayFromForm).format('DD/MM/YYYY');
      formatDenNgayForCompare = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text + 'T' + '12:00:00' : moment(denNgayFromForm).format('YYYY-MM-DD') + 'T' + '12:00:00';
      denNgayDate = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text : moment(denNgayFromForm).format('YYYY-MM-DD');
      formData.append('TimeTo', formatDenNgay);
      //  body.timeTo = formatDenNgay;

    } else {
      if (this.tabActive == 1) {
        let tuNgayFromForm = form.value.chonNgay;
        let denNgayFromForm = form.value.chonNgay;
        let formatTuNgay: string = '';
        let formatDenNgay: string = '';

        if (typeof (tuNgayFromForm) !== 'string') {
          let timeTemp = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '00:00:00';
          formatTuNgay = moment(timeTemp).clone().format('dddd') == 'Monday' ? tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text + ' ' + '07:30' : tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text + ' ' + '07:45';
          formatTuNgayForCompare = moment(timeTemp).clone().format('dddd') == 'Monday' ? tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '07:30:00' : tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '07:45:00';
          tuNgayDate = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text;
        } else {
          let timeTemp = moment(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '00:00:00';
          formatTuNgay = (moment(timeTemp).clone().format('dddd') == 'Monday') ? moment(tuNgayFromForm).format('DD/MM/YYYY') + ' ' + '07:30' : moment(tuNgayFromForm).format('DD/MM/YYYY') + ' ' + '07:45';
          formatTuNgayForCompare = (moment(timeTemp).clone().format('dddd') == 'Monday') ? moment(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '07:30:00' : moment(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '07:45:00';;
          tuNgayDate = moment(tuNgayFromForm).format('YYYY-MM-DD');
        }
        formData.append('TimeFrom', formatTuNgay += ':00');
        //  body.timeFrom = formatTuNgay;

        formatDenNgay = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.day.text + '/' + denNgayFromForm.month.text + '/' + denNgayFromForm.year.text + ' ' + '12:00' : moment(denNgayFromForm).format('DD/MM/YYYY') + ' ' + '12:00';
        formatDenNgayForCompare = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text + 'T' + '12:00:00' : moment(denNgayFromForm).format('YYYY-MM-DD') + 'T' + '12:00:00';
        denNgayDate = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text : moment(denNgayFromForm).format('YYYY-MM-DD');
        formData.append('TimeTo', formatDenNgay += ':00');
        //  body.timeTo = formatDenNgay;

      } else if (this.tabActive == 2) {
        let tuNgayFromForm = form.value.chonNgay;
        let denNgayFromForm = form.value.chonNgay;
        let formatTuNgay: string = '';
        let formatDenNgay: string = '';
        formatTuNgay = typeof (tuNgayFromForm) !== 'string' ? tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text + ' ' + '13:00' : moment(tuNgayFromForm).format('DD/MM/YYYY') + ' ' + '13:00';
        formatTuNgayForCompare = typeof (tuNgayFromForm) !== 'string' ? tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + '13:00:00' : moment(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '13:00:00';
        tuNgayDate = typeof (tuNgayFromForm) !== 'string' ? tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text : moment(tuNgayFromForm).format('YYYY-MM-DD');
        formData.append('TimeFrom', formatTuNgay += ':00');
        // body.timeFrom = formatTuNgay;


        formatDenNgay = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.day.text + '/' + denNgayFromForm.month.text + '/' + denNgayFromForm.year.text + ' ' + '17:30' : moment(denNgayFromForm).format('DD/MM/YYYY') + ' ' + '17:30';
        formatDenNgayForCompare = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text + 'T' + '17:30:00' : moment(denNgayFromForm).format('YYYY-MM-DD') + 'T' + '17:30:00';
        denNgayDate = typeof (denNgayFromForm) !== 'string' ? denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text : moment(denNgayFromForm).format('YYYY-MM-DD');
        formData.append('TimeTo', formatDenNgay += ':00');
        // body.timeTo = formatDenNgay;


      } else if (this.tabActive == 3) {
        let tuNgayFromForm = form.value.chonNgay;
        let denNgayFromForm = form.value.chonNgay;
        let firstTimeFromForm = form.value.valueFirstTime;
        let lastTimeFromForm = form.value.valueLastTime;
        let formatTuNgay: string = '';
        let formatDenNgay: string = '';


        if (typeof (tuNgayFromForm) !== 'string') {

          formatFirstTime = typeof (firstTimeFromForm) !== 'string' ? firstTimeFromForm.hour.text + ':' + firstTimeFromForm.minute.text : firstTimeFromForm;
          formatLastTime = typeof (lastTimeFromForm) !== 'string' ? lastTimeFromForm.hour.text + ':' + lastTimeFromForm.minute.text : lastTimeFromForm;
          formatTuNgay = tuNgayFromForm.day.text + '/' + tuNgayFromForm.month.text + '/' + tuNgayFromForm.year.text + ' ' + formatFirstTime;
          formatTuNgayForCompare = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text + 'T' + formatFirstTime + ':00';
          formatDenNgay = denNgayFromForm.day.text + '/' + denNgayFromForm.month.text + '/' + denNgayFromForm.year.text + ' ' + formatLastTime;
          formatDenNgayForCompare = denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text + 'T' + formatLastTime + ':00';
          tuNgayDate = tuNgayFromForm.year.text + '-' + tuNgayFromForm.month.text + '-' + tuNgayFromForm.day.text;
          denNgayDate = denNgayFromForm.year.text + '-' + denNgayFromForm.month.text + '-' + denNgayFromForm.day.text;

        } else {
          if (typeof (firstTimeFromForm) !== 'string') {
            formatFirstTime = firstTimeFromForm.hour.text + ':' + firstTimeFromForm.minute.text;
          } else {
            formatFirstTime = firstTimeFromForm;
          }
          formatTuNgay = moment(tuNgayFromForm).format('DD/MM/YYYY') + ' ' + formatFirstTime;
          formatTuNgayForCompare = moment(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + formatFirstTime + ':00';
          tuNgayDate = moment(tuNgayFromForm).format('YYYY-MM-DD');
          if (typeof (lastTimeFromForm) !== 'string') {
            formatLastTime = typeof (lastTimeFromForm) !== 'string' ? lastTimeFromForm.hour.text + ':' + lastTimeFromForm.minute.text : lastTimeFromForm;
          } else {
            formatLastTime = lastTimeFromForm;
          }
          formatDenNgay = moment(denNgayFromForm).format('DD/MM/YYYY') + ' ' + formatLastTime;
          formatDenNgayForCompare = moment(denNgayFromForm).format('YYYY-MM-DD') + 'T' + formatLastTime + ':00';
          denNgayDate = moment(denNgayFromForm).format('YYYY-MM-DD');
        }

        // body.timeFrom += ':00';
        // body.timeTo += ':00';
        formData.append('TimeFrom', formatTuNgay += ':00');
        formData.append('TimeTo', formatDenNgay += ':00');

      }
    }

    if (moment(formatTuNgayForCompare) > moment(formatDenNgayForCompare)) {
      this.showAlertController('Thời gian đăng ký không hợp lệ');
      return false;
    }

    if (this.tabActive === 4) {
      if (moment(tuNgayDate + 'T00:00:00') >= moment(denNgayDate + 'T00:00:00')) {
        this.showAlertController('Thời gian đăng ký không hợp lệ');
        return false;
      }
    }

    if (this.documentType !== 'TC') {
      if ((moment(formatTuNgayForCompare).clone().format('dddd') === 'Saturday') || (moment(formatTuNgayForCompare).clone().format('dddd') === 'Sunday')) {
        this.showAlertController('Ngày bắt đầu không được là thứ 7 hoặc chủ nhật');
        return false;
      }

      if ((moment(formatDenNgayForCompare).clone().format('dddd') === 'Saturday') || (moment(formatDenNgayForCompare).clone().format('dddd') === 'Sunday')) {
        this.showAlertController('Ngày kết thúc không được là thứ 7 hoặc chủ nhật');
        return false;
      }
    }

    if (this.tabActive === 3) {
      const tuNgayDateTime = tuNgayDate + 'T' + formatFirstTime + ':00';
      const denNgayDateTime = denNgayDate + 'T' + formatLastTime + ':00';
      if (moment(tuNgayDateTime) >= moment(denNgayDateTime)) {
        this.showAlertController('Thời gian đăng ký không hợp lệ');
        return false;
      }
      if (this.documentType !== 'TC') {
        if (moment(tuNgayDateTime).format('dddd') === 'Monday') {
          if (!moment(tuNgayDateTime).isBetween(moment(tuNgayDate + 'T07:29:00'), moment(moment(tuNgayDate + 'T17:31:00')))) {
            this.showAlertController('Thời gian phải nằm trong giờ hành chính');
            return false;
          }
        } else {
          if (!moment(tuNgayDateTime).isBetween(moment(tuNgayDate + 'T07:44:00'), moment(moment(tuNgayDate + 'T17:31:00')))) {
            this.showAlertController('Thời gian phải nằm trong giờ hành chính');
            return false;
          }
        }

        if (moment(denNgayDateTime).format('dddd') === 'Monday') {
          if (!moment(denNgayDateTime).isBetween(moment(denNgayDate + 'T07:29:00'), moment(moment(denNgayDate + 'T17:31:00')))) {
            this.showAlertController('Thời gian phải nằm trong giờ hành chính');
            return false;
          }
        } else {
          console.log(moment(denNgayDateTime).format('dddd'));
          if (!moment(denNgayDateTime).isBetween(moment(denNgayDate + 'T07:44:00'), moment(moment(denNgayDate + 'T17:31:00')))) {
            this.showAlertController('Thời gian phải nằm trong giờ hành chính');
            return false;
          }
        }
      }
    }

    const momentDate = moment().clone().locale('vi').format('YYYY-MM-DD');
    if ((moment(momentDate + 'T00:00:00') > moment(tuNgayDate + 'T00:00:00')) || (moment(momentDate + 'T00:00:00') > moment(denNgayDate + 'T00:00:00'))) {
      this.showAlertController('Thời gian đăng ký phải lớn hơn hoặc bằng ngày hiện tại');
      return false;
    }

    formData.append('Reasons', form.value.lydo.trim());
    if (this.avatar != null) {
      formData.append('Image', this.avatar);
    } else {
      formData.append('Image', '/uploads/defaultAvatar.png');
    }
    formData.append('HoVaTen', this.hoVaTen);
    formData.append('TenCty', this.tenCty);
    formData.append('DocumentType', this.documentType);
    formData.append('CreatorUserId', this.creatorUserId.toString());
    formData.append('Email', this.email);
    if (this.documentType === 'NP') {
      formData.append('LoaiNghiPhep', this.loaiNghiPhep);
      if (this.loaiNghiPhep === 'NGHIPHEPNAM' || this.loaiNghiPhep === 'KETHON' || this.loaiNghiPhep === 'TANGCHE') {
        formData.append('NghiCoLuong', 'true');
      } else {
        formData.append('NghiCoLuong', 'false');
      }
    }

    await this.CreateOrEditForMobile(formData);
  }

  CreateOrEditForMobile(body: FormData) {
    if (this.infoTruongNhom && this.infoTruongNhom.id) body.append('TruongNhomId', this.infoTruongNhom.id);
    if (this.infoTruongPhong && this.infoTruongPhong.id) body.append('TruongPhongId', this.infoTruongPhong.id);
    if (this.infoGiamDocKhoi && this.infoGiamDocKhoi.id) body.append('GiamDocKhoiId', this.infoGiamDocKhoi.id);
    if (this.infoPhongTCNS && this.infoPhongTCNS.id) body.append('TcnsId', this.infoPhongTCNS.id);
    if (this.infoGiamDocDieuHanh && this.infoGiamDocDieuHanh.id) body.append('GiamDocDieuHanhId', this.infoGiamDocDieuHanh.id);
    this.http.post(AppSettings.API_ENDPOINT + "/api/WorkTime/CreateOrEditForMobile", body).subscribe({
      next: async (res: any) => {
        let sendUserDto: SendAnnouncement_ENTITY = new SendAnnouncement_ENTITY();
        sendUserDto = res.result;
        await this._announcementServiceProxy.sendMessageToClient(sendUserDto).subscribe(async (res) => {

        });
        this.lydo = '';
        if (this.images.length > 0) {
          this.deleteImage(this.images[0], 0, false);
        }
        this.documentType = 'NP';
        this.showAlertController('Bạn đã đăng ký thành công!');
      }, error: (res: HttpErrorResponse) => {
        this.showAlertController('Đăng ký không thành công. Vui lòng thử lại.');
      },
    });
  }

  changeToGetTime(event) {
    let dateTimechoosed = event.detail.value;
    dateTimechoosed = dateTimechoosed.year.text + '-' + dateTimechoosed.month.text + '-' + dateTimechoosed.day.text + 'T' + '07:30:00';
    if (moment(dateTimechoosed).clone().format('dddd') == 'Monday') {
      this.valueFirstTime = '07:30';
    } else {
      this.valueFirstTime = '07:45';
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

  chooseTab(flag: number) {
    this.tabActive = flag;
    if (flag == 3) {
      let tuNgayFromForm = this.chonNgay;
      let timeCurrent = moment(tuNgayFromForm).format('YYYY-MM-DD') + 'T' + '00:00:00';
      if (moment(timeCurrent).clone().format('dddd') == 'Monday') {
        this.valueFirstTime = '07:30';
      } else {
        this.valueFirstTime = '07:45';
      }
    } else if (flag == 4) {
      this.documentType = 'NP';
    }
  }

  backToHome() {
    setTimeout(() => {
      this._router.navigateByUrl('app/main/home');
    }, 1000);
  }

}
