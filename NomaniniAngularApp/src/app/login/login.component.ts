import { Component, OnInit } from  '@angular/core';
import { FormGroup, FormControl,FormBuilder ,Validators } from '@angular/forms';
import { Router } from '@angular/router';

// import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {}
  ontractService: any;
  // showMsg: boolean = false;
  // dataget = [];
  // dataUrl = '';
  // errorMessage = '';

  login = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.minLength(3)]),

    password: new FormControl('', [Validators.required, Validators.minLength(3)]),

    subscriptionKey: new FormControl('', [Validators.required, Validators.minLength(3)])

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
  showdata:any[]=[]
data:any[]=[]
showhide = false
errormsg=false
submit(){

  const formData = new FormData();
   

// formData.append('accounts',this.transferFormMultipleReceipient.get('receiver').value);

formData.append('userId',this.login.get('password').value);

formData.append('userId',this.login.get('subscriptionKey').value);


// formData.append('file', this.verifyForm.get('fileSource').value);

console.log("govind",this.login)


const headers = {'Content-Type': 'application/json'} 
  
const body=JSON.stringify(this.login.value);

   this.http.post('http://10.109.88.187:443/api/user/authenticate', body,{headers})

    .subscribe(res => {
          console.log("ressss",res);
          // this.showdata  = res['result'].filedata.fileData
          // this.showdata.push(res)
          if(res!=null&&res['code']==200){
            //  alert('valid ! '+ res['result'].filedata.fileData);
            this.errormsg=false
            this.showhide=true
            this.showdata.push(res)
            console.log("tokenss",res['token'])
            localStorage.setItem('token', res['token']);

          }else{
            // alert('Invalid ! ' +' '+'{ }');
            this.showhide=false
            this.errormsg=true
           
          }
        // alert("submit suceessfully"+ res['result'].value) ;    // let showdata = res['result'].filedata.fileData
      })
}
}
