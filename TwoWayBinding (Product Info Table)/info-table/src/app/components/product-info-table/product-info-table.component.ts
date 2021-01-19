import { Component, OnInit } from '@angular/core';
import { GetProductInfoService } from '../../services/get-product-info.service';
import { ProductInfo } from '../../models/ProductInfo';

@Component({
  selector: 'app-info-table',
  templateUrl: './product-info-table.component.html',
  styleUrls: ['./product-info-table.component.css'],
})
export class ProductInfoTableComponent implements OnInit {
  productInfo: ProductInfo[];
  searchText = '';
  addProductForm=false
  constructor(private getProductInfoService: GetProductInfoService) {}

  ngOnInit(): void {
    this.getProductInfoService
      .getProductInfo()
      .subscribe((products) => (this.productInfo = products));
  }
  createProduct(product:ProductInfo) {
    this.getProductInfoService.createProduct(product);
    // console.log(product)
  }
  updateProduct(product:ProductInfo): void {
    this.getProductInfoService.updateProduct(product);
  }
  deleteProduct(product:ProductInfo): void {
    this.getProductInfoService.deleteProduct(product);
  }
  displayInfo(ele: ProductInfo) {
    alert(
      `Name: ${ele.name} \nCode: ${ele.code} \nBranch Name: ${ele.branchName} \nBranch Code: ${ele.branchCode}\nAddress: ${ele.address}`
    );
  }
}
