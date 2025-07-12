const template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Reset Password</title>
    <style>
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
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td align="center" style="padding: 40px 40px 20px 40px;">
                            <div style="width: 60px; height: 60px; background-color: #ef4444; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 6H21M9 6V4C9 2.89543 9.89543 2 11 2H13C14.1046 2 15 2.89543 15 4V6M19 6V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V6H19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h1 style="margin: 0; color: #1f2937; font-size: 28px; font-weight: bold;">Reset Your Password</h1>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 0 40px 30px 40px;">
                            <p style="margin: 0 0 20px 0; color: #6b7280; font-size: 16px; line-height: 1.5;">
                                Hi there,
                            </p>
                            <p style="margin: 0 0 20px 0; color: #6b7280; font-size: 16px; line-height: 1.5;">
                                We received a request to reset the password for your account <strong style="color: #1f2937;">{{email}}</strong>.
                                Use the code below to reset your password:
                            </p>
                        </td>
                    </tr>

                    <!-- Reset Code -->
                    <tr>
                        <td align="center" style="padding: 0 40px 30px 40px;">
                            <div style="background-color: #fef2f2; border: 2px dashed #fecaca; border-radius: 8px; padding: 30px; margin: 20px 0;">
                                <p style="margin: 0 0 10px 0; color: #dc2626; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
                                    Reset Code
                                </p>
                                <div style="font-size: 32px; font-weight: bold; color: #1f2937; letter-spacing: 4px; font-family: 'Courier New', monospace;">
                                    {{code}}
                                </div>
                                <p style="margin: 10px 0 0 0; color: #9ca3af; font-size: 12px;">
                                    This code is valid for 10 minutes
                                </p>
                            </div>
                        </td>
                    </tr>

                    <!-- Instructions -->
                    <tr>
                        <td style="padding: 0 40px 30px 40px;">
                            <p style="margin: 0 0 20px 0; color: #6b7280; font-size: 16px; line-height: 1.5;">
                                Enter this code in the password reset form on our site to proceed. If you didn’t request a password reset, you can safely ignore this email.
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
                                This email was sent to {{email}}. If you didn’t request this, no action is needed.
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
`;

export const ResetPasswordTemplate = ( userEmail:string,verificationCode:string)=> template
  .replace('{{email}}', userEmail)
  .replace('{{code}}', verificationCode)