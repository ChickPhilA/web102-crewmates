import { createClient } from '@supabase/supabase-js'

const URL = 'https://sfcgrutniscbwsjobyvj.supabase.co'
const API_KEY = 'sb_publishable_1GzyTNJGYSqbrKOnGiiddA_YZiPMavQ'

export const supabase = createClient(URL, API_KEY) // creates a Supabase client that will connect to our project!!