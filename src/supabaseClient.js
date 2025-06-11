import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://trpnctalegbqfgelkqjo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRycG5jdGFsZWdicWZnZWxrcWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NDEwMzAsImV4cCI6MjA2NTExNzAzMH0.Fni7J4uJfvTDRcfGFTeyx6J0CZ42dd4JRTfbzdpVigs'
export const supabase = createClient(supabaseUrl, supabaseKey)