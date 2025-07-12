import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AuthEmailService } from './auth-email.service';

@Controller('auth-email')
export class AuthEmailController {
    constructor(private emailService:AuthEmailService){}
    @EventPattern('verify.email')
    handleVerificationEmail(@Payload() data){
        return this.emailService.sendVerificationEmail(data)
    }
    @EventPattern('notify.password')
    handleNotifyPassword(@Payload() data){
        return this.emailService.notifyPasswordReset(data)
    }
    @EventPattern('verify.password')
    handleResetPassword(@Payload()data){
        return this.emailService.sendPasswordResetEmail(data);
    }
}
