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

  constructor(public storage : Storage) {
    console.log('Hello StorageProvider Provider');

  }
  
  getDatabyKey(key : string){
      return this.storage.get(key).then(data => {
          return data
      }, error =>{
          
      })
  }
  
  addCardDetails(key , newEntry, inputData){
      
      console.log("Adding new Input Details : " + newEntry.title, newEntry.content)
      inputData.push(newEntry);
      
      return new Promise( resolve => {
          this.storage.set(key, inputData).then(data=>{
          console.log("Input Details Stored");
            return resolve(true)
        }, error=>{
            return resolve(false);
        });
      });
  }
  
  removeKeyData(key){
      this.storage.remove(key).then(data=> {
              console.log("All Data Removed related to key : " + key)
              
          });
  }

}
