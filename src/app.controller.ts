import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Skill } from './skill.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/skills')
  getSkills(): Skill[] {
    return this.appService.getSkills();
  }
}
