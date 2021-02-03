import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/Storage';
import { PermissionCheckerService } from 'abp-ng2-module/dist/src/auth/permission-checker.service';
import { RootComponent } from './root.component';
import { RootRoutingModule } from './root-routing.module';
import { API_BASE_URL } from './shared/service-proxies/service-proxies';
import { AppConsts } from './shared/AppConsts';
import { AppModule } from './app/app.module';
import { ServiceProxyModule } from './shared/service-proxies/service-proxy.module';
import { AbpModule } from 'abp-ng2-module/src/abp.module';
import { DateRangeCalendarPageModule } from '../src/app/date-range-calendar/date-range-calendar.module';
import {Camera} from '@ionic-native/camera/ngx';
import {File} from '@ionic-native/file/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ImageModalPageModule } from '../src/shared/image-modal/image-modal.module';
import { Network } from '@ionic-native/network/ngx';
export function getRemoteServiceBaseUrl(): string {
  return AppConsts.remoteServiceBaseUrl;
}
@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    AppModule,
    AbpModule,
    ServiceProxyModule,
    RootRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    DateRangeCalendarPageModule,
    ImageModalPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
    PermissionCheckerService, 
    Camera, File, WebView, FilePath,Network
  ],
  declarations: [RootComponent],
  entryComponents: [],
  bootstrap: [RootComponent]
})
export class RootModule {}
