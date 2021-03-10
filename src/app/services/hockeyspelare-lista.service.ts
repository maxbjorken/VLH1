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
    VisaInfo: false,
  };

  constructor() {
    this.spelare = [
      new Spelare('Emil Pettersson', 'Vänster', '27', '187', 'Center', false),
      new Spelare('Joel Persson', 'Höger', '27', '181', 'Back', false),
      new Spelare('Andrew Calof', 'Höger', '29', '177', 'Forward', false),
      new Spelare('Robert Rosén', 'Höger', '33', '179', 'Center', false)
  ];
  }

  getSpelare(): Spelare[] {
    return this.spelare;
  }

  addSpelare(e) {
    this.spelare.push(e);
  }


}


