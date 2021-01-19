import { HttpClient } from '@angular/common/http';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';

import { ProductInfo } from '../models/ProductInfo';

@Injectable({
  providedIn: 'root',
})
export class GetProductInfoService {
  constructor(private http: HttpClient) { }
  getProductInfo() {
    return this.http.get<ProductInfo[]>(
      'http://localhost:4200/assets/products.json'
    );
  }
  createProduct(product: ProductInfo) {
    // Using Json Placeholder to get proper response from server
    this.http.post(
      'https://jsonplaceholder.typicode.com/posts', JSON.stringify(product)
    ).subscribe(res => console.log(res))
    console.log("Created", JSON.stringify(product))
  }
  updateProduct(product: ProductInfo) {
    // Using Json Placeholder to get proper response from server
    this.http.put(
      'https://jsonplaceholder.typicode.com/posts/1', JSON.stringify(product)
    ).subscribe(res => console.log(res))
    console.log("Updated", JSON.stringify(product))
  }
  deleteProduct(product: ProductInfo) {
    // Using Json Placeholder to get proper response from server
    this.http.delete(
      'https://jsonplaceholder.typicode.com/posts/1'
    ).subscribe(res => console.log(res))
    console.log("Deleted", JSON.stringify(product))
  }
}
