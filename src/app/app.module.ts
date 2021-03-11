import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HockeyspelareComponent } from './components/hockeyspelare/hockeyspelare.component';
import { LaggTillComponent } from './components/lagg-till/lagg-till.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';

import {  AngularFireModule } from '@angular/fire';
import {  environment } from '../environments/environment';
import {  AngularFirestoreModule } from '@angular/fire/firestore';
import {  AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HockeyspelareComponent,
    LaggTillComponent,
    HomeComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
      FormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      AngularFireAuthModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
