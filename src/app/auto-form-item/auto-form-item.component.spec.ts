import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFormItemComponent } from './auto-form-item.component';

describe('AutoFormItemComponent', () => {
  let component: AutoFormItemComponent;
  let fixture: ComponentFixture<AutoFormItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoFormItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
