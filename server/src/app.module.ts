import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { ProjectModule } from './modules/project/project.module';
import CodeReaderModules from './modules';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './services/prisma.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
    }),
    PrismaModule,
    ...CodeReaderModules,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
