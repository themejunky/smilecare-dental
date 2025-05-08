import { Resend } from 'resend';

// This file should only be imported in server components or API routes
// as environment variables with RESEND_API_KEY are only available server-side

// Initialize Resend with API key from environment variables
export const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not defined in environment variables');
  }
  return new Resend(apiKey);
};

// Email configuration
export const getEmailConfig = () => ({
  // Use Resend's default onboarding domain which doesn't require verification
  fromEmail: process.env.FROM_EMAIL || 'onboarding@resend.dev',
  toEmail: process.env.TO_EMAIL || 'info@smilecare.com',
});

// Email templates
export const emailTemplates = {
  // Appointment notification email to dental office
  appointmentNotification: (name: string, phone: string, email: string, message: string) => {
    const config = getEmailConfig();
    return {
      from: config.fromEmail,
      to: [config.toEmail],
      subject: `New Appointment Request from ${name}`,
      replyTo: email,
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Message: ${message || 'No message provided'}
      `,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
      `
    };
  },

  // Confirmation email to patient
  appointmentConfirmation: (name: string, phone: string, email: string, message: string) => {
    const config = getEmailConfig();
    return {
      from: config.fromEmail,
      to: [email],
      subject: 'Your Appointment Request - SmileCare Dental',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="background-color: #1e40af; padding: 20px; text-align: center; color: white;">
            <h1 style="margin: 0;">SmileCare Dental</h1>
          </div>
          <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <h2>Thank You for Your Appointment Request</h2>
            <p>Dear ${name},</p>
            <p>We have received your appointment request and will contact you shortly to confirm your appointment time.</p>
            <p><strong>Your Details:</strong></p>
            <ul>
              <li>Name: ${name}</li>
              <li>Phone: ${phone}</li>
              <li>Email: ${email}</li>
              ${message ? `<li>Message: ${message}</li>` : ''}
            </ul>
            <p>If you need immediate assistance, please call us at <strong>0720.123.123</strong>.</p>
            <p>Thank you for choosing SmileCare Dental for your dental needs.</p>
            <p>Best regards,<br>SmileCare Dental Team</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 14px; color: #6b7280;">
            <p>Strada Maria Rosetti 26A, București 020487</p>
            <p>0720.123.123 | info@smilecare.com</p>
          </div>
        </div>
      `
    };
  }
};
