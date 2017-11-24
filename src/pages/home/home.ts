import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {StorageProvider} from '../../providers/storage/storage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController/*, public storage : StorageProvider*/) {

  }

}
