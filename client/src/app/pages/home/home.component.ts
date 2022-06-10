import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api/api.service';
import { IProject } from 'types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  projects!: IProject[];
  ngOnInit(): void {
    this.apiService.getProjects().subscribe((data) => {
      this.projects = data as IProject[];
    });
  }
}
