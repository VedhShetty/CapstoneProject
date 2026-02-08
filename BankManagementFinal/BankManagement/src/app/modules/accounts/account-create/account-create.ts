import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../../services/account';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule],   // ✅ ADD THIS
  templateUrl: './account-create.html'
})
export class AccountCreateComponent {

  account:any = {
    currency: 'INR',
    status: 'ACTIVE'
  };

  constructor(private accountService:AccountService){}

  save(){

    if(!this.account.userId){
      alert("Customer ID is required");
      return;
    }
  
    if(!this.account.accountType){
      alert("Select Account Type");
      return;
    }
  
    if(this.account.balance == null || this.account.balance < 0){
      alert("Initial balance cannot be negative");
      return;
    }
  
    this.accountService.createAccount(this.account)
      .subscribe({
        next: (res:any) => {
          if(res.success){
            alert("Account Created: " + res.account.accountNumber);
            this.account = {};
          }else{
            alert(res.message);
          }
        },
        error: (err:any) => {
          if(err.error && err.error.message){
            alert(err.error.message);   // 👈 shows "Customer does not exist"
          }else{
            alert("Account creation failed");
          }
        }
      });
  }
  
  
}
