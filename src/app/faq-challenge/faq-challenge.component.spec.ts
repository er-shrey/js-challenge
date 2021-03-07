import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqCollapseComponent } from './faq-challenge.component';

describe('FaqCollapseComponent', () => {
  let component: FaqCollapseComponent;
  let fixture: ComponentFixture<FaqCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
