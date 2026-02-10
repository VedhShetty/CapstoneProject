import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../../services/transaction';
import { AccountService } from '../../../services/account'; 

@Component({
  selector:'app-transfer',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl:'./transfer.html'
})
export class TransferComponent implements OnInit {   

  fromAccount = '';
  toAccount = '';
  amount:number = 0;

  noAccounts: boolean = false; 

  constructor(
    private service:TransactionService,
    private accountService: AccountService 
  ){}

  ngOnInit(): void { 
    this.accountService.getMyAccounts()
      .subscribe(res => {
        if (res.success && res.account.length === 0) {
          this.noAccounts = true;
          alert("You don’t have an account yet. Fund transfer is not available.");
        }
      });
  }

  transfer(){

    if(this.noAccounts){ 
      alert("You don’t have an account yet. Fund transfer is not available.");
      return;
    }

    if(!this.fromAccount || !this.toAccount || this.amount<=0){
      alert("All fields required");
      return;
    }

    this.service.transfer({
      fromAccount:this.fromAccount,
      toAccount:this.toAccount,
      amount:this.amount
    }).subscribe({
      next:(res:any)=>{
        alert(res.message || "Transfer successful");
      },
      error:(err:any)=>{
        alert(err.error?.message || "Transfer failed");
      }
    });
  }
}
