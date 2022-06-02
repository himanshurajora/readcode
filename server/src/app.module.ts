import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { ProjectModule } from './modules/project/project.module';
import CodeReaderModules from './modules';
@Module({
  imports: [...CodeReaderModules],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
