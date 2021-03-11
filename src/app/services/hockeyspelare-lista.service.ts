import { Injectable } from '@angular/core';
import {Spelare} from '../../models/Spelare';
import { Observable} from 'rxjs';
import { of } from 'rxjs';


import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HockeyspelareListaService {
spelare: Observable<any[]>;
spelareDoc: AngularFirestoreDocument<Spelare>;
spelareOne: Observable<any>;


  constructor(private afs: AngularFirestore) {
    this.spelare = afs.collection('HockeySpelare').snapshotChanges().pipe(
      map(j => j.map (
        a => {
          const data = a.payload.doc.data() as Spelare;
          const id = a.payload.doc.id;
          return {id, ...data};
    }

      ))
    );



    /*  this.spelare = [
      new Spelare('Emil Pettersson', 'Vänster', '27', '187', 'Center', false),
      new Spelare('Joel Persson', 'Höger', '27', '181', 'Back', false),
      new Spelare('Andrew Calof', 'Höger', '29', '177', 'Forward', false),
      new Spelare('Robert Rosén', 'Höger', '33', '179', 'Center', false)
  ];

   */
  }

 /* getSpelare(): Spelare[] {
    return this.spelare;
  }

  */

  getSpelare(): Observable<Spelare[]> {
   return this.spelare;
  }


  addSpelare(s: Spelare) {
  this.afs.collection('HockeySpelare').add(s);

  }

  getSpelareNamn(id: string): Observable<Spelare> {
this.spelareDoc = this.afs.doc<Spelare>('HockeySpelare/${id}');
this.spelareOne = this.spelareDoc.valueChanges();

return this.spelareOne;
  }


}


