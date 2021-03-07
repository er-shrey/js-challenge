import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeClockComponent } from './theme-clock.component';

describe('ThemeClockComponent', () => {
  let component: ThemeClockComponent;
  let fixture: ComponentFixture<ThemeClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
