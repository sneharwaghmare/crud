import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  addEmployeeForm:any = [];
  employeeList:any = [];
  submitVisible = true;
  selectedIndex = "";
   submitted = false;
  constructor(public FormBuilder:FormBuilder) { 
   
  this.addEmployeeForm = FormBuilder.group({
   employeeName:['',Validators.required],
   mobileNo:['',[Validators.required,Validators.maxLength(10),Validators.minLength(7)]],
  });
   console.log("form",this.addEmployeeForm);
  }

   
  ngOnInit(): void {
    let data = localStorage.getItem('EMPLOYEELIST');
    if (data) 
   {
     this.employeeList = JSON.parse(data);   
    }
  }
 
  clear(){
    this.addEmployeeForm.reset();
  }

  get f(){
   return this.addEmployeeForm.controls
  }

 
  submit(){
   this.submitted = true;
   
   console.log("this.addEmloyeeForm",this.addEmployeeForm.controls);
   if(this.addEmployeeForm.valid == true){
    this.employeeList.push(this.addEmployeeForm.value);
   
    console.log("form value",this.addEmployeeForm.value);
    localStorage.setItem('EMPLOYEELIST',JSON.stringify(this.employeeList));
     
    this.clear();
    this.submitted = false;
   }
   else{
     console.log("error");
   }

  }

   edit(i:any){
    this.selectedIndex = i;
    this.submitVisible=false;
    localStorage.setItem('EMPLOYEELIST',JSON.stringify(this.employeeList));

    // console.log("edit",this.employeeList);
    
    this.addEmployeeForm.patchValue({
      employeeName:this.employeeList[i].employeeName,
      mobileNo:this.employeeList[i].mobileNo
     
    })
   
    }
      
    update(){
      this.submitted = true;
      if(this.addEmployeeForm.valid==true){
        this.employeeList[this.selectedIndex].employeeName = this.addEmployeeForm.value.employeeName;
        this.employeeList[this.selectedIndex].mobileNo = this.addEmployeeForm.value.mobileNo;
        this.submitVisible=true;
        localStorage.setItem('EMPLOYEELIST',JSON.stringify(this.employeeList));
        this.clear();
        this.submitted = false;
      }
     else{
       console.log("update error");
     }
    //  console.log("update",this.employeeList);
    
   }

   

   delete(i:any){
    this.employeeList.splice(i,1);
    localStorage.setItem('EMPLOYEELIST',JSON.stringify(this.employeeList));
    console.log("delete",this.employeeList);
    
   }
 
  

  }
