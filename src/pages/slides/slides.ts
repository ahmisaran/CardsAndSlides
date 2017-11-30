import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { slideDetail } from '../../models/models';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {
  slides : Array<slideDetail> = [];
  key : string;
  inputEnabled : boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage : StorageProvider) {
    this.key = this.navParams.get("pageKey")
    console.log("Key is : " + this.key )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
    console.log("Key is : " + this.key )
    this.storage.getDatabyKey(this.key).then(data => {
      console.log("Slides Data = " + JSON.stringify(data))
      if ( data != null ){
          this.slides = data;
      }
  })
  }

  enableCardInput(event, Item){
    this.inputEnabled = true;
  }

 updateSlides(msg){
    this.storage.getDatabyKey(this.key).then(data => {
      console.log("Slides Data = " + JSON.stringify(data))
      this.slides = data;
      console.log("Number of slides : " + this.slides.length)
      for ( let slide of this.slides){
        console.log("Slide title is = " + slide.title)
    }
  })
    this.inputEnabled = false ;
}

removeData(){
    this.storage.removeKeyData(this.key);
}

}
