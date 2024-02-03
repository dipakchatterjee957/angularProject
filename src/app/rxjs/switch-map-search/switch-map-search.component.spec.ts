import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapSearchComponent } from './switch-map-search.component';

describe('SwitchMapSearchComponent', () => {
  let component: SwitchMapSearchComponent;
  let fixture: ComponentFixture<SwitchMapSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchMapSearchComponent]
    });
    fixture = TestBed.createComponent(SwitchMapSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
