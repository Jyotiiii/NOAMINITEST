import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}
  ontractService: any;
  // showMsg: boolean = false;
  // dataget = [];
  // dataUrl = '';
  // errorMessage = '';

  login = new FormGroup({
    Username: new FormControl('', [Validators.required, Validators.minLength(3)]),

    Password: new FormControl('', [Validators.required, Validators.minLength(3)])

    // file: new FormControl('', [Validators.required]),
    // verifyfile: new FormControl('', [Validators.required]),

    // fileSource: new FormControl('', [Validators.required]),
  });
  
  loginClick(){

   if(this.login.valid){
    alert('login')
    this.router.navigate(['/dashboard'])
   }

    
  }
}
