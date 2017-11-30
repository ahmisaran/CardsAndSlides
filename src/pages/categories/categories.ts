import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { cardDetail } from '../../models/models';
import { StorageProvider } from '../../providers/storage/storage';
import { CardListPage } from '../card-list/card-list';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  categories : Array<cardDetail> = [];
  key : string = "categories"
  inputEnabled : boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage : StorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
    console.log("Categories toString : " + this.categories.toString())
    this.storage.getDatabyKey(this.key).then(data => {
      console.log("Cards Data = " + JSON.stringify(data))
      if ( data != null ){
        this.categories = data;
      }
  })
  }

  enableCategoryInput(event, Item){
    this.inputEnabled = true;
  }

  itemTapped(title) {
    console.log("Item Details : " + JSON.stringify(title));
    this.key.concat(title);
    console.log("Child Card Key : " , this.key);
    this.navCtrl.push(CardListPage, {
    pageKey: title,
  }); 
}

  updateCategoryList(msg){
    this.storage.getDatabyKey(this.key).then(data => {
      console.log("Categories Data = " + JSON.stringify(data))
      this.categories = data;
      for ( let category of this.categories){
        console.log("Category title is = " + category.title)
    }
  })
    this.inputEnabled = false ;
}

removeData(){
  this.storage.removeKeyData(this.key);
}

}
