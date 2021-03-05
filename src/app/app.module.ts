import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HockeyspelareComponent } from './components/hockeyspelare/hockeyspelare.component';
import { LaggTillComponent } from './components/lagg-till/lagg-till.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HockeyspelareComponent,
    LaggTillComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
      FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
