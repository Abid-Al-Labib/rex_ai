import { createClient } from '@supabase/supabase-js'

const project_url = 'https://vfoxprqlngfuvmdirlqp.supabase.co'
const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmb3hwcnFsbmdmdXZtZGlybHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3MDU3MDYsImV4cCI6MjA1ODI4MTcwNn0.jjWUKcfiUGE4en0al2vmmkWFdNxgZRfXUwLbAt2eqn4"
const supabase_client = createClient(project_url, anon_key)

export { supabase_client }
          