import { Test, TestingModule } from '@nestjs/testing';
import { TestLedController } from './test_led.controller';

describe('TestLedController', () => {
  let controller: TestLedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestLedController],
    }).compile();

    controller = module.get<TestLedController>(TestLedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
