import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCarouselComponent } from './ngrx-carousel.component';

describe('NgrxCarouselComponent', () => {
  let component: NgrxCarouselComponent;
  let fixture: ComponentFixture<NgrxCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
