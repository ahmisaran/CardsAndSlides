import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SlidesPage } from "../slides/slides"
import { cardDetail } from "../../models/models"
import {StorageProvider} from "../../providers/storage/storage"


/**
 * Generated class for the CardListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-card-list',
  templateUrl: 'card-list.html',
})
export class CardListPage {
   inputEnabled = 0;
   cards : Array<cardDetail> =[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: StorageProvider) {
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad CardListPage');
  }
  
  ionViewDidEnter(){
      console.log('ionViewWillEnter CardListPage');
      this.cards = this.storage.getData();
  }
  
  itemTapped(event, item) {
    this.navCtrl.push(SlidesPage, {
      item: item
    }); 
  }
  
  enableInput(event, Item){
      this.inputEnabled = 1;
  }
  
  updateCards(msg){
      
      this.cards = this.storage.getData();
      console.log("Update List : " + this.cards)
      for ( let card of this.cards){
          console.log("Card title is = " + card.title)
      }
      this.inputEnabled = 0 ;
  }
  
  removeData(){
      this.storage.removeKeyData("Cards")
  }
}
