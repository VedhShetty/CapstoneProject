import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = "http://localhost:8083/api/transactions";

  constructor(private http: HttpClient) {}

  private headers(){
    return {
      headers: new HttpHeaders({
        'userRole': localStorage.getItem("role") || '',
        'userId': localStorage.getItem("userId") || ''
      })
    };
  }

  // ✅ FUND TRANSFER
  transfer(data:any){
    return this.http.post<any>(
      `${this.baseUrl}/transfer`,
      data,
      this.headers()
    );
  }

  // ✅ ALL TRANSACTIONS OF ACCOUNT
  getMyTransactions(accountNumber:string){
    return this.http.get<any>(
      `${this.baseUrl}/account/${accountNumber}`,
      this.headers()
    );
  }

  // ✅ MONEY RECEIVED (TRANSFER_IN)
  getReceivedMoney(accountNumber:string){
    return this.http.get<any>(
      `${this.baseUrl}/received/${accountNumber}`,
      this.headers()
    );
  }

  getAllTransactionsForAdmin() {
  return this.http.get<any[]>(
    `${this.baseUrl}/admin/all`,
    this.headers()
  );
}




}
