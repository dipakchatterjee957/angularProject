import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsLandingComponent } from './rxjs-landing.component';

describe('RxjsLandingComponent', () => {
  let component: RxjsLandingComponent;
  let fixture: ComponentFixture<RxjsLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsLandingComponent]
    });
    fixture = TestBed.createComponent(RxjsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
