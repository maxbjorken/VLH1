import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HockeyspelareComponent } from './components/hockeyspelare/hockeyspelare.component';
import { LaggTillComponent } from './component/lagg-till/lagg-till.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HockeyspelareComponent,
    LaggTillComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
