import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {
  addstatementForm:any =[];
  statementList:any = [];
  
  submitVisible3 = true;

  selectedIndex = "";

  constructor( public FormBuilder:FormBuilder) 
    { 
      this.addstatementForm = this.FormBuilder.group({
        txnDate : [''],
        chequeNo :[''],
        debitAmount :[''],
        creditAmount :[''],
        balance :['']
      })

    }

    


ngOnInit(): void {
  let data = localStorage.getItem('STATEMENTLIST');
 if (data)
  {
    this.statementList = JSON.parse(data)  
 }
}

   clearfield(){
    this.addstatementForm.reset();
  }

  submit3(){
    this.statementList.push(this.addstatementForm.value);
    localStorage.setItem('STATEMENTLIST',JSON.stringify(this.statementList));
    console.log("form value",this.addstatementForm.value);
    this.clearfield();

    // let statementObj3 = {
    //   txnDate: this.txnDate,
    //   chequeNo: this.chequeNo,
    //   debitAmount: this.debitAmount,
    //   creditAmount: this.creditAmount,
    //   balance : this.balance 
      
    // }
    
    //  this.txnDate = "";
    //  this.chequeNo = "";
    //  this.debitAmount ="";
    //  this.creditAmount ="";
    //  this.balance ="";
   

  }

  edit3(i:any){
    this.selectedIndex = i;
    this.submitVisible3 = false;
    localStorage.setItem('STATEMENTLIST',JSON.stringify(this.statementList));
    // console.log("edit",this.statementList);
    this.addstatementForm.patchValue({
    txnDate : this.statementList[i].txnDate,
    chequeNo :this.statementList[i].chequeNo,
    debitAmount : this.statementList[i].debitAmount,
    creditAmount :this.statementList[i].creditAmount,
    balance : this.statementList[i].balance,
   })
   
 }
 
  update3(){
    this.statementList[this.selectedIndex].txnDate = this.addstatementForm.value.txnDate;
    this.statementList[this.selectedIndex].chequeNo = this.addstatementForm.value.chequeNo;
    this.statementList[this.selectedIndex].debitAmount = this. addstatementForm.value.debitAmount;
    this.statementList[this.selectedIndex].creditAmount = this. addstatementForm.value.creditAmount;
    this.statementList[this.selectedIndex].balance = this. addstatementForm.value.balance;
    localStorage.setItem('STATEMENTLIST',JSON.stringify(this.statementList))
    this.submitVisible3 = true;
  //  console.log("update",this.statementList);
   this.clearfield();
  }

  //  this.txnDate = "";
  //  this.chequeNo = "";
  //  this.debitAmount = "";
  //  this.creditAmount = "";
  //  this.balance = "";
  
  

 

  delete3(i:any){
   this.statementList.splice(i,1);
   localStorage.setItem('STATEMENTLIST',JSON.stringify(this.statementList));
   console.log("delete",this.statementList);
  }


 
}
