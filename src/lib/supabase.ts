import { createClient } from '@supabase/supabase-js';
import { VITE_SUPABASE_API_KEY, VITE_SUPABASE_URL } from 'src/const/env';
import { Database } from 'src/types/database.types';

export const supabase = createClient<Database>(VITE_SUPABASE_URL, VITE_SUPABASE_API_KEY);
