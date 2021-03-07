import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDesignComponent } from './feedback-design.component';

describe('FeedbackDesignComponent', () => {
  let component: FeedbackDesignComponent;
  let fixture: ComponentFixture<FeedbackDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
