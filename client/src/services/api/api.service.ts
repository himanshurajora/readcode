import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GET_ALL_PROJECT_ROUTE } from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get(GET_ALL_PROJECT_ROUTE);
  }
}
