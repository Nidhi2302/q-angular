import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopvendorComponent } from './topvendor.component';

describe('TopvendorComponent', () => {
  let component: TopvendorComponent;
  let fixture: ComponentFixture<TopvendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopvendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
