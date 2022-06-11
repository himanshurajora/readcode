import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/auth/auth.service';
import { ApiService } from 'src/services/api/api.service';
import { IUserLoginCredentials, IUserLoginResponseData } from 'types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService
  ) {}
  // TODO: Future updates needed
  async login(value: IUserLoginCredentials) {
    // TODO: Fix typing here
    this.apiService.loginUser(value).subscribe((data: any) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data));
      window.location.reload();
    });
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }
}
