import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   addLoginForm:any = [];
   logindetails:any = [];
   submitted = false;
   selectedIndex = "";
   
  constructor(private FormBuilder:FormBuilder) { 
   this.addLoginForm = FormBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.maxLength(7),Validators.minLength(5)]],

   })


  }

  ngOnInit(): void {
    let data = localStorage.getItem('login');
    if (data)
    {
      this.login = JSON.parse(data);
    }
  }


  clear(){
    this.addLoginForm.reset();
  }

 login(){
  this.submitted = true;
  console.log("addLoginForm",this.addLoginForm.controls);
  if(this.addLoginForm.valid = true)
  {
    this.logindetails.push(this.addLoginForm.value);
    localStorage.setItem("login",JSON.stringify(this.addLoginForm));
    console.log("form value",this.addLoginForm.value);

    this.clear();
    this.submitted = false;
  }
  else{
    console.log("error");
  }

}

  //  let details = {
  //    email:this.email,
  //   password:this.password


  //  }
  

 
  // if (this.email=="sneha@gmail.com" && this.password=="sneha123") {
   
  
  //   alert("valid credential");

  // }
  // else
  // {
  //   console.log("login unsuccessful");
  //   alert("invalid credential");
  // }
 
// loginclearfield(){
//   this.email = "";
//   this.password ="";
// }

 
}
