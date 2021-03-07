import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsectCatchGameComponent } from './insert-catch-game.component';

describe('InsectCatchGameComponent', () => {
  let component: InsectCatchGameComponent;
  let fixture: ComponentFixture<InsectCatchGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsectCatchGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsectCatchGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
