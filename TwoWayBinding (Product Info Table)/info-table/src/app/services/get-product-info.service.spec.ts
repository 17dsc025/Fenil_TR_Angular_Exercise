import { TestBed } from '@angular/core/testing';

import { GetProductInfoService } from './get-product-info.service';

describe('GetInfoService', () => {
  let service: GetProductInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductInfoService);
  });

});
