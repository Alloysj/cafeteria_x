
import { NestFactory } from '@nestjs/core';
import { PaymentsModule } from './payments.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(PaymentsModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'payments_queue',
      queueOptions: { durable: false },
    },
  

  });
  await app.listen();
  console.log('Payments service is running...');
  console.log('Listening on queue: payments_queue');
}
bootstrap();