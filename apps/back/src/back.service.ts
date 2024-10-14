import { Injectable } from '@nestjs/common';

@Injectable()
export class BackService {
  getHello(): string {
    return 'Hello World!';
  }
}
