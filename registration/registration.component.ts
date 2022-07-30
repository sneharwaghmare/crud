import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  addRegisterForm:any = [];
  registerDetails:any = [];
  submitted = false;
  selectedIndex = "";
  constructor(public FormBuilder:FormBuilder) { 
    this.addRegisterForm = this.FormBuilder.group({
  email1:['',[Validators.required,Validators.email]],
  password1:['',Validators.required],
  accountNo :['',Validators.required],
  fullName:['',Validators.required],
  contactNo:['',Validators.required],
  address:['',Validators.required],

})
  
}

ngOnInit(): void {
  let data = localStorage.getItem('register');
  if(data)
  {
   this.Register = JSON.parse(data);
  }
}

clear(){
  this.addRegisterForm.reset();
}

 
  Register(){
    this.submitted = true;
    
    if(this.addRegisterForm.valid = true){
      console.log("addregistrationForm.controls",this.addRegisterForm.controls);
   console.log("to register");
   this.submitted = false;
    }
    else{
      console.log("error");
    }
//     let regobj = {
//     email1: this.email1,
//   password1:this. password1,
//  accountNo: this.accountNo,
//   fullName:this.fullName,
//   contactNo:this.contactNo,
//   address:this.address
//     }
    this.registerDetails.push(this.addRegisterForm.value);
    localStorage.setItem("register",JSON.stringify(this.Register));
      console.log("form value",this.addRegisterForm.value);
    //  alert("valid credential");  
   
    // if (this.email1== "sneha@gmail.com" && this.password1 == "sneha123" && this.accountNo == "2356985443" && this.fullName =="sneha raju waghmare" && this.address == "wrdhman nagar" && this.contactNo == "9158313921") {
      
    // }
    // else
    // {
    //   console.log("registration unsuccessful");
    //   alert("invalid credential");
 
    // }
    this.clear();
 
   }
  //  regclearfield(){
  //  this. email1 = "";
  //   this.password1 ="";
  //  this. accountNo = "";
  //   this.fullName = "";
  //  this. contactNo = "";
  //   this.address = "";
  //  }
 

}
