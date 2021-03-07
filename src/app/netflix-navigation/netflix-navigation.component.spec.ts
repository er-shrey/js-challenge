import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixNavigationComponent } from './netflix-navigation.component';

describe('NetflixNavigationComponent', () => {
  let component: NetflixNavigationComponent;
  let fixture: ComponentFixture<NetflixNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetflixNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetflixNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
