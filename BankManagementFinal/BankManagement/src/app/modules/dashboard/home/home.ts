import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {

  role: string | null = '';
  name: string | null = '';
  username: string | null = '';
  email: string | null = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {

    this.role = this.auth.getRole();
    this.name = this.auth.getName();
    this.username = this.auth.getUsername();
    this.email = this.auth.getEmail();

    if(!this.role){
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
