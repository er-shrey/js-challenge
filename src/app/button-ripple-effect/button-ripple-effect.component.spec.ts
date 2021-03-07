import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRippleEffectComponent } from './button-ripple-effect.component';

describe('ButtonRippleEffectComponent', () => {
  let component: ButtonRippleEffectComponent;
  let fixture: ComponentFixture<ButtonRippleEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonRippleEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRippleEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
