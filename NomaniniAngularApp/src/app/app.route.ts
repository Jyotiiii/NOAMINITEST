import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterFunderComponent } from './register-funder/register-funder.component';
import { RegisterSchoolComponent } from './register-school/register-school.component';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { ResetPasswordsuccessfullyComponent } from './reset-passwordsuccessfully/reset-passwordsuccessfully.component';

 
export const appRoutes: Routes = [
  { path: '', component: RegisterSchoolComponent },
    { path: 'registerschool', component: RegisterSchoolComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registerfunder', component: RegisterFunderComponent },
  
    







  ]
  