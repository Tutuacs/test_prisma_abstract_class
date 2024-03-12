import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createHello(@Body() test: {test: string}) {
    return this.appService.createHello(Number(test.test));
  }

  @Post()
  createHello2(@Body() test: {test: string}) {
    return this.appService.createHello2(test.test);
  }

}
