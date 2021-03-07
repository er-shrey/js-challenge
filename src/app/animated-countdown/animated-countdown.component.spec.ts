import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedCountdownComponent } from './animated-countdown.component';

describe('AnimatedCountdownComponent', () => {
  let component: AnimatedCountdownComponent;
  let fixture: ComponentFixture<AnimatedCountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedCountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
