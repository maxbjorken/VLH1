import { Component, OnInit, ViewChild } from '@angular/core';
import {Spelare} from '../../../models/Spelare';
import {formatNumber} from '@angular/common';
import {HockeyspelareListaService} from '../../services/hockeyspelare-lista.service';
import { NgForm } from '@angular/forms';
import {Observable} from 'rxjs';
import { of  } from 'rxjs';

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
    VisaInfo: false
  };

  @ViewChild('hockeyform') formen: any;

  constructor(private SpelarService: HockeyspelareListaService) {
  }

  ngOnInit() {
   }


  onSubmit({value, valid}: {value: Spelare, valid: boolean}) {
    if (!valid) {
      alert('Ajajaj Haase');
    }
    else {
      this.SpelarService.addSpelare(value);
      this.formen.reset();
    }

  }
}
