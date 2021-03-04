import { TestBed } from '@angular/core/testing';

import { HockeyspelareListaService } from './hockeyspelare-lista.service';

describe('HockeyspelareListaService', () => {
  let service: HockeyspelareListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HockeyspelareListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
