import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = "http://localhost:8083/api/accounts";

  constructor(private http: HttpClient) {}

  headers(){
    const role = localStorage.getItem("role") || '';
    const userId = localStorage.getItem("userId") || '';
  
    return {
      headers: new HttpHeaders({
        'userRole': role,
        'userId': userId
      })
    };
  }
  

  createAccount(data:any){
    return this.http.post<any>(this.baseUrl, data, this.headers());
  }

  getAllAccounts(){
    return this.http.get<any>(this.baseUrl, this.headers());
  }

  getMyAccounts(){
    return this.http.get<any>(
      `${this.baseUrl}/user/${localStorage.getItem("userId")}`,
      this.headers()
    );
  }
}
