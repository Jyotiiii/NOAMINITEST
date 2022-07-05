import { Routes } from '@angular/router';
import { CalculateOrderPaymentComponent } from './calculate-order-payment/calculate-order-payment.component';
import { ListorderComponent } from './listorder/listorder.component';
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
    { path: 'CalculateOrderPayment', component: CalculateOrderPaymentComponent},
    { path: 'listorder', component: ListorderComponent},
  
    







  ]
  