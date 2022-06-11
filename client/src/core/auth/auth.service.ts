import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';


@Injectable()
export class AuthService {
  constructor(
    public jwtHelper: JwtHelperService,
    private router: Router
  ) {}
  // ...
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
