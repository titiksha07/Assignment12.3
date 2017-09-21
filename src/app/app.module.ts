import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DeptDropDownService} from './dept-service';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employees/employees.component';
import { CapitalPipe } from './capital.pipe';
import { EmployeeListComponent } from './employee-detail/employee.component';
import {appRouting} from './routes/employee-routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {EmployeeService} from './employee-service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CapitalPipe,
    EmployeeComponent,
    EmployeeListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      appRouting
  ],
  providers: [DeptDropDownService,
  EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
