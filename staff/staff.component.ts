import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  addstaffForm:any = [];
  staffList: any = [];
  submitVisible2 = true;
  selectedIndex = "";

  constructor(
    public FormBuilder: FormBuilder) 
    {
    this.addstaffForm = this.FormBuilder.group({
      fullName2: [''],
      mobileNo2: [''],
    })
  }
    // let data = localStorage.getItem('STAFFLIST');
    // if (data) 
    // {
    //    this.staffList = JSON.parse(data)  
    // }
  
 
  // fullName2 = "";
  // mobileNo2 = "";
  

 
  ngOnInit(): void {
    let data = localStorage.getItem('STAFFLIST');
    if (data) {
      this.staffList = JSON.parse(data)
    }
  }

  clearfield() {
    this.addstaffForm.reset();
  }

  submit2() {
    this.staffList.push(this.addstaffForm.value);
    localStorage.setItem('STAFFLIST', JSON.stringify(this.staffList));
    console.log("Form value", this.addstaffForm.value);
    this.clearfield();

    // let staffObj2 = {
    //   fullName2: this.fullName2,
    //  mobileNo2: this.mobileNo2
    // }
    
    //  this.fullName2 = "";
    //  this.mobileNo2 = "";
   
  }

 

  edit2(i: any) {
    this.selectedIndex = i;
    this.submitVisible2 = false;
   localStorage.setItem('STAFFLIST', JSON.stringify(this.staffList));
  //  console.log("edit",this.staffList);
    this.addstaffForm.patchValue({
      fullName2: this.staffList[i].fullName2,
      mobileNo2: this.staffList[i].mobileNo2,
   })
 
  }
  update2() {
    this.staffList[this.selectedIndex].fullName2 = this.addstaffForm.value.fullName2;
    this.staffList[this.selectedIndex].mobileNo2 = this.addstaffForm.value.mobileNo2;
    localStorage.setItem('STAFFLIST', JSON.stringify(this.staffList))
    this.submitVisible2 = true;
    // console.log("update", this.staffList);
    this.clearfield();

    //  this.fullName2 = "";
    //  this.mobileNo2 = "";

  }

 
   
  delete2(i: any) {
    this.staffList.splice(i, 1);
    localStorage.setItem('STAFFLIST', JSON.stringify(this.staffList));
    console.log("delete", this.staffList);
  }


 

}
