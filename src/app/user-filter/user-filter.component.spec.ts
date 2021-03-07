import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveUserFilterComponent } from './user-filter.component';

describe('LiveUserFilterComponent', () => {
  let component: LiveUserFilterComponent;
  let fixture: ComponentFixture<LiveUserFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveUserFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveUserFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
