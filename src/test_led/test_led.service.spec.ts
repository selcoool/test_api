import { Test, TestingModule } from '@nestjs/testing';
import { TestLedService } from './test_led.service';

describe('TestLedService', () => {
  let service: TestLedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestLedService],
    }).compile();

    service = module.get<TestLedService>(TestLedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
