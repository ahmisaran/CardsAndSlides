import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello SlideInputComponent Component');
    this.text = 'Hello World';
  }

}
