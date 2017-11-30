import { Component , Output, EventEmitter, Input} from '@angular/core';
import { slideDetail } from '../../models/models';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the SlideInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'slide-input',
  templateUrl: 'slide-input.html'
})
export class SlideInputComponent {
  inputSlide = {
    title : "",
    content : '',
    image : '',
} ;
slide : slideDetail ;
msg : string = "Updated"
  
@Output()
onNewData : EventEmitter<string> = new EventEmitter<string>();

  @Input() key : string
  @Input() data : Array<slideDetail> = [];
  constructor(public storage : StorageProvider) {
    console.log('Hello SlideInput Component');
    
    this.slide = { 
    id:1,
    title:'',
    content:'',
    image:'',
    dateCreated:NaN,
    dateModified:NaN} 
    
  }
  
  addSlide(){
      console.log("Input key is ADD : " + this.key)
      console.log("Data received : " + JSON.stringify(this.data))
      console.log("Number of slides : " + this.data.length)
      let date = new Date();
      this.slide.id = 1;
      this.slide.title = this.inputSlide.title;
      this.slide.content = this.inputSlide.content;
      this.slide.image = NaN;
      this.slide.dateCreated = date.getTime();
      this.slide.dateModified = date.getTime();
      console.log("Adding :" + JSON.stringify(this.inputSlide.title) + " to storage")
      this.storage.addCardDetails(this.key, this.slide, this.data).then(data=>{
          if ( data != null){
              console.log("Content Added :" + JSON.stringify(data));
          this.onNewData.emit(this.msg);
          }
      })
      
  }

}
