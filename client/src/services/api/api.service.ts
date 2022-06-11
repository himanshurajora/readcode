import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  GET_ALL_PROJECT_ROUTE,
  LOGIN_USER_ROUTE,
} from 'src/constants';
import { IUserLoginCredentials } from 'types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  loginUser(userCredentials: IUserLoginCredentials) {
    return this.http.post(LOGIN_USER_ROUTE, userCredentials);
  }

  getProjects() {
    return this.http.get(GET_ALL_PROJECT_ROUTE);
  }
}
