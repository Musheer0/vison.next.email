import { Injectable } from "@nestjs/common";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

@Injectable()
export class EmailService{
    private mailer:MailerSend;
    private sender:Sender
    constructor(){
        this.mailer= new MailerSend({ 
            apiKey: process.env.API_KEY!,
        });
        this.sender = new Sender(`vision.next@${process.env.EMAIL_DOMAIN!}`, 'vision.next')
    }
    async send(to:string, subject:string,html:string){
        const recipients = [
            new Recipient(to)
            ];
            const emailParams = new EmailParams()
            .setFrom(this.sender)
            .setTo(recipients)
            .setReplyTo(this.sender)
            .setSubject(subject)
            .setHtml(html)
            await this.mailer.email.send(emailParams);
    }
    async sendBulk(to:string[], subject:string,html:string){
        const recipients = to.map((reciver)=>new Recipient(reciver))
            const emailParams = new EmailParams()
            .setFrom(this.sender)
            .setTo(recipients)
            .setReplyTo(this.sender)
            .setSubject(subject)
            .setHtml(html)
            await this.mailer.email.send(emailParams);
    }
}