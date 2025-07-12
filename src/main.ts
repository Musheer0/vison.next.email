import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import 'dotenv/config'; // 🔥 This will finally load your .env

async function bootstrap() {
  console.log("ENV test:", process.env.API_KEY || "❌ ");

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,{
    transport:Transport.RMQ,
    options:{
      urls:['amqp://localhost:5672'],
      queue: 'email-queue',
      queueOptions:{
        durable:false
      }
    }
  });
  await app.listen();
}
bootstrap();
