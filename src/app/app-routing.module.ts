import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LaggTillComponent} from './components/lagg-till/lagg-till.component';
import {HockeyspelareComponent} from './components/hockeyspelare/hockeyspelare.component';

const nav: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lagg-till', component: LaggTillComponent},
  {path: 'visaspelare', component: HockeyspelareComponent}
];
@NgModule({
  declarations: [],
  imports: [
RouterModule.forRoot(nav)
  ]
})
export class AppRoutingModule { }
