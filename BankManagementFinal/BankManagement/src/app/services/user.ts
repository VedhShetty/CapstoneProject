import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {

  private readonly baseUrl = 'http://localhost:8083/api/users';

  constructor(private http: HttpClient) {}

  // ✅ Centralized headers (admin + customer safe)
  private getHeaders() {
    const role = localStorage.getItem('role');
    const userId = localStorage.getItem('userId');

    return {
      headers: new HttpHeaders({
        userRole: role ?? '',
        userId: userId ?? ''
      })
    };
  }

  // ✅ ADMIN: Get all customers
  getCustomers() {
    return this.http.get<any>(
      `${this.baseUrl}/customers`,
      this.getHeaders()
    );
  }

  // ✅ ADMIN: Create customer
  addCustomer(data: any) {
    return this.http.post<any>(
      `${this.baseUrl}/register`,
      data,
      this.getHeaders()
    );
  }
}
