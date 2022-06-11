import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api/api.service';
import { IProject } from 'types';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProjectDialogComponent } from './components/add-project-dialog/add-project-dialog.component';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private matDialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(AddProjectDialogComponent, dialogConfig);
  }

  projects!: IProject[];
  ngOnInit(): void {
    this.apiService.getAllMyProjects().subscribe((data) => {
      this.projects = data as IProject[];
    });
  }
}
