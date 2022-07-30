import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffComponent } from './staff/staff.component';
import { StatementComponent } from './statement/statement.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"reg",
    component:RegistrationComponent
  },
  {
    path:"employee",
    component:EmployeeComponent
  },
  {
    path:"customer",
    component:CustomerComponent
  },
  {
    path:"staff",
    component:StaffComponent
  },
  {
    path:"statement",
    component:StatementComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
