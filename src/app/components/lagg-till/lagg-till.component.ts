import { Component, OnInit } from '@angular/core';
import {Spelare} from '../../../models/Spelare';
import {formatNumber} from '@angular/common';

@Component({
  selector: 'app-lagg-till',
  templateUrl: './lagg-till.component.html',
  styleUrls: ['./lagg-till.component.css']
})
export class LaggTillComponent implements OnInit {
  spelare: Spelare[];
  newSpelare: Spelare = {
    Namn: '',
    Fattning: '',
    Alder: '',
    Langd: '',
    Position: '',
    };


  constructor() {
  }

  ngOnInit() {
    this.spelare = [
      new Spelare('Emil Pettersson', 'Vänster', '27', '187', 'Center'),
      new Spelare('Joel Persson', 'Höger', '27', '181', 'Back'),
      new Spelare('Andrew Calof', 'Höger', '29', '177', 'Forward'),
      new Spelare('Robert Rosén', 'Höger', '33', '179', 'Center')
    ];
   }

  addSpelare() {
    this.spelare.push(this.newSpelare);
  }

  getSpelare(): Spelare[] {
    return this.spelare;
  }


  onSubmit(e) {
    e.preventDefault();
  }

}
