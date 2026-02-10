import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {

  private readonly baseUrl = 'https://capstoneazure-cseqhzdsa3d6dcb6.centralus-01.azurewebsites.net/api/users';

  constructor(private http: HttpClient) {}

  // (admin + customer safe)
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

  //  Get all customers
  getCustomers() {
    return this.http.get<any>(
      `${this.baseUrl}/customers`,
      this.getHeaders()
    );
  }

  //  Create customer
  addCustomer(data: any) {
    return this.http.post<any>(
      `${this.baseUrl}/register`,
      data,
      this.getHeaders()
    );
  }
}
