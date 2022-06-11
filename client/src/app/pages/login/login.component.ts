import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/services/api/api.service';
import { IUserLoginCredentials } from 'types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  Login(value: IUserLoginCredentials) {
    this.apiService.loginUser(value).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
