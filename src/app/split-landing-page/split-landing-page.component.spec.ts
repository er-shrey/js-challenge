import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitLandingPageComponent } from './split-landing-page.component';

describe('SplitLandingPageComponent', () => {
  let component: SplitLandingPageComponent;
  let fixture: ComponentFixture<SplitLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
