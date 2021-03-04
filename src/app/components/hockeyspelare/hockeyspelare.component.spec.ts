import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HockeyspelareComponent } from './hockeyspelare.component';

describe('HockeyspelareComponent', () => {
  let component: HockeyspelareComponent;
  let fixture: ComponentFixture<HockeyspelareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HockeyspelareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HockeyspelareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
