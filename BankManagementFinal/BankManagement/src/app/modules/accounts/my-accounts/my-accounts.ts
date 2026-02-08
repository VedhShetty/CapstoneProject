import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../../services/account';

@Component({
  selector: 'app-my-accounts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-accounts.html'
})
export class MyAccountsComponent implements OnInit {

  myAccounts: any[] = [];
  noAccounts: boolean = false;

  constructor(private service: AccountService) {}

  ngOnInit() {
    this.service.getMyAccounts()
      .subscribe(res => {
        if (res.success) {
          this.myAccounts = res.account;

          if (this.myAccounts.length === 0) {
            this.noAccounts = true;
            alert("You don’t have any accounts yet.");
          }
        }
      });
  }
}
