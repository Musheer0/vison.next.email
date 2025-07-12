import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/libs/email.service';
import { NotifyPasswordResetEmailTemplate } from 'src/templates/notify-reset-password.email';
import { ResetPasswordTemplate } from 'src/templates/send-reset-passwrd-code.email';
import { VerificationEmailTemplate } from 'src/templates/verify.email';

@Injectable()
export class AuthEmailService {
    constructor (private emailService:EmailService){}
    sendVerificationEmail({code , email}){
        const html = VerificationEmailTemplate(email, code);
        return this.emailService.send(email, 'Verifiy your email', html);
    }
    sendPasswordResetEmail({code ,email}){
        const html = ResetPasswordTemplate(email,code);
        return this.emailService.send(email,'Reset your password',html)
    }
    notifyPasswordReset(email:string){
              const html = NotifyPasswordResetEmailTemplate(email);
        return this.emailService.send(email,'Password changed ⚠️',html)
    }

}
