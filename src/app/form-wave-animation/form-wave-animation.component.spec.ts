import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWaveAnimationComponent } from './form-wave-animation.component';

describe('FormWaveAnimationComponent', () => {
  let component: FormWaveAnimationComponent;
  let fixture: ComponentFixture<FormWaveAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWaveAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWaveAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
