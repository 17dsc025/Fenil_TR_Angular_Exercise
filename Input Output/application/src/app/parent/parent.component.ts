import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  childString = "Angular"
  parentContent = ""
  constructor() { }

  ngOnInit(): void {
  }
  click(nameString: string): void {
    this.parentContent = "This is the app component. I received a string" +
      nameString + "from the hello component and I capitalize it here " +
      nameString.toLocaleUpperCase();
  }


}
