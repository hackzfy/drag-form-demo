import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFormItemConfigComponent } from './auto-form-item-config.component';

describe('AutoFormItemConfigComponent', () => {
  let component: AutoFormItemConfigComponent;
  let fixture: ComponentFixture<AutoFormItemConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoFormItemConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoFormItemConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
