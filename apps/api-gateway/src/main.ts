import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  await app.listen(process.env.port ?? 3002);
  console.log('API Gateway is running...');
  console.log('Listening on port: ', process.env.port ?? 3002);
}
bootstrap();
