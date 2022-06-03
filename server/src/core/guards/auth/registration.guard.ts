import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Observable } from 'rxjs';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class RegistrationGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.checkIfUserExists(request.body);
  }

  async checkIfUserExists(request: Prisma.UserCreateInput): Promise<boolean> {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ username: request.username }, { email: request.email }],
      },
    });
    if (user) {
      if (user.username === request.username) {
        throw new ForbiddenException('Username already exists');
      } else {
        throw new ForbiddenException('Email already exists');
      }
    }
    return true;
  }
}
