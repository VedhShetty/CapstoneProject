import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  selector:'app-login',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl:'./login.html'
})
export class LoginComponent{

  username='';
  password='';

  constructor(private auth:AuthService,
              private router:Router){}

              login(){

                if(!this.username || !this.password){
                  alert("Username and Password are required");
                  return;
                }
              
                this.auth.login(this.username, this.password)
                  .subscribe({
                    next: (res:any) => {
                      if(res.success){
                        this.auth.saveUser(res);
                        this.router.navigate(['/dashboard']);
                      }else{
                        alert(res.message);
                      }
                    },
                    error: (err:any) => {
                      if(err.error && err.error.message){
                        alert(err.error.message);   
                      }else{
                        alert("Invalid username or password");
                      }
                    }
                  });
              }
              

}
