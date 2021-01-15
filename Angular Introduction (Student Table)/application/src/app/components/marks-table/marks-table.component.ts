import { analyzeFileForInjectables } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { StudentInfo } from '../../models/StudentInfo';
import { StudentInfoService } from '../../services/student-info.service';

@Component({
  selector: 'app-marks-table',
  templateUrl: './marks-table.component.html',
  styleUrls: ['./marks-table.component.css'],
})
export class MarksTableComponent implements OnInit {
  studentInfo: StudentInfo[];
  constructor(private studentInfoService:StudentInfoService) {}

  ngOnInit(): void {
    this.studentInfo = this.studentInfoService.getStudentInfo()
  }
  getAvg(marks:number[]):number{
    return marks.reduce((a, b) => a + b) / marks.length
  }
}
