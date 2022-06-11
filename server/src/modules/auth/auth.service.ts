import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async loginUser(user: IUserLoginCredentials) {
    const userData = await this.prisma.user.findFirst({
      where: {
        username: user.username,
        password: user.password,
      },
    });

    if (!userData) {
      throw new ForbiddenException('Invalid credentials');
    }

    return {
      ...{
        id: userData.id,
        name: userData.name,
        email: userData.email,
        username: userData.username,
        createdAt: userData.createdAt,
        updatedAt: userData.updatedAt,
      },
      token: await this.generateToken(userData),
    };
  }

  async createUser(user: Prisma.UserCreateInput) {
    return await this.prisma.user.create({
      data: user,
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  // TODO: Use config service here in the future
  async generateToken(user: IUserLoginOutput) {
    return await this.jwt.signAsync(user, {
      secret: 'the-secret-key',
    });
  }
}
