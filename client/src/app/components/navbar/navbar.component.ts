import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/core/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}
  isLoggedIn = this.authService.isAuthenticated();
  logout(): void {
    this.authService.logout();
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  ngOnInit(): void {}
}
