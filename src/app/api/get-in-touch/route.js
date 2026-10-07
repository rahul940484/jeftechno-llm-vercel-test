import { NextResponse } from 'next/server'

const escapeHtml = (unsafe) => {
    if (typeof unsafe !== 'string') return '';
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

const sendBrevoEmail = async (toEmails, subject, htmlContent) => {
    const apiKey = process.env.BREVO_SMTP_KEY || process.env.PASSWORD;
    const senderEmail = process.env.BREVO_SMTP_USER || process.env.EMAIL || 'jeftechno.leads@gmail.com';

    const payload = {
        sender: { name: "JEF GROUP", email: senderEmail },
        to: toEmails.map(email => ({ email: email.trim() })),
        subject: subject,
        htmlContent: htmlContent
    };

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
            "api-key": apiKey,
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Brevo API Error: ${JSON.stringify(errorData)}`);
    }
    return response.json();
};

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch (e) {
        return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
    }

    try {
        const { name, email, mobile, companyName, message, captchaToken } = body;
        
        if (!email || !name) {
            return NextResponse.json({ error: 'Name and Email are required' }, { status: 400 });
        }

        if (!captchaToken) {
            return NextResponse.json({ error: 'Captcha token is required' }, { status: 400 });
        }

        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;
        const verifyResponse = await fetch(verifyUrl, { method: "POST" });
        const verifyData = await verifyResponse.json();

        if (!verifyData.success) {
            return NextResponse.json({ error: 'Captcha verification failed' }, { status: 400 });
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeMobile = escapeHtml(mobile);
        const safeCompanyName = escapeHtml(companyName);
        const safeMessage = escapeHtml(message);

        const adminHtml = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <div style="background-color: #FF0000; padding: 20px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">New Lead Alert</h1>
  </div>
  <div style="padding: 30px; background-color: #ffffff;">
    <p style="font-size: 16px; color: #333333; margin-top: 0;">Hello <strong>Team JEF</strong>,</p>
    <p style="font-size: 16px; color: #555555; line-height: 1.5;">You have received a new inquiry from the website's Get in Touch form. Please review the details below:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 25px 0;">
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #333333; width: 140px;">Name:</td>
        <td style="padding: 12px; border-bottom: 1px solid #eeeeee; color: #555555;">${safeName || 'Not Provided'}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #333333;">Email:</td>
        <td style="padding: 12px; border-bottom: 1px solid #eeeeee; color: #555555;"><a href="mailto:${safeEmail}" style="color: #FF0000; text-decoration: none;">${safeEmail || 'Not Provided'}</a></td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #333333;">Phone:</td>
        <td style="padding: 12px; border-bottom: 1px solid #eeeeee; color: #555555;">${safeMobile || 'Not Provided'}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #333333;">Company:</td>
        <td style="padding: 12px; border-bottom: 1px solid #eeeeee; color: #555555;">${safeCompanyName || 'Not Provided'}</td>
      </tr>
      <tr>
        <td style="padding: 12px; font-weight: bold; color: #333333; vertical-align: top;">Query:</td>
        <td style="padding: 12px; color: #555555; background-color: #f9f9f9; border-radius: 4px; border: 1px solid #eeeeee;">${safeMessage || 'Not Provided'}</td>
      </tr>
    </table>
    
    <div style="text-align: center; margin-top: 30px;">
      <a href="mailto:${safeEmail}" style="background-color: #FF0000; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">Reply to Lead</a>
    </div>
  </div>
  <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #888888;">
    <p style="margin: 0;">This is an automated message from the JEF Techno Website Notification System.</p>
  </div>
</div>
        `;

        const autoReplyHtml = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <div style="background-color: #FF0000; padding: 30px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 28px; letter-spacing: 2px; text-transform: uppercase;">Thank You</h1>
    <p style="color: #ffcccc; margin: 10px 0 0 0; font-size: 16px;">We have received your message</p>
  </div>
  <div style="padding: 30px; background-color: #ffffff;">
    <p style="font-size: 16px; color: #333333; margin-top: 0;">Dear <strong>${safeName || 'Customer'}</strong>,</p>
    <p style="font-size: 16px; color: #555555; line-height: 1.6;">Thank you for reaching out to us. We have successfully received your inquiry.</p>
    <p style="font-size: 16px; color: #555555; line-height: 1.6;">Our team is currently reviewing your details and one of our experts will get in touch with you shortly to discuss how we can help bring your vision to life.</p>
    
    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; border-left: 4px solid #FF0000; margin: 25px 0;">
      <p style="margin: 0 0 10px 0; font-weight: bold; color: #333333;">Need immediate assistance?</p>
      <p style="margin: 5px 0; color: #555555;">📞 <strong>Phone:</strong> +91 080 37569000</p>
      <p style="margin: 5px 0; color: #555555;">📧 <strong>Email:</strong> <a href="mailto:marketing@jeftechno.com" style="color: #FF0000; text-decoration: none;">marketing@jeftechno.com</a></p>
    </div>
    
    <p style="font-size: 16px; color: #555555; line-height: 1.6;">We appreciate your interest in JEF Techno Solutions and look forward to assisting you.</p>
    
    <div style="margin-top: 30px;">
      <p style="margin: 0; font-size: 16px; color: #333333; font-weight: bold;">Warm Regards,</p>
      <p style="margin: 5px 0 0 0; font-size: 16px; color: #FF0000; font-weight: bold;">Team JEF Techno</p>
    </div>
  </div>
  <div style="background-color: #232427; padding: 20px; text-align: center; color: #ffffff;">
    <p style="margin: 0; font-size: 12px; color: #aaaaaa;">&copy; ${new Date().getFullYear()} JEF Techno Solutions Pvt Ltd. All rights reserved.</p>
  </div>
</div>
        `;

        await Promise.all([
            sendBrevoEmail(['marketing@jeftechno.com'], 'New Lead Alert: Get In Touch Inquiry', adminHtml),
            sendBrevoEmail([email], 'Thank you for reaching out to JEF Techno!', autoReplyHtml)
        ]);

        return NextResponse.json({ message: 'Form submission successful!' })
    } catch (error) {
        console.error('Email error:', error)
        return NextResponse.json({ error: 'Email sending failed' }, { status: 500 })
    }
}
