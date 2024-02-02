import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  pageTitle = 'Log In';
  maskUserName!: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.router.navigate(['welcome'])
  }

  checkChanged(): void {
    this.maskUserName = !this.maskUserName;
  }

  login(loginForm: NgForm): void {
    if(loginForm && loginForm.valid){
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName,password);
      if(this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl)
      } else {
        this.router.navigate(['products']);
      }
    }
  }

}
