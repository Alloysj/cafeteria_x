import { NestFactory } from '@nestjs/core';
import { MenuModule } from './menu.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(MenuModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'menu_queue',
      queueOptions: { durable: false },
    },
  });
  await app.listen();
  console.log('Menu service is running...');
  console.log('Listening on queue: menu_queue');
}
bootstrap();