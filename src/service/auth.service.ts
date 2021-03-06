import { Injectable } from '@angular/core';
import {
  TokenAuthServiceProxy,
  AuthenticateModel,
  AuthenticateResultModel,
  ExternalLoginProviderInfoModel,
  ExternalAuthenticateModel,
  ExternalAuthenticateResultModel
} from '../shared/service-proxies/service-proxies';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { AlertController } from '@ionic/angular';
import { HttpClientModule, HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http'; 
import { AppSettings } from '../AppSettings';
import { Observable } from 'rxjs';
import { UtilService } from './util.service';
import {LocalStorageService } from '../app/core/local-storage/local-storage.service';
import * as moment from 'moment';

export const AUTH_KEY = 'AUTH';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticateModel: AuthenticateModel;
  authenticateResult: AuthenticateResultModel;
  userNameOrEmailAddress: string;
  password: string;
  rememberMe: boolean;

  cookieTenantIdValue: string;
  private http: HttpClient;
  constructor(
    private _tokenAuthService: TokenAuthServiceProxy,
    private _router: Router,
    private _tokenService: TokenService,
    handler: HttpBackend,
    private util: UtilService,
    private _localStorageService: LocalStorageService,
  ) {
  }

  signIn(_email: string, _password: string) : Observable<AuthenticateResultModel> {
    return this._tokenAuthService.authenticate(this.authenticateModel);
  }

  login(): Observable<any> {
    const content_ = JSON.stringify(this.authenticateModel);
  

    const options_: any = {
      observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // '.AspNetCore.Culture': 'null',
        // 'Abp.TenantId': this.cookieTenantIdValue
      })
    };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/api/TokenAuth/Authenticate',
      content_,
      options_
    );
  }

  getToken() {
    if(this._localStorageService.getItem(AUTH_KEY) && this._localStorageService.getItem(AUTH_KEY) != null){
      return !!this._localStorageService.getItem(AUTH_KEY).accessToken;
    }
    return false;
  	
  }


  private clear(): void {
    this.authenticateModel = new AuthenticateModel();
    this.authenticateModel.rememberClient = false;
    this.authenticateResult = null;
    this.rememberMe = false;
  }
}
