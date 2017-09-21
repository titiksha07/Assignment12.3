import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './../employee-service';
import { EmployeeInterface, EmployeeInterfaceModel } from './../employee-interface';
import { Departmentdetails } from './../department-interface';
import { DeptDropDownService } from './../dept-service';
import { CapitalPipe } from './../capital.pipe';
import { Router } from "@angular/router";
//import { CommonDate } from './commonDate';



//declare const alertify: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [EmployeeService]
})

export class EmployeeComponent implements OnInit {
  /**Public variable */
  employeesArray: EmployeeInterface[] = [];
  deptType: Departmentdetails[] = [];

  employeeModel: EmployeeInterfaceModel;
  employeeDetail: EmployeeInterface;

  // Using constructor, call the cricketService.
  // this shorthand syntax automatically creates and
  // initializes a new private member in the class
  constructor(private _empService: EmployeeService, private _deptDropDown: DeptDropDownService,private _router:Router) { }

  ngOnInit() {
    
    /**Define default values */
    this.employeeModel = {
      firstName: '',
      lastName: '',
      employeeId:null,
     department:'',
     dob:''
    };

    this.deptType = this._deptDropDown.getDeptType();
  }

  /**Add a cricket */
  addEmployee(values) {
    // values : {
    //   favShot: ""
    //   firstName: ""
    //   lastName: ""
    //   playerType: ""
    // }
    this.employeeDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      employeeId: values.employeeId,
      dob:values.dob,
      description: values.deptType
    };
    // /**Call function from service. */
    this._empService.addEmployee(this.employeeDetail);
    
    // Using 3rd party library to show message.
    //alertify.notify('Cricketer Added Successfully', 'success', 3);
this.employeesArray = this._empService.getEmployee();
//console.log(this.employeesArray);
//console.log(this.employeesArray);
    //this.employeesArray = this._empService.getEmployee();
    this._router.navigate(['/employeeList']);
    //console.log("jh");
  };

   /**Reset a form */
 

}

