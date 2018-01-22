import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorVideoPopupComponent } from './vendor-video-popup.component';

describe('VendorVideoPopupComponent', () => {
  let component: VendorVideoPopupComponent;
  let fixture: ComponentFixture<VendorVideoPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorVideoPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorVideoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
