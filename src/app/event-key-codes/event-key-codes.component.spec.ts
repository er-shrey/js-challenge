import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventKeyCodesComponent } from './event-key-codes.component';

describe('EventKeyCodesComponent', () => {
  let component: EventKeyCodesComponent;
  let fixture: ComponentFixture<EventKeyCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventKeyCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventKeyCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
