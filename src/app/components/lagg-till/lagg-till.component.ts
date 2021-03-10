import { Component, OnInit, ViewChild } from '@angular/core';
import {Spelare} from '../../../models/Spelare';
import {formatNumber} from '@angular/common';
import {HockeyspelareListaService} from '../../services/hockeyspelare-lista.service';
import { NgForm } from '@angular/forms';

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

  @ViewChild('hockeyform') formen: any;

  constructor(private SpelarService: HockeyspelareListaService) {

  }

  ngOnInit() {
this.spelare = this.SpelarService.getSpelare();
   }


  onSubmit({value, valid}: {value: Spelare, valid: boolean}) {
    if (!valid) {
      console.log('nej');
    }
    else {
      this.spelare.push(value);
      this.formen.reset();
    }

  }



}
