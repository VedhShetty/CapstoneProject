import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../../services/transaction';

@Component({
  selector:'app-received-money',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl:'./received-money.html'
})
export class ReceivedMoneyComponent {

  accountNumber = '';
  transactions:any[] = [];

  constructor(private service:TransactionService){}
  getFromAccount(t:any): string {
    if (!t.description) return '-';
    return t.description.replace('Received from ', '');
  }

  load(){

    this.service.getMyTransactions(this.accountNumber)
      .subscribe(res=>{
        if(res.success){

          // ONLY incoming money
          this.transactions = res.transactions
            .filter((t:any)=> t.transactionType === 'TRANSFER_IN');
        }
      });

  }
}
