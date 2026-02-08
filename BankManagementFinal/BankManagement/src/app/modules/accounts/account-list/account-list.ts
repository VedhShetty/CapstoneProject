import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountService } from '../../../services/account';

@Component({
  selector:'app-account-list',
  standalone:true,
  imports:[CommonModule, RouterModule],
  templateUrl:'./account-list.html'
})
export class AccountListComponent implements OnInit {

  accounts:any[] = [];

  constructor(private service:AccountService){}

  ngOnInit(){
    this.service.getAllAccounts()
      .subscribe(res=>{
        if(res.success){
          this.accounts = res.accounts;
        }
      });
  }
}
