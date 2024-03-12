import { Test } from '@prisma/client';
import { TestRepository } from './test-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrismaTestRepository implements TestRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getTest(id: number): Promise<Test> {
    return await this.prisma.test.findUnique({
      where: {
        id,
      },
    });
  }

  async createTest(test: string): Promise<Test> {
    return await this.prisma.test.create({
      data: {
        test: test,
      },
    });
  }
}
