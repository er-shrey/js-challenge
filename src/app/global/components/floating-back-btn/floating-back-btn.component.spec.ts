import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingBackBtnComponent } from './floating-back-btn.component';

describe('FloatingBackBtnComponent', () => {
  let component: FloatingBackBtnComponent;
  let fixture: ComponentFixture<FloatingBackBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingBackBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingBackBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
