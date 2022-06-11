import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  PROJECT_CONTROLLER_ROUTE,
  PROJECT_CREATE_ROUTE,
  PROJECT_GET_ALL_ROUTE,
  PROJECT_GET_BY_ID,
  PROJECT_GET_BY_QUERY_ROUTE,
} from 'src/constants/api-routes.routes';
import { ProjectCreateDto } from './dto/project-create.dto';
import { ProjectService } from './project.service';

@Controller(PROJECT_CONTROLLER_ROUTE)
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post(PROJECT_CREATE_ROUTE)
  async createProject(@Body() project: ProjectCreateDto, @Request() req: any) {
    return await this.projectService.createProject(req.user.id, project as any);
  }

  @Get(PROJECT_GET_ALL_ROUTE)
  async getAllProjects() {
    return await this.projectService.getAllProjects();
  }

  @Get(PROJECT_GET_BY_QUERY_ROUTE)
  async getProjectsByQuery(@Query('query') query: string) {
    return await this.projectService.getProjectByQuery(query);
  }

  @Get(PROJECT_GET_BY_ID)
  async getProjectByID(@Param('id') id: number) {
    return await this.projectService.getProjectById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('all/my')
  async getAllMyProjects(@Request() req: any) {
    return await this.projectService.getProjectsByUserId(req.user.id);
  }
}
