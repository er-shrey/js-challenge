import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastCheckboxesComponent } from './fast-checkboxes.component';

describe('FastCheckboxesComponent', () => {
  let component: FastCheckboxesComponent;
  let fixture: ComponentFixture<FastCheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastCheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
