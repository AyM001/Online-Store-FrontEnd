import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutMessageComponent } from './checkout-message.component';

describe('CheckoutMessageComponent', () => {
  let component: CheckoutMessageComponent;
  let fixture: ComponentFixture<CheckoutMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
