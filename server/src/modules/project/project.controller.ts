import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Prisma } from '@prisma/client';
import { query } from 'express';
import {
  PROJECT_CONTROLLER_ROUTE,
  PROJECT_CREATE_ROUTE,
  PROJECT_GET_ALL_ROUTE,
  PROJECT_GET_BY_QUERY_ROUTE,
} from 'src/constants/api-routes.routes';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { JwtStrategy } from '../auth/strategy/jwt.strategy';
import { ProjectCreateDto } from './dto/project-create.dto';
import { ProjectService } from './project.service';

@Controller(PROJECT_CONTROLLER_ROUTE)
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post(PROJECT_CREATE_ROUTE)
  createProject(@Body() project: ProjectCreateDto, @Request() req: any) {
    return this.projectService.createProject(req.user.id, project as any);
  }

  @Get(PROJECT_GET_ALL_ROUTE)
  getAllProjects() {
    return this.projectService.getAllProjects();
  }

  @Get(PROJECT_GET_BY_QUERY_ROUTE)
  getProjectsByQuery(@Query('query') query: string) {
    return this.projectService.getProjectByQuery(query);
  }
}
