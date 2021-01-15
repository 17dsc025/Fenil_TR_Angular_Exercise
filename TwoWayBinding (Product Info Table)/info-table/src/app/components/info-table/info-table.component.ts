import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../../services/get-info.service';
import { Info } from '../../models/Info';


@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.css']
})
export class InfoTableComponent implements OnInit {
  info: Info[];
  searchText = "";
  constructor(private getInfoService: GetInfoService) { }

  ngOnInit(): void {
    this.info = this.getInfoService.getInfo()
  }
  displayInfo(ele: Info) {
    alert(`Name: ${ele.name} \nCode: ${ele.code} \nBranch Name: ${ele.branchName} \nBranch Code: ${ele.branchCode}\nAddress: ${ele.address}`)
  }

}
