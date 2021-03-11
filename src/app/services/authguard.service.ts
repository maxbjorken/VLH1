import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  canActivate(): Observable<boolean>{
    return this.afAuth.authState.pipe(map(auth => {
      if (!auth){
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    } ));
  }
}
