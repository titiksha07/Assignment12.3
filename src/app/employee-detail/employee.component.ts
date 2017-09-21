import { Component, OnInit, Input } from '@angular/core';
import { EmployeeInterface } from './../employee-interface';
import {EmployeeService} from './../employee-service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeListComponent implements OnInit {
@Input() employeesDetail;
employeesList:EmployeeListComponent[];
  constructor() { }

  ngOnInit() {
   
  }

}