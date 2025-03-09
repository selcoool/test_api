import { Module } from '@nestjs/common';
import { TestLedController } from './test_led.controller';
import { TestLedService } from './test_led.service';
import { AppGateway } from './gateway';

@Module({
  controllers: [TestLedController],
  providers: [TestLedService,AppGateway]
})
export class TestLedModule {}
