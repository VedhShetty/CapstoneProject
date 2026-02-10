import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly baseUrl = 'https://capstoneazure-cseqhzdsa3d6dcb6.centralus-01.azurewebsites.net/api/users';

  constructor(private http: HttpClient) {}


  login(username: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/login`, {
      username,
      password
    });
  }

  saveUser(user: any) {
    if (!user) return;

    localStorage.setItem('userId', String(user.userId));
    localStorage.setItem('role', user.role);
    localStorage.setItem('username', user.username);
    localStorage.setItem('email', user.email);
    localStorage.setItem(
      'name',
      `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim()
    );
  }

  isLoggedIn(): boolean {
    const role = localStorage.getItem('role');
    const userId = localStorage.getItem('userId');
    return !!(role && userId);
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') === 'ADMIN';
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  getName(): string {
    return localStorage.getItem('name') ?? '';
  }

  getUsername(): string {
    return localStorage.getItem('username') ?? '';
  }

  getEmail(): string {
    return localStorage.getItem('email') ?? '';
  }


  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
  }
}
