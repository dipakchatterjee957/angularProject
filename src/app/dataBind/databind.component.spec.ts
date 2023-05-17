import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindComponent } from './databind.component';

describe('DatabindComponent', () => {
  let component: DatabindComponent;
  let fixture: ComponentFixture<DatabindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatabindComponent]
    });
    fixture = TestBed.createComponent(DatabindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
