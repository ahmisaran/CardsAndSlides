import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  string : key;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.key = this.navParams.get("pageKey")
    console.log("Key is : " + this.key )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
    console.log("Key is : " + this.key )
  }

}
