import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopuserComponent } from './topuser.component';

describe('TopuserComponent', () => {
  let component: TopuserComponent;
  let fixture: ComponentFixture<TopuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
