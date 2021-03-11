import { Injectable } from '@angular/core';
import {Spelare} from '../../models/Spelare';

@Injectable({
  providedIn: 'root'
})
export class HockeyspelareListaService {
spelare: Spelare[];

  newSpelare: Spelare = {
    Namn: '',
    Fattning: '',
    Alder: '',
    Langd: '',
    Position: '',
  };

  constructor() {
    this.spelare = [
      new Spelare('Emil Pettersson', 'Vänster', '27', '187', 'Center'),
      new Spelare('Joel Persson', 'Höger', '27', '181', 'Back'),
      new Spelare('Andrew Calof', 'Höger', '29', '177', 'Forward'),
      new Spelare('Robert Rosén', 'Höger', '33', '179', 'Center')
  ];
  }

  getSpelare(): Spelare[] {
    return this.spelare;
  }

  addSpelare(e) {
    this.spelare.push(e);
  }

}


