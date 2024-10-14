import { NestFactory } from '@nestjs/core';
import { BackModule } from './back.module';

async function bootstrap() {
  const app = await NestFactory.create(BackModule);
  await app.listen(3000);
}
bootstrap();
