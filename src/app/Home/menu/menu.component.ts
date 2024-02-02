import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  pageTitle = 'Tony Product Management';

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get userName(): string{
    if(this.authService.currentUser){
      return this.authService.currentUser.userName
    }
    return '';
  }

  constructor(private router: Router, private authService: AuthService ) { }

  ngOnInit() {
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }
}

