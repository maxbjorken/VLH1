import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaggTillComponent } from './lagg-till.component';

describe('LaggTillComponent', () => {
  let component: LaggTillComponent;
  let fixture: ComponentFixture<LaggTillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaggTillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaggTillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
