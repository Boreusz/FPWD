import { Controller, Get } from '@nestjs/common';
import { BackService } from './back.service';

@Controller()
export class BackController {
  constructor(private readonly backService: BackService) {}

  @Get()
  getHello(): string {
    return this.backService.getHello();
  }
}
