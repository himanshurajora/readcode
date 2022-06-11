import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api/api.service';
import { IUserRegisterInput } from 'types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  register(value: IUserRegisterInput): void {
    let user = {
      name: value.name.trim(),
      username: value.username.trim(),
      email: value.email.trim(),
      password: value.password.trim(),
    };
    this.apiService.registerUser(user).subscribe(
      (data) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        let alertStr = '';
        if (error.error.length) {
          error.error.forEach((err: any) => {
            alertStr += err.msg + '\n';
          });
          alert(alertStr);
        } else {
          alert(error.error.message);
        }
      }
    );
  }
}
