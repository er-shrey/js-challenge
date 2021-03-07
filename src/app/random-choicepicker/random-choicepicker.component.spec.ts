import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomChoicepickerComponent } from './random-choicepicker.component';

describe('RandomChoicepickerComponent', () => {
  let component: RandomChoicepickerComponent;
  let fixture: ComponentFixture<RandomChoicepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomChoicepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomChoicepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
