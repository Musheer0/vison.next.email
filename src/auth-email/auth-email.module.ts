import { Module } from '@nestjs/common';
import { AuthEmailService } from './auth-email.service';
import { AuthEmailController } from './auth-email.controller';
import { EmailService } from 'src/libs/email.service';

@Module({
  providers: [AuthEmailService,EmailService],
  controllers: [AuthEmailController],
  imports:[]
})
export class AuthEmailModule {}
