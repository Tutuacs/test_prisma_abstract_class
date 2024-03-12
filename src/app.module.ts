import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { TestRepository } from './repositories/test-repository';
import { PrismaTestRepository } from './repositories/prisma-test-repository';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: TestRepository,
      useClass: PrismaTestRepository,
    },
  ],
})
export class AppModule {}
