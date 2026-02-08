import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../../services/transaction';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-list.html'
})
export class TransactionListComponent implements OnInit {

  transactions: any[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getAllTransactionsForAdmin()
      .subscribe({
        next: (res: any) => {
          this.transactions = res.transactions || [];
        },
        error: (err) => {
          console.error('Failed to load admin transactions', err);
        }
      });
  }
}
