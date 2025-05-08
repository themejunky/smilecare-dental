import { NextResponse } from 'next/server';
import { supabaseAdmin, type AppointmentData } from '@/utils/supabase';

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

    // Prepare appointment data
    const appointmentData: AppointmentData = {
      name,
      phone,
      email,
      message: message || '',
      status: 'new',
      created_at: new Date().toISOString(),
    };

    // Store appointment in Supabase
    const { data, error } = await supabaseAdmin
      .from('appointments')
      .insert([appointmentData])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { 
          error: 'Failed to save appointment', 
          details: error.message,
          hint: 'Please check Supabase connection and environment variables'
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
