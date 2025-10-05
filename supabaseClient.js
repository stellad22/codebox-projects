import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://bwrscaeinentewebsbes.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3cnNjYWVpbmVudGV3ZWJzYmVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2OTkyNTcsImV4cCI6MjA3NTI3NTI1N30.LdulP0Iohxlk0pr7ArEdiqI7c6VSUVKQhGSUgNpOhns"
)

export default supabase

let { data, error } = await supabase.from("users").select("*")