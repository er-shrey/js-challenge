import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleHeartClickComponent } from './double-heart-click.component';

describe('DoubleHeartClickComponent', () => {
  let component: DoubleHeartClickComponent;
  let fixture: ComponentFixture<DoubleHeartClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleHeartClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleHeartClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
