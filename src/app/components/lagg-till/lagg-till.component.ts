import { Component, OnInit } from '@angular/core';
import {Spelare} from '../../../models/Spelare';
import {HockeyspelareListaService} from '../../services/hockeyspelare-lista.service';
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
    Fattning: 'Original',
    Alder: null,
    Langd: null,
    Position: 'Original'
    };


  constructor(private SpelarService: HockeyspelareListaService) {
  }

  ngOnInit() {
    this.spelare = this.SpelarService.getSpelare();
  }

  addSpelare() {
    this.spelare.push(this.newSpelare);
  }

  onSubmit(e) {
    e.preventDefault();
  }

}
