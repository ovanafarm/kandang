import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dyholzqyltspnpbjkpsn.supabase.co'
const supabaseKey = 'sb_publishable_5dQRwThjCNLnL-Zsr6Jbig_bA3OrGf6'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
