import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementingCounterComponent } from './incrementing-counter.component';

describe('IncrementingCounterComponent', () => {
  let component: IncrementingCounterComponent;
  let fixture: ComponentFixture<IncrementingCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementingCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementingCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
