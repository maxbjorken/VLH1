import { Component, OnInit } from '@angular/core';
import { HockeyspelareListaService } from '../../services/hockeyspelare-lista.service';
import {Spelare} from '../../../models/Spelare';
import { NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-hockeyspelare',
  templateUrl: './hockeyspelare.component.html',
  styleUrls: ['./hockeyspelare.component.css']
})
export class HockeyspelareComponent implements OnInit {
  spelare: Spelare[];


  constructor(private SpelarService: HockeyspelareListaService) {
  }

  ngOnInit() {
    this.SpelarService.getSpelare().subscribe(j => {
      this.spelare = j;
    });
  }

  visaInfo(s: Spelare) {
    s.VisaInfo = !s.VisaInfo;
  }




}
