import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, observable } from 'rxjs';
import { GetProductInfoService } from 'src/app/services/get-product-info.service';
import { from } from 'rxjs';

import { ProductInfoTableComponent } from './product-info-table.component';

describe('InfoTableComponent', () => {
  let component: ProductInfoTableComponent;
  let fixture: ComponentFixture<ProductInfoTableComponent>;
  let service: GetProductInfoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductInfoTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    service = new GetProductInfoService(null);
    component = new ProductInfoTableComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set product info from server', () => {
    let product = [
      {
        name: 'Product 1',
        code: '3453',
        branchName: 'branch-5',
        branchCode: '7464',
        address: 'vadodara',
      },
    ]
    spyOn(service, 'getProductInfo').and.callFake(() => {
      return from([
        product
      ]);
    });
    component.ngOnInit();
    expect(component.productInfo).toBe(product);
  });
});
