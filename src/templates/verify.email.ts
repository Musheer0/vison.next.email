const template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        /* Reset styles for email clients */
        body, table, td, p, a, li, blockquote {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <!-- Main container -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td align="center" style="padding: 40px 40px 20px 40px;">
                            <div style="width: 60px; height: 60px; background-color: #3b82f6; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h1 style="margin: 0; color: #1f2937; font-size: 28px; font-weight: bold; line-height: 1.2;">
                                Verify Your Email Address
                            </h1>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 0 40px 30px 40px;">
                            <p style="margin: 0 0 20px 0; color: #6b7280; font-size: 16px; line-height: 1.5;">
                                Hi there,
                            </p>
                            <p style="margin: 0 0 20px 0; color: #6b7280; font-size: 16px; line-height: 1.5;">
                                Thank you for signing up! To complete your registration, please verify your email address <strong style="color: #1f2937;">{{email}}</strong> by entering the verification code below:
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Verification Code -->
                    <tr>
                        <td align="center" style="padding: 0 40px 30px 40px;">
                            <div style="background-color: #f9fafb; border: 2px dashed #d1d5db; border-radius: 8px; padding: 30px; margin: 20px 0;">
                                <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
                                    Verification Code
                                </p>
                                <div style="font-size: 32px; font-weight: bold; color: #1f2937; letter-spacing: 4px; font-family: 'Courier New', monospace;">
                                    {{code}}
                                </div>
                                <p style="margin: 10px 0 0 0; color: #9ca3af; font-size: 12px;">
                                    This code expires in 10 minutes
                                </p>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Instructions -->
                    <tr>
                        <td style="padding: 0 40px 30px 40px;">
                            <p style="margin: 0 0 20px 0; color: #6b7280; font-size: 16px; line-height: 1.5;">
                                Simply copy and paste this code into the verification field on our website to activate your account.
                            </p>
                            <p style="margin: 0 0 20px 0; color: #6b7280; font-size: 16px; line-height: 1.5;">
                                If you didn't create an account with us, please ignore this email.
                            </p>
                        </td>
                    </tr>
                    
                   
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px 40px; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0 0 10px 0; color: #9ca3af; font-size: 14px; line-height: 1.4;">
                                Need help? Contact our support team at 
                                <a href="mailto:support@yourcompany.com" style="color: #3b82f6; text-decoration: none;">support@yourcompany.com</a>
                            </p>
                            <p style="margin: 0; color: #9ca3af; font-size: 12px; line-height: 1.4;">
                                This email was sent to {{email}}. If you no longer wish to receive these emails, you can 
                                <a href="#" style="color: #3b82f6; text-decoration: none;">unsubscribe here</a>.
                            </p>
                            <p style="margin: 15px 0 0 0; color: #9ca3af; font-size: 12px;">
                                © 2024 Your Company Name. All rights reserved.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`

export const VerificationEmailTemplate = ( userEmail:string,verificationCode:string)=> template
  .replace('{{email}}', userEmail)
  .replace(/{{code}}/g, verificationCode)