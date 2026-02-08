import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../../services/transaction';

@Component({
  selector:'app-my-transactions',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl:'./my-transactions.html'
})
export class MyTransactionsComponent {

  accountNumber='';
  transactions:any[]=[];

  constructor(private service:TransactionService){}
  getRelatedAccount(t:any): string {
    if (!t.description) return '-';

    if (t.transactionType === 'TRANSFER_IN') {
      return t.description.replace('Received from ', '');
    }

    if (t.transactionType === 'TRANSFER_OUT') {
      return t.description.replace('Transferred to ', '');
    }

    return '-';
  }

  load(){

    if(!this.accountNumber){
      alert("Enter account number");
      return;
    }

    this.service.getMyTransactions(this.accountNumber)
      .subscribe(res=>{
        if(res.success){
          this.transactions=res.transactions;
        }
      });
  }
}
