import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api/api.service';
import { IProjectFormInput, IProjectInput } from 'types';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.sass'],
})
export class AddProjectDialogComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  fruits: string[] = ['Lemon'];

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  addProject(value: IProjectFormInput) {
    // prepare tags
    const tags = value.tags.split(',');
    // trim tags
    tags.forEach((tag, index) => {
      tags[index] = tag.trim();
    });

    // prepare project
    const project = {
      title: value.title,
      description: value.description,
      link: value.link,
      tags: tags,
    };

    this.apiService.postProject(project).subscribe(
      (data) => {
        window.location.reload();
      },
      (error) => {
        alert(
          'The is an Error:  ' + error?.message || 'Unknown Error'
        );
      }
    );
  }

  ngOnInit(): void {}
}
