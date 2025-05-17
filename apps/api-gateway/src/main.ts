import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  app.enableCors({
    origin: 'http://localhost:5173', // allow frontend origin
    credentials: true,
  });
  await app.listen(process.env.port ?? 3002);
  console.log('API Gateway is running...');
  console.log('Listening on port: ', process.env.port ?? 3002);
}
bootstrap();
