import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('CartService', () => {
  let service: CartService;
  let controller: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CartService);
    controller = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
