import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinelatestWithlatestfromComponent } from './combinelatest-withlatestfrom.component';

describe('CombinelatestWithlatestfromComponent', () => {
  let component: CombinelatestWithlatestfromComponent;
  let fixture: ComponentFixture<CombinelatestWithlatestfromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombinelatestWithlatestfromComponent]
    });
    fixture = TestBed.createComponent(CombinelatestWithlatestfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
