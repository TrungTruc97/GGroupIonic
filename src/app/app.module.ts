import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx'
// import { OneSignal} from '@ionic-native/onesignal/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    NetworkInterface,
    Calendar,
    HTTP,
    FormBuilder,
    DatePicker,
    BrowserTab,
    LocalNotifications,
    // OneSignal
  ]
})
export class AppModule {}
