import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
 addCustomerForm:any = [];
 customerList:any = [];
 submitVisible1 = true;
 selectedIndex = "";
 submitted = false;
  constructor(
    public formBuilder: FormBuilder)
     { 
    this.addCustomerForm=this.formBuilder.group({
      fullName1:['',Validators.required],
      mobileNo1:['',[Validators.required,Validators.minLength(7),Validators.maxLength(10)]],
    })
  }
    // let data = localStorage.getItem('CUSTOMERLIST');
    // if (data) 
    // {
    //    this.customerList = JSON.parse(data)  
    // }
  
  
 ngOnInit(): void {
    let data = localStorage.getItem('CUSTOMERLIST');
    if (data) 
    {
       this.customerList = JSON.parse(data)  
    }
  
  }

  submit1(){
    
    // let customerObj1 = {
    //   fullName1: this.fullName1,
    //  mobileNo1: this.mobileNo1
    // }
     
    //  this.fullName1 = "";
    //  this.mobileNo1= "";
    this.submitted = true;
    this.submitted=false;
    console.log("this.addCustomerForm",this.addCustomerForm.controls);
    if(this.addCustomerForm.valid==true){
      this.customerList.push(this.addCustomerForm.value);
      localStorage.setItem('CUSTOMERLIST',JSON.stringify(this.customerList));
       console.log("Form value",this.addCustomerForm.value);

       this.clearfield();
       
    }
    else
    {
      console.log("error");
    }
    
     
     

  }

  clearfield(){
    this.addCustomerForm.reset();
  }

  edit1(i:any){
    this.selectedIndex = i;
    this.submitVisible1 = false;
    localStorage.setItem('CUSTOMERLIST',JSON.stringify(this.customerList));
    // console.log("edit",this.customerList);
    this.addCustomerForm.patchValue({
     fullName1 : this.customerList[i].fullName1,
     mobileNo1 : this.customerList[i].mobileNo1,
    });
   
    
    }

  update1(){
    this.customerList[this.selectedIndex].fullName1 = this.addCustomerForm.value.fullName1;
    this.customerList[this.selectedIndex].mobileNo1 = this.addCustomerForm.value.mobileNo1;
    localStorage.setItem('CUSTOMERLIST',JSON.stringify(this.customerList));
    this.submitVisible1 = true;
    // console.log("update",this.customerList);
   this.clearfield();
  
  }

 

  delete1(i:any){
   this.customerList.splice(i,1);
   localStorage.setItem('CUSTOMERLIST',JSON.stringify(this.customerList));
   console.log("delete",this.customerList);
  }
 

  

}
