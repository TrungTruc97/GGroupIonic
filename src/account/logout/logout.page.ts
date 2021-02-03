import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { UtilsService } from 'abp-ng2-module/src/utils/utils.service';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { TokenAuthServiceProxy  } from '../../shared/service-proxies/service-proxies';
import { LocalStorageService } from '../../app/core/local-storage/local-storage.service';
import { LoadingController } from '@ionic/angular';
import { AlertController, NavController  } from '@ionic/angular';

export const AUTH_KEY = 'AUTH';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  checkPauseResume = false;
  isLoading = false;
  @ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;

  constructor(
    private _utilService: UtilsService,
    private _router: Router,
    private _location: Location,
    private _tokenAuthServiceProxy: TokenAuthServiceProxy,
    private _localStorageService: LocalStorageService,  
    public _alertController: AlertController,
    public navCtrl: NavController,
    private _loadingCtrl: LoadingController,

  ) { 
  }

  ngOnInit() {
    this.loadingDefault();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.myDiv.nativeElement.click();
    }, 100);
  }

  async logOut(){
        await this._tokenAuthServiceProxy.logOut().subscribe({
          next: (result) => {
          },
          error: async (err: any) => {  
            console.log(err);
          }});
          this._utilService.deleteCookie('token');
          let username = this._localStorageService.getItem(AUTH_KEY).username;
          let password = this._localStorageService.getItem(AUTH_KEY).password;
          let rememberMe = this._localStorageService.getItem(AUTH_KEY).rememberMe;
          
          if(rememberMe){
            this._localStorageService.setItem(AUTH_KEY, {
              userId: null,
              username: username,
              password: password,
              hoVaTen: null,
              tenCty: null,
              maChamCong: null,
              isAuthenticated: false,
              accessToken: null,
              image: null,
              branchId: null,
              branchType: null,
              branchCode: null,
              email: null,
              rememberMe: rememberMe
            });
          }else{
            this._localStorageService.setItem(AUTH_KEY, {
              userId: null,
              username: null,
              password: null,
              hoVaTen: null,
              tenCty: null,
              maChamCong: null,
              isAuthenticated: false,
              accessToken: null,
              image: null,
              branchId: null,
              branchType: null,
              branchCode: null,
              email: null,
              rememberMe: rememberMe
            });
          }
        this._router.navigateByUrl('/account/login');
    await this.dismissLoading();
    
  }
  backPage(){
    this._location.back();
  }

  
  async loadingDefault(){
    this.isLoading = true;
    return await this._loadingCtrl.create({
    //  message: 'Đang xử lý........',
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


}
