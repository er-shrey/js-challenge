import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedNavigationComponent } from './animated-animation.component';

describe('AnimatedNavigationComponent', () => {
  let component: AnimatedNavigationComponent;
  let fixture: ComponentFixture<AnimatedNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
