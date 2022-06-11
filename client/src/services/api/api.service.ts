import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  GET_ALL_MY_PROJECT_ROUTE,
  GET_ALL_PROJECT_ROUTE,
  GET_PROJECTS_BY_QUERY_ROUTE,
  LOGIN_USER_ROUTE,
  POST_PROJECT_ROUTE,
  REGISTER_USER_ROUTE,
} from 'src/constants';
import {
  IProjectInput,
  IUserLoginCredentials,
  IUserRegisterInput,
} from 'types';

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

  getAllMyProjects() {
    return this.http.get(GET_ALL_MY_PROJECT_ROUTE, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }

  postProject(project: IProjectInput) {
    return this.http.post(POST_PROJECT_ROUTE, project, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }

  getProjectsByQuery(query: string) {
    return this.http.get(`${GET_PROJECTS_BY_QUERY_ROUTE}` + query);
  }

  registerUser(userCredentials: IUserRegisterInput) {
    return this.http.post(REGISTER_USER_ROUTE, userCredentials);
  }
}
