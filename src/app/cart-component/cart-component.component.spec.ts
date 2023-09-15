import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponentComponent } from './cart-component.component';
import {AppModule} from "../app.module";

describe('CartComponentComponent', () => {
  let component: CartComponentComponent;
  let fixture: ComponentFixture<CartComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponentComponent],
      imports: [AppModule]
    });
    fixture = TestBed.createComponent(CartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
