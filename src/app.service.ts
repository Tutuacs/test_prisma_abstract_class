import { Injectable } from '@nestjs/common';
import { TestRepository } from './repositories/test-repository';

@Injectable()
export class AppService {
  
  constructor(private readonly testRepository: TestRepository) {}
  
  getHello(): string {
    return 'Hello World!';
  }

  createHello(id: number) {
    return this.testRepository.getTest(id);
  }

  createHello2(test: string) {
    return this.testRepository.createTest(test);
  }

}
