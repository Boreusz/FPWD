import { Test, TestingModule } from '@nestjs/testing';
import { BackController } from './back.controller';
import { BackService } from './back.service';

describe('BackController', () => {
  let backController: BackController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BackController],
      providers: [BackService],
    }).compile();

    backController = app.get<BackController>(BackController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(backController.getHello()).toBe('Hello World!');
    });
  });
});
