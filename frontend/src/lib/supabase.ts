import { createClient } from "@supabase/supabase-js";

// read both VITE url and keys
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// create the supabase client and export it
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
