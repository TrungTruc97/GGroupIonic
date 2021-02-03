import { AuthenticateModel } from './../../shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../service/auth.service';
import { LoadingController } from '@ionic/angular';
import { UtilService } from './../../service/util.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppConsts } from '../../shared/AppConsts';
import { TokenService } from 'abp-ng2-module/src/auth/token.service';
import { LocalStorageService } from '../../app/core/local-storage/local-storage.service';
export const AUTH_KEY = 'AUTH';
// import { GooglePlus } from '@ionic-native/google-plus/ngx';
import 'rxjs/add/operator/timeout';
import { MenuController } from '@ionic/angular';
import { AppSettings } from '../../AppSettings';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  submitting = false;
  tenantName = '';
  cookieTenantIdValue = '';
  userData: any = {};
  result: any;
  err: any;
  loginForm: FormGroup;
  username: string;
  password: string;
  isLoading: boolean = false;
  rememberMe: boolean = false;
  showPassword: boolean = false;
  constructor(
    private _authService: AuthService,
    private _loadingCtrl: LoadingController,
    private _utilService: UtilService,
    public _alertController: AlertController,
    private _router: Router,
    private _tokenService: TokenService,
    private _localStorageService: LocalStorageService,
    private formBuilder: FormBuilder,
    public menu: MenuController,
    private http: HttpClient

  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ionViewWillEnter(){
    if (this._localStorageService.getItem(AUTH_KEY).rememberMe) {
      this.username = this._localStorageService.getItem(AUTH_KEY).username;
      this.password = this._localStorageService.getItem(AUTH_KEY).password;
      this.rememberMe = this._localStorageService.getItem(AUTH_KEY).rememberMe;
    }else{
      this.username = null;
      this.password = null;
      this.rememberMe = this._localStorageService.getItem(AUTH_KEY).rememberMe;
    }
  }

  async onLogin(form: NgForm) {
    this.loadingDefault();
    const model = new AuthenticateModel();
    model.userNameOrEmailAddress = form.value.username;
    model.password = form.value.password;
    model.rememberClient = true;
    this._authService.authenticateModel = model;
    await this.signIn(form.value.username, form.value.password);
  }

  async signIn(username: string, password: string) {
    let params = {
      userNameOrEmailAddress: username,
      password: password,
      twoFactorVerificationCode: "string",
      rememberClient: true,
      twoFactorRememberClientToken: "string",
      singleSignIn: true,
      returnUrl: "string",
      captchaResponse: "string"
    }
 
    this.http.post(AppSettings.API_ENDPOINT + "/api/TokenAuth/Authenticate", params).subscribe({
      next: async (res: any) => {
        if (res.result.accessToken === null || res.result.accessToken === 'undefined') {
          this.showAlertController("Tên đăng nhập hoặc mật khẩu không chính xác");
          return;
        }
        const helper = new JwtHelperService();
        const result = helper.decodeToken(res.result.accessToken);
        const utilservice = this._utilService;
        const router = this._router;
        const tokenService = this._tokenService;
        const tokenExpireDate = new Date(
          new Date().getTime() + result.expireInSeconds
        );
          if(this.rememberMe){
            this._localStorageService.setItem(AUTH_KEY, {
              isAuthenticated: true,
              accessToken: res.result.accessToken,
              userId: result.UserId,
              username: username,
              password: password,
              hoVaTen: result.HoVaTen,
              tenCty: result.TenCty,
              maChamCong: result.MaChamCong,
              image: result.Image.length > 0 ? result.Image : AppSettings.API_ENDPOINT + '/uploads/defaultAvatar.png',
              branchId: result.BranchId,
              branchType: result.BranchType,
              branchCode: result.BranchCode,
              email: result.Email,
              rememberMe: this.rememberMe
            });
          }else{
            this._localStorageService.setItem(AUTH_KEY, {
              isAuthenticated: true,
              accessToken: res.result.accessToken,
              username: null,
              password: null,
              userId: result.UserId,
              hoVaTen: result.HoVaTen,
              tenCty: result.TenCty,
              maChamCong: result.MaChamCong,
              image: result.Image.length > 0 ? result.Image : AppSettings.API_ENDPOINT + '/uploads/defaultAvatar.png',
              branchId: result.BranchId,
              branchType: result.BranchType,
              branchCode: result.BranchCode,
              email: result.Email,
              rememberMe: this.rememberMe
            });
          }
        tokenService.setToken(
          result.accessToken,
          tokenExpireDate
        );

        utilservice.setCookieValue(
          AppConsts.authorization.encrptedAuthTokenName,
          result.accessToken,
          tokenExpireDate
        );
        this.dismissLoading();
        router.navigateByUrl('app/main/home');


      },
      error: async (err: any) => {
        err.error.error ? this.showAlertController(err.error.error.details) : this.showAlertController("Đăng nhập thất bại, vui lòng kiểm tra lại");
      }
    });

  }

  async loadingDefault() {
    this.isLoading = true;
    return await this._loadingCtrl.create({
      // message: 'Đang xử lý.......',
      // duration: 3000
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

  public onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }

}
