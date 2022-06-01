import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUserDetails(id: number) {
    return await this.prisma.user.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        projects: {
          // take only top 5 projects by views
          select: {
            title: true,
          },
          take: 5,
          orderBy: {
            views: 'desc',
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findIdByUsername(username: string) {
    return await this.prisma.user.findFirst({
      where: {
        username,
      },
      select: {
        id: true,
      },
    });
  }

  async createUser(user: Prisma.UserCreateInput) {
    return await this.prisma.user.create({
      data: user,
    });
  }

  async getAllUsers() {
    return await this.prisma.user.findMany();
  }

  async getUserByUsername(username: string) {
    const { id } = await this.findIdByUsername(username);
    return await this.getUserDetails(id);
  }
}
