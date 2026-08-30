/**
 * Supabase Client Initialization
 *
 * Setup: Create a project at https://supabase.com
 * Project Settings → API → Copy URL and anon key
 * Add them as GitHub Secrets: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const SUPABASE_ENABLED =
  Boolean(supabaseUrl && supabaseAnonKey) &&
  !supabaseUrl!.includes("YOUR_") &&
  !supabaseAnonKey!.includes("YOUR_");

export const supabase: SupabaseClient | null = SUPABASE_ENABLED
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;
