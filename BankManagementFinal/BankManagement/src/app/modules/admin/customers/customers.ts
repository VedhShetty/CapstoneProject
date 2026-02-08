import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.html',
})
export class CustomersComponent implements OnInit {

  users: any[] = [];

  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.getCustomers().subscribe({
      next: (res) => {
        console.log('CUSTOMERS API RESPONSE:', res);
        console.log('CUSTOMERS ARRAY:', res.customers);

        // ✅ THIS IS CORRECT
        this.users = res.customers;
        console.log('USERS LENGTH:', this.users.length);
      },
      error: (err) => console.error(err)
    });
  }

  trackByUserId(index: number, user: any) {
    return user.userId;
  }
}
