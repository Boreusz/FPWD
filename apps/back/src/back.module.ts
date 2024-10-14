import { Module } from '@nestjs/common';
import { BackController } from './back.controller';
import { BackService } from './back.service';

@Module({
  imports: [],
  controllers: [BackController],
  providers: [BackService],
})
export class BackModule {}
