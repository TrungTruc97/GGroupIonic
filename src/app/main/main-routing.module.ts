import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: 'home', component: HomePage
          },
          {
            path: 'create-congtac', component: CreateCongTac
          },
          {
            path: 'edit-congtac', component: EditCongTac
          },
          {
            path: 'quanly-congtac', component: QuanLyCongTac
          },
          {
            path: 'danhsach-choduyet', component: DanhSachChoDuyet
          },
          {
            path: 'danhsach-dangky', component: DanhSachDangKy
          },
        
          {
            path: 'chitiet-dangky', component: ChiTietDangKy
          },
        
          {
            path: 'announcement', component: AnnouncementPage
          }
        ]
      },
      {
        path: 'qlns',
        children: [
          {
            path: 'dataChamCong', loadChildren: '../qlns/ChamCong/dataChamCong.module#dataChamCongModule'
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
