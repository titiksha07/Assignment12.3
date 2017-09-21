import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from './../employees/employees.component'
import {EmployeeListComponent} from './../employee-detail/employee.component'
import { PageNotFoundComponent } from "./../page-not-found/page-not-found.component";
const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeComponent },
  { path: 'employeeList', component: EmployeeListComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRouting = RouterModule.forRoot(routes);