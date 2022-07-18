import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-calculate-order-payment',
  templateUrl: './calculate-order-payment.component.html',
  styleUrls: ['./calculate-order-payment.component.css']
})
export class CalculateOrderPaymentComponent implements OnInit {

  constructor(private http: HttpClient,private formBuilder: FormBuilder) { }
  CalculateOrderPayment: FormGroup;
  ngOnInit(): void {

    this.CalculateOrderPayment = this.formBuilder.group({
      supplierName: ['', Validators.required],
      numberOfOrder: ['', Validators.required],
      supplierType: ['', [Validators.required]],
 });
}

showdata:any[]=[]
data:any[]=[]
showhide = false
errormsg=false
submit(){

  const formData = new FormData();
   

// formData.append('accounts',this.transferFormMultipleReceipient.get('receiver').value);

formData.append('supplierName',this.CalculateOrderPayment.get('numberOfOrder').value);

formData.append('supplierName',this.CalculateOrderPayment.get('supplierType').value);


// formData.append('file', this.verifyForm.get('fileSource').value);

console.log("govind",this.CalculateOrderPayment)
const tokens = localStorage.getItem('token');
console.log("tokens",tokens)

const headers = {'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJWaWthc0BnbWFpbC5jb20iLCJpc3MiOiJzdGFuZGFyZGJhbmsuY28uemEiLCJwZXJzb25hIjoiTm9tYW5pbmkiLCJmYWJyaWNUb2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeWJtRnRaU0k2SWxacGEyRnpRR2R0WVdsc0xtTnZiU0lzSW05eVowNWhiV1VpT2lKUGNtY3hJaXdpYVdGMElqb3hOalUzTWpVMU1qWXpmUS5ja1BBUXhVcjZCZGh2SmxCM3VoQUpRYm1XanZJSy0tUDJ5M0wzeU5oWlYwIiwiaWF0IjoxNjU3MjU1MjYzfQ.o9NhLE7x8xvzFMv5EsLsivVCp9j4TxVrlWVazCmgIF0','Content-Type': 'application/json'} 
  
const body=JSON.stringify(this.CalculateOrderPayment.value);

   this.http.post('http://10.109.88.187:443/api/calculateOrderPayment', body,{headers})

    .subscribe(res => {
          console.log("ressss",res['result'],res);
          // this.showdata  = res['result'].filedata.fileData
          if(res['result']!=null){
            //  alert('valid ! '+ res['result'].filedata.fileData);
            this.errormsg=false
            this.showhide=true
            this.showdata.push(res['result'])

          }else{
            // alert('Invalid ! ' +' '+'{ }');
            this.showhide=false
            this.errormsg=true
           
          }
        // alert("submit suceessfully"+ res['result'].value) ;    // let showdata = res['result'].filedata.fileData
      })
}
submit1(){
      // stop here if form is invalid
      if (this.CalculateOrderPayment.invalid) {
        console.log(this.CalculateOrderPayment.value)
        //  alert('valid ! '+ res['result'].filedata.fileData);
        this.showhide=false
        this.errormsg=true
        }else{
          // alert('Invalid ! ' +' '+'{ }');
           this.errormsg=false
           this.showhide=true
           this.showdata  = this.CalculateOrderPayment.value
           console.log(this.showdata);
        }
      }
}


