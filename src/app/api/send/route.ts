import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Set CORS headers for the API route
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { name, phone, email, message } = await request.json();

    // Log the request data for debugging
    console.log('Appointment request received:', { name, phone, email });

    // Validate required fields
    if (!name || !phone || !email) {
      console.error('Validation error: Missing required fields');
      return NextResponse.json(
        { error: 'Name, phone, and email are required fields' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Initialize Resend client directly
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Create HTML content for the email
    const htmlContent = `
      <h2>New Appointment Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message || 'No message provided'}</p>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [process.env.TO_EMAIL || 'deus_073@yahoo.com'],
      subject: `New Appointment Request from ${name}`,
      html: htmlContent,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message || 'No message provided'}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { 
          error: 'Failed to send appointment request', 
          details: error.message,
        },
        { status: 500, headers: corsHeaders }
      );
    }

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Appointment request received', data },
      { status: 201, headers: corsHeaders }
    );
  } catch (error) {
    console.error('Server error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { 
        error: 'We\'re experiencing technical issues. Please call us at 0720.123.123 or email us at info@smilecare.com with your appointment request.',
        details: errorMessage 
      },
      { status: 500, headers: corsHeaders }
    );
  }
}
