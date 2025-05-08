import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Client for browser usage (uses anon key)
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for server-side operations (uses service role key)
// This should only be used in server-side contexts (API routes)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// Type for appointment data
export type AppointmentData = {
  id?: string;
  name: string;
  phone: string;
  email: string;
  message?: string;
  status?: string;
  created_at?: string;
};
