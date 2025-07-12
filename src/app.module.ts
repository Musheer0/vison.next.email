import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthEmailModule } from './auth-email/auth-email.module';

@Module({
  imports: [AuthEmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
