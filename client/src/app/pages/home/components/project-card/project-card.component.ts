import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'types';

@Component({
  selector: 'home-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.sass'],
})
export class ProjectCardComponent implements OnInit {
  constructor() {}
  @Input() projects!: IProject[];
  ngOnInit(): void {}
}
