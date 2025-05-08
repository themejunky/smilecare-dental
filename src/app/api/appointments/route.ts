import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

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

// This endpoint is deprecated - redirecting to the new /api/send endpoint
export async function POST(request: Request) {
  try {
    // Forward the request to the new endpoint
    const body = await request.json();
    
    // Log the request data for debugging
    console.log('Appointment request received, redirecting to /api/send:', body);
    
    // Create a new request to the /api/send endpoint
    const newRequest = new Request(`${request.url.replace('/api/appointments', '/api/send')}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    // Forward the request
    const response = await fetch(newRequest);
    const data = await response.json();
    
    return NextResponse.json(data, {
      status: response.status,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error('Server error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { 
        error: 'We&apos;re experiencing technical issues. Please call us at 0720.123.123 or email us at info@smilecare.com with your appointment request.',
        details: errorMessage 
      },
      { status: 500, headers: corsHeaders }
    );
  }
}
