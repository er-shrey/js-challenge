import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KineticLoaderComponent } from './kinetic-loader.component';

describe('KineticLoaderComponent', () => {
  let component: KineticLoaderComponent;
  let fixture: ComponentFixture<KineticLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KineticLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KineticLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
