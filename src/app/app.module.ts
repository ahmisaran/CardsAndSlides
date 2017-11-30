import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/Storage';
import {HttpModule} from "@angular/http"

import { ComponentsModule } from "../components/components.module"

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CardListPage } from "../pages/card-list/card-list"
import { CategoriesPage } from "../pages/categories/categories"
import { SlidesPage } from '../pages/slides/slides';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StorageProvider } from '../providers/storage/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SlidesPage,
    CardListPage,
    CategoriesPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SlidesPage,
    CardListPage,
    CategoriesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
  ]
})
export class AppModule {}
