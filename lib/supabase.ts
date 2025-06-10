import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// For client-side operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// It's important to note that NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
// must be correctly set in your .env.local file.
// If either is missing or malformed, this will cause issues.

// Ensure keys are not undefined before creating the client,
// though the '!' asserts they are non-null.
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL or Anon Key is missing. Check your .env.local file.");
}

export const supabase = createClientComponentClient({
  supabaseUrl,
  supabaseKey: supabaseAnonKey,
  // persistSession is true by default for createClientComponentClient,
  // so no need to explicitly set it.
});

// The initSupabase function and its call are removed as createClientComponentClient handles initialization. 