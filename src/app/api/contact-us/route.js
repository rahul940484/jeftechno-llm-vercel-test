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
        const { name, email, mobile } = body;
        
        if (!email || !name) {
            return NextResponse.json({ error: 'Name and Email are required' }, { status: 400 });
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeMobile = escapeHtml(mobile);

        const adminHtml = `
        <p>Hi JEF</p>
        <p>You have a new message from the contact form. Here are the details:</p>
        <p><strong>Name:</strong> ${safeName || 'Not Provided'}<br>
        <strong>Email:</strong> ${safeEmail || 'Not Provided'}<br>
        <strong>Phone Number:</strong> ${safeMobile || 'Not Provided'}</p>
        <p>Please review this message and respond as soon as possible.</p>
        <p>Regards,<br>
        JEF GROUP<br>
        Sales & Marketing</p>
      `;

        const autoReplyHtml = `
        <p>Hi ${safeName || 'Customer'},</p>
        <p>Thank you for contacting us! We’ve received your details and our team will get back to you shortly.</p>
        <p>We’ll do our best to respond within 1-2 business days. In the meantime, feel free to browse our website for more information.</p>
        <p>Regards,<br>
        JEF GROUP<br>
        Sales & Marketing</p>
      `;

        const senderEmail = process.env.BREVO_SMTP_USER || process.env.EMAIL || 'jeftechno.leads@gmail.com';
        const adminEmails = [senderEmail, 'jeftechno.india@gmail.com'];

        await Promise.all([
            sendBrevoEmail(adminEmails, 'Hello Jef, you have a Lead to get in touch! Hurry', adminHtml),
            sendBrevoEmail([email], 'JEF UAE IS READY TO GET IN TOUCH SHORTLY !', autoReplyHtml)
        ]);

        return NextResponse.json({ message: 'Form submission successful!' })
    } catch (error) {
        console.error('Email error:', error)
        return NextResponse.json({ error: 'Email sending failed' }, { status: 500 })
    }
}
