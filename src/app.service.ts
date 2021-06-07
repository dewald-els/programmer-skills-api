import { Injectable } from '@nestjs/common';
import { Skill } from './skill.model';
import MOCK_SKILLS from './skills.mock';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSkills(): Skill[] {
    return MOCK_SKILLS;
  }
}
