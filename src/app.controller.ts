import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('HANDSOME_HAO') private readonly handsome_man: string,
  ) {
    console.log(this.handsome_man);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
