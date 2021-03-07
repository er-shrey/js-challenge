import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionalBoxesComponent } from './dimensional-boxes.component';

describe('DimensionalBoxesComponent', () => {
  let component: DimensionalBoxesComponent;
  let fixture: ComponentFixture<DimensionalBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimensionalBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionalBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
