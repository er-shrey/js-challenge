import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverboardComponent } from './hoverboard.component';

describe('HoverboardComponent', () => {
  let component: HoverboardComponent;
  let fixture: ComponentFixture<HoverboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
