import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzAppComponent } from './quizz-app.component';

describe('QuizzAppComponent', () => {
  let component: QuizzAppComponent;
  let fixture: ComponentFixture<QuizzAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
