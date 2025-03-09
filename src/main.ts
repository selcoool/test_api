import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cấu hình CORS (cho phép tất cả các nguồn)
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  });

  // Sử dụng WebSocket adapter (WsAdapter) thay vì IoAdapter
  app.useWebSocketAdapter(new WsAdapter(app));

  // Lắng nghe ở cổng 3000
  await app.listen(3000);
  console.log('Server is running at http://localhost:3000');
}

bootstrap();

