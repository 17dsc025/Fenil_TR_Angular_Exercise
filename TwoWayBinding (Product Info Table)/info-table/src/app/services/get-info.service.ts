import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

  constructor() { }
  getInfo() {
    return [
      {
        name: "Product 1",
        code:"3453",
        branchName:"branch-5",
        branchCode:"7464",
        address: "vadodara"
      }, {
        name: "Product 2",
        code:"646",
        branchName:"branch-7",
        branchCode:"567",
        address: "vadodara"
      },{
        name: "Product 3",
        code:"3453",
        branchName:"branch-2",
        branchCode:"7567",
        address: "vadodara"
      }
    ];;
  }
}
