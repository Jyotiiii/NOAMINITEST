
 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
// import { VerifyComponent } from './verify/verify.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
// import { UserformComponent } from './userform/userform.component';
import { CommonModule } from '@angular/common';
import { RegisterSchoolComponent } from './register-school/register-school.component';
import { LoginComponent } from './login/login.component';
import { RegisterFunderComponent } from './register-funder/register-funder.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule,CommonModule,HttpClientModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, RegisterSchoolComponent, LoginComponent, RegisterFunderComponent],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



