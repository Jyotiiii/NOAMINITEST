import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-listorder',
  templateUrl: './listorder.component.html',
  styleUrls: ['./listorder.component.css']
})
export class ListorderComponent implements OnInit {
  ApproveRejectList=[{
    id:1,
    Date:'2022-7-5',
    Gross_Amount:'133290',
    Discount:'0.055',
    Discounted_Amount:'3020',
    VAT:'1.16',
    Amount_Payable:'700'
  },
  {
    id:2,
    Date:'2022-7-6',
    Gross_Amount:'300',
    Discount:'60%',
    Discounted_Amount:'900',
    VAT:'990',
    Amount_Payable:'210'
  },
  {
    id:3,
    Date:'2022-7-7',
    Gross_Amount:'300',
    Discount:'50%',
    Discounted_Amount:'300',
    VAT:'600',
    Amount_Payable:'700'
  },
  {
    id:4,
    Date:'2022-7-8',
    Gross_Amount:'300',
    Discount:'90%',
    Discounted_Amount:'300',
    VAT:'600',
    Amount_Payable:'700'
  },
  {
    id:5,
    Date:'2022-7-9',
    Gross_Amount:'300',
    Discount:'60%',
    Discounted_Amount:'990',
    VAT:'800',
    Amount_Payable:'770'
  },]
  

  
  constructor(private formBuilder: FormBuilder) { }
  listorder: FormGroup;

  ngOnInit(): void {
    this.listorder = this.formBuilder.group({
    
 });
  }

}
