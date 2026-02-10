import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminTransactionService {

  private baseUrl = "https://capstoneazure-cseqhzdsa3d6dcb6.centralus-01.azurewebsites.net/api/transactions";

  constructor(private http: HttpClient) {}

  private headers(){
    return {
      headers: new HttpHeaders({
        'userRole': localStorage.getItem("role") || ''
      })
    };
  }

  // ✅ ADMIN → ALL TRANSACTIONS
  getAllTransactions(){
    return this.http.get<any>(
      `${this.baseUrl}/admin/all`,
      this.headers()
    );
  }
}
