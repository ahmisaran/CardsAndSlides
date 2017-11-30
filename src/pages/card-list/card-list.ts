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
   title : string;
   cards : Array<cardDetail> =[];
   category : string ;
   key : string;
   component : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: StorageProvider) {
      this.key = this.navParams.get("pageKey")
      this.component = this.navParams.get("component")
      console.log("Key is : " + this.key )

  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad CardListPage');
    console.log("Key is : " + this.key )
    console.log("Compoenent is :" + this.component)
    //this.cards = this.storage.getData()
    this.storage.getDatabyKey(this.key).then(data => {
        console.log("Cards Data = " + JSON.stringify(data))
        this.cards = data;
    })
  }
  
  itemTapped(event, item) {
      console.log("Item Details : " + JSON.stringify(item));
    this.navCtrl.push(this.component, {
      pageKey: "Cards",
      component : SlidesPage
    }); 
  }
  
  enableCardInput(event, Item){
      this.inputEnabled = 1;
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
      this.inputEnabled = 0 ;
  }
  
  removeData(){
      this.storage.removeKeyData("Cards")
  }
}
