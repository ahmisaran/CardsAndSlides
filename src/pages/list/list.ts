import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SlidesPage } from "../slides/slides"
import { cardDetail } from "../../models/models"
import {StorageProvider} from "../../providers/storage/storage"

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: StorageProvider) {
      
    
  }

  itemTapped(event, item) {
   // this.storage.getData("Cards")
    this.navCtrl.push(SlidesPage, {
      item: item
    }); 
  }
  
 
}
