import { Injectable } from '@angular/core';
import { Storage } from "@ionic/Storage"
import { cardDetail } from '../../models/models'
/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {
  
  cards : Array<cardDetail> = [];
  constructor(public storage : Storage) {
    console.log('Hello StorageProvider Provider');
    this.initializeData();
    
  }
  initializeData(){
      this.storage.get("Cards").then(data => {
          if ( data != undefined) {
            this.cards = data;
          }
      })
  }
  
  getData ( ):Array<cardDetail>{
      console.log("Current this.cards : " + this.cards)  
      return this.cards;
  }
  
  addCardDetails(card: cardDetail){
    
      console.log("Adding Card Details : " + card.title, card.content)
      this.cards.push(card);
      
      return new Promise( resolve => {
          this.storage.set("Cards", this.cards).then(data=>{
          console.log("Cards Details Stored");
            return resolve(true)
        }, error=>{
            return resolve(false);
        });
      });
  }
  
  removeKeyData(key){
      this.storage.remove(key).then(data=> {
              console.log("All Data Removed related to key : " + key)
              this.cards = [];
          });
  }

}
