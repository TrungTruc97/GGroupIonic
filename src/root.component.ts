import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { UtilService } from './service/util.service';
import { TokenAuthServiceProxy } from './shared/service-proxies/service-proxies';
import { LocalStorageService } from './app/core/local-storage/local-storage.service';
import { Network } from '@ionic-native/network/ngx';
import { ToastController } from '@ionic/angular';
import 'rxjs/add/operator/timeout';
export const AUTH_KEY = 'AUTH';

@Component({
  selector: 'app-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.scss']
})
export class RootComponent {
  toast: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _utilService: UtilService,
    private _router: Router,
    private _localStorageService: LocalStorageService,
    private _tokenAuthServiceProxy: TokenAuthServiceProxy,
    private network: Network,
    public toastController: ToastController,
  ) {
    this.initializeApp();
    this._tokenAuthServiceProxy.logOut().subscribe({
      next: (result) => {
      },
      error: async (err: any) => {
        console.log(err);
      }
    });
    this._utilService.deleteCookie('token');
    let rememberMe = false;
    let username = null;
    let password = null;
    if(this._localStorageService.getItem(AUTH_KEY)){
      rememberMe = this._localStorageService.getItem(AUTH_KEY).rememberMe;
      username = this._localStorageService.getItem(AUTH_KEY).username;
      password = this._localStorageService.getItem(AUTH_KEY).password;
    }
    if(rememberMe == false){
      this._localStorageService.setItem(AUTH_KEY, {
        isAuthenticated: true,
                accessToken: null,
                userId: null,
                userName: null,
                password: null,
                hoVaTen: null,
                tenCty: null,
                maChamCong: null,
                image: null,
                branchId: null,
                branchType: null,
                branchCode: null,
                email: null,
                rememberMe: rememberMe
      });
    }else{
      this._localStorageService.setItem(AUTH_KEY, {
        isAuthenticated: true,
                accessToken: null,
                userId: null,
                username: username,
                password: password,
                hoVaTen: null,
                tenCty: null,
                maChamCong: null,
                image: null,
                branchId: null,
                branchType: null,
                branchCode: null,
                email: null,
                rememberMe: rememberMe
      });
    }
  
    this._router.navigateByUrl('/account/login');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      let disconnectSubscription = this.network.onDisconnect().subscribe(async () => {
        try {
          this.toast.dismiss();
      } catch(e) {}
        await this.showToast();
      });
  
      let connectSubscription = this.network.onConnect().subscribe(async () => {
        try {
          this.toast.dismiss();
      } catch(e) {}
      });

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async showToast(){
    this.toast = await this.toastController.create({
      message: 'Bạn đang không kết nối mạng. Vui lòng kết nối để tiếp tục!',
      showCloseButton: false
    });
    await this.toast.present();
  }

}
