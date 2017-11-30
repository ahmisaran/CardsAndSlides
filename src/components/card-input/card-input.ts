import { Component , Output, EventEmitter, Input} from '@angular/core';
import { cardDetail } from '../../models/models'

import { StorageProvider } from '../../providers/storage/storage'

/**
 * Generated class for the CardInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-input',
  templateUrl: 'card-input.html'
})
export class CardInputComponent {
  
  inputCard = {
        title : "",
        content : '',
        image : '',
    } ;
  card : cardDetail ;
  msg : string = "Updated"
  
  @Output()
	onNewData : EventEmitter<string> = new EventEmitter<string>();
  
    @Input() key : string
 /*   set key (key : string){
        console.log("Key sent was  : " + key )
        this._key = key;
    }*/
  constructor(public storage : StorageProvider) {
    console.log('Hello CardInputComponent Component');
    this.inputCard 
    
    this.card = { 
    id:1,
    title:'',
    content:'',
    image:'',
    dateCreated:NaN,
    dateModified:NaN} 
    
    console.log("Input key is : " + this.key)
    
  }
  
  addCard(){
      console.log("Input key is ADD : " + this.key)
      let date = new Date();
      this.card.id = 1;
      this.card.title = this.inputCard.title;
      this.card.content = this.inputCard.content;
      this.card.image = NaN;
      this.card.dateCreated = date.getTime();
      this.card.dateModified = date.getTime();
      console.log("Adding :" + JSON.stringify(this.inputCard.title) + " to storage")
      this.storage.addCardDetails("Cards", this.card).then(data=>{
          if ( data != null){
              console.log("Content Added :" + JSON.stringify(data));
          this.onNewData.emit(this.msg);
          }
      })
      
      
  }

}
