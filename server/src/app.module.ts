import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma.service';
import CodeReaderModules from './modules';
@Module({
  imports: [...CodeReaderModules],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
