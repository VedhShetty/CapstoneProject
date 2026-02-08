import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {

  BASE_URL = 'http://localhost:8083/api';

  constructor(private http: HttpClient) {}

  private getAuthHeaders() {
    return {
      headers: new HttpHeaders({
        userId: localStorage.getItem('userId') || '',
        userRole: localStorage.getItem('role') || ''
      })
    };
  }

  get(url: string) {
    return this.http.get(
      this.BASE_URL + url,
      this.getAuthHeaders()
    );
  }

  post(url: string, data: any) {
    return this.http.post(
      this.BASE_URL + url,
      data,
      this.getAuthHeaders()
    );
  }
}
