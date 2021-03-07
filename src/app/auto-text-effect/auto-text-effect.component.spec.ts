import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoTextEffectComponent } from './auto-text-effect.component';

describe('AutoTextEffectComponent', () => {
  let component: AutoTextEffectComponent;
  let fixture: ComponentFixture<AutoTextEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoTextEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoTextEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
