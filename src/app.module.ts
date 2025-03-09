import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestLedModule } from './test_led/test_led.module';

@Module({
  imports: [TestLedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
