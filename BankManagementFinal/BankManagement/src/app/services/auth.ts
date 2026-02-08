import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly baseUrl = 'http://localhost:8083/api/users';

  constructor(private http: HttpClient) {}

  // ======================
  // API
  // ======================
  login(username: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/login`, {
      username,
      password
    });
  }

  // ======================
  // STORAGE (CRITICAL)
  // ======================
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

  // ======================
  // AUTH STATE (FIXED)
  // ======================
  isLoggedIn(): boolean {
    const role = localStorage.getItem('role');
    const userId = localStorage.getItem('userId');
    return !!(role && userId);
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') === 'ADMIN';
  }

  // ======================
  // GETTERS (NULL-SAFE)
  // ======================
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

  // ======================
  // LOGOUT
  // ======================
  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
  }
}
