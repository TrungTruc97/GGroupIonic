import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']

})
export class AppComponent {
    private _menu: MenuController
   
    constructor( 
      public _alertController: AlertController,
    private _router: Router,

    ) {

     }
  public appPages = [
    {
      title: 'Danh sách đăng ký',
      url: '/app/main/danhsach-dangky',
      icon: 'medkit'
    }
  ];
 
  async confirmLogout(){
    const alert = await this._alertController.create({
      cssClass: 'my-custom-class',
      header: 'Thông báo',
      message: 'Bạn có chắc muốn đăng xuất ngay bây giờ không?',
      buttons: [{ text: 'Hủy', role: 'cancel' }, {
        text: 'Đồng ý', handler: () => {
          this.redirectLogoutPage();
        }
      }]
    });
    await alert.present();
  }

  redirectLogoutPage(){
    this._router.navigateByUrl('/account/logout');
  }
  
  closeMenu(){
    this._menu.close();
  }
}
