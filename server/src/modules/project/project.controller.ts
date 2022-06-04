import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { query } from 'express';
import { ProjectCreateDto } from './dto/project-create.dto';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Post('create')
  createProject(@Body() project: ProjectCreateDto) {
    return this.projectService.createProject(1, project as any);
  }

  @Get('all')
  getAllProjects() {
    return this.projectService.getAllProjects();
  }

  @Get('query')
  getProjectsByQuery(@Query('query') query: string) {
    return this.projectService.getProjectByQuery(query);
  }
}
