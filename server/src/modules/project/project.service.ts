import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  // create methods
  async createProject(userId: number, project: Prisma.ProjectCreateInput) {
    return this.prisma.project.create({
      data: {
        title: project.title,
        description: project.description,
        link: project.link,
        userId: userId,
        tags: {
          connectOrCreate: (project.tags as string[]).map((tag) => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
      },
    });
  }

  // get methods
  async getAllProjects() {
    return await this.prisma.project.findMany({
      include: {
        tags: true,
        user: true,
      },
    });
  }

  async getProjectsByUserId(userId: number) {
    return await this.prisma.project.findMany({
      where: {
        userId,
      },
    });
  }

  async getProjectById(projectId: number) {
    return await this.prisma.project.findFirst({
      where: {
        id: projectId,
      },
    });
  }

  async getProjectByTag(tag: string) {
    return await this.prisma.project.findMany({
      where: {
        tags: {
          some: {
            name: tag,
          },
        },
      },
    });
  }

  async getProjectByName(title: string) {
    return await this.prisma.project.findMany({
      where: {
        title: {
          contains: title,
        },
      },
    });
  }

  async getProjectByQuery(query: string) {
    return await this.prisma.project.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
    });
  }
}
