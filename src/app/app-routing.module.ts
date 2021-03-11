import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LaggTillComponent} from './components/lagg-till/lagg-till.component';
import {HockeyspelareComponent} from './components/hockeyspelare/hockeyspelare.component';

import { LoginComponent } from './components/login/login.component';
import { AuthguardService } from './services/authguard.service';
import {canActivate} from '@angular/fire/auth-guard';

const nav: Routes = [
  {path: '', component: HomeComponent},
  {path: 'visaspelare', component: HockeyspelareComponent},
  {path: 'lagg-till', component: LaggTillComponent,  canActivate: [AuthguardService]},
  {path: 'login', component: LoginComponent}
];
@NgModule({
  declarations: [],
  imports: [
RouterModule.forRoot(nav)
  ],
  providers: [AuthguardService]
})
export class AppRoutingModule { }
