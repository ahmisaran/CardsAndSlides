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
   inputEnabled : boolean = false;
   title : string;
   cards : Array<cardDetail> =[];
   category : string ;
   key : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: StorageProvider) {
      this.key = this.navParams.get("pageKey")
      console.log("Key is : " + this.key )

  }

  ionViewDidLoad() {    
    this.storage.getDatabyKey(this.key).then(data => {
        console.log("Cards Data = " + JSON.stringify(data))
        if ( data != null ){
            this.cards = data;
        }
    })
  }
  
  itemTapped(title) {
      console.log("Item Details : " + JSON.stringify(title));
      let slidekey = this.key.concat(title);
      console.log("Child Card Key : " + slidekey)
    this.navCtrl.push(SlidesPage, {
      pageKey: slidekey
    }); 
  }
  
  enableCardInput(event, Item){
      this.inputEnabled = true;
  }
  
  updateCards(msg){
      this.storage.getDatabyKey(this.key).then(data => {
        console.log("Cards Data = " + JSON.stringify(data))
        this.cards = data;
        for ( let card of this.cards){
          console.log("Card title is = " + card.title)
      }
    })
     /* this.cards = this.storage.getData();
      console.log("Update List : " + this.cards)
      for ( let card of this.cards){
          console.log("Card title is = " + card.title)
      }*/
      this.inputEnabled = false ;
  }
  
  removeData(){
      this.storage.removeKeyData(this.key);
  }
}
