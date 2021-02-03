import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AppConsts } from '../../shared/AppConsts';

@Component({
  selector: 'image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {
    img: any;
    globalUrlAPI: string = AppConsts.remoteServiceBaseUrl + '/attachments/';
    sliderOpts = {
        zoom: {
            maxRatio: 3
        }
    }
    @ViewChild('silder', {read: ElementRef}) slider: ElementRef;
  constructor(
      private navParams: NavParams,
      private modalController: ModalController
  ) { }

  ngOnInit() {
      this.img = this.navParams.get('img');
      console.log(this.globalUrlAPI);
      console.log(this.img);
  }

  zoom(zoomIn: boolean){
    let zoom = this.slider.nativeElement.swiper.zoom;
    if(zoomIn){
        zoom.in();
    }else{
        zoom.out();
    }
  }
  close(){
    this.modalController.dismiss();
  }

}
