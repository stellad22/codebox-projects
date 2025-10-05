import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://bzbakzhzrcukkfbqruro.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6YmFremh6cmN1a2tmYnFydXJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MTY0MDgsImV4cCI6MjA3NTE5MjQwOH0.-8kdsyM5xsjMCHwg1p0UlwFhUkhNGr-lqbBlheiM2XM"
)

export default supabase

let { data, error } = await supabase.from("users").select("*")