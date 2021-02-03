import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MainRoutingModule } from './main-routing.module';
import { HomePage } from './home/home.page';
import { AnnouncementPage } from './announcement/announcement.page';
import { CreateCongTac } from './cong-tac/CreateCongTac/CreateCongTac.page';
import { QuanLyCongTac } from './cong-tac/QuanLyCongTac/QuanLyCongTac.page';
import { DanhSachChoDuyet } from './cong-tac/DanhSachChoDuyet/DanhSachChoDuyet.page';
import { DanhSachDangKy } from './cong-tac/DanhSachDangKy/DanhSachDangKy.page';
import { EditCongTac } from './cong-tac/EditCongTac/EditCongTac.page';
import { ChiTietDangKy } from './cong-tac/ChiTietDangKy/ChiTietDangKy.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainRoutingModule
  ],
  declarations: [
    HomePage,
    AnnouncementPage,
    CreateCongTac,
    QuanLyCongTac,
    DanhSachChoDuyet,
    DanhSachDangKy,
    EditCongTac,
    ChiTietDangKy
  ]
})
export class MainModule {}
