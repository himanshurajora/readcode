import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/services/prisma.service';
import { AuthModule } from '../auth/auth.module';
import { JwtStrategy } from '../auth/strategy/jwt.strategy';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

@Module({
  imports: [PassportModule],
  controllers: [ProjectController],
  providers: [ProjectService, UserService, JwtStrategy, JwtService],
})
export class ProjectModule {}
