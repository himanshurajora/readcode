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
import { JwtGuard } from '../auth/guards/jwt.guard';
import { JwtStrategy } from '../auth/strategy/jwt.strategy';
import { ProjectCreateDto } from './dto/project-create.dto';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  createProject(@Body() project: ProjectCreateDto, @Request() req: any) {
    return this.projectService.createProject(req.user.id, project as any);
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
