import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomImageFeedComponent } from './random-image-feed.component';

describe('RandomImageFeedComponent', () => {
  let component: RandomImageFeedComponent;
  let fixture: ComponentFixture<RandomImageFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomImageFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomImageFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
