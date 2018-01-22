import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcouponsComponent } from './totalcoupons.component';

describe('TotalcouponsComponent', () => {
  let component: TotalcouponsComponent;
  let fixture: ComponentFixture<TotalcouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalcouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalcouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
