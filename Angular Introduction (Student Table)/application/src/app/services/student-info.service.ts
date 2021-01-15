import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {

  constructor() { }

  getStudentInfo() {
    return [
      {
        name: "Product 1",
        address: "vadodara"
      }, {
        name: "Product 2",
        address: "vadodara"
      },
    ];
  }
}
