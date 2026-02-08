import { Component } from '@angular/core';
import { UserService } from '../../../services/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-create.html'
})
export class CustomerCreate {

  user:any = {
    role:'CUSTOMER'
  };

  constructor(private userService:UserService){}

  saveCustomer(){

    // First Name
    if(!this.user.firstName || this.user.firstName.length < 2){
      alert("First Name must contain at least 2 characters");
      return;
    }

    // Last Name
    if(!this.user.lastName || this.user.lastName.length < 2){
      alert("Last Name must contain at least 2 characters");
      return;
    }

    // Username
    if(!this.user.username || this.user.username.length < 4){
      alert("Username must be at least 4 characters");
      return;
    }

    // Password
    if(!this.user.passwordHash || this.user.passwordHash.length < 6){
      alert("Password must be at least 6 characters");
      return;
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!this.user.email || !emailPattern.test(this.user.email)){
      alert("Enter a valid email address");
      return;
    }

    // Phone
    if(!this.user.phone || this.user.phone.toString().length != 10){
      alert("Phone number must be 10 digits");
      return;
    }

    // Address Line 1
    if(!this.user.addressLine1){
      alert("Address Line 1 is required");
      return;
    }

    // City
    if(!this.user.city){
      alert("City is required");
      return;
    }

    // State
    if(!this.user.state){
      alert("State is required");
      return;
    }

    // Postal Code
    if(!this.user.postalCode || this.user.postalCode.toString().length != 6){
      alert("Postal Code must be 6 digits");
      return;
    }

    // API Call
    this.userService.addCustomer(this.user)
  .subscribe({
    next: (res:any) => {
      if(res.success){
        alert("Customer Created Successfully");
        this.user = { role:'CUSTOMER' };
      }else{
        alert(res.message);
      }
    },
    error: (err:any) => {
      if(err.error && err.error.message){
        alert(err.error.message);
      }else{
        alert("Username or Email already exists");
      }
    }
  });

  }
}
