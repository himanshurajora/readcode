import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/services/prisma.service';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

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

  async findUserById(id: number) {
    return await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  async getAllUsers() {
    return await this.prisma.user.findMany();
  }

  async getUserByUsername(username: string) {
    const { id } = await this.findIdByUsername(username);
    return await this.getUserDetails(id);
  }

  async addUser(user: Prisma.UserCreateInput) {
    return await this.prisma.user.create({
      data: user,
    });
  }

  async findOne(loginData: IUserLoginCredentials) {
    // find user by username or email
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ username: loginData.username }, { email: loginData.email }],
        password: loginData.password,
      },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    // TODO: Later Convert it to local strategy
    if (!user) {
      // wrong credentials
      throw new NotFoundException('User Not Found, with email or username');
    }
    return user;
  }
}
