import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://lsspdaurmemcxyqdyofu.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxzc3BkYXVybWVtY3h5cWR5b2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MDQ3NTQsImV4cCI6MjA0MTQ4MDc1NH0.qZbkHcQKek2J-Zl6VsLRBbCsLFaUqxYxaQGVtfsvu_A"
);

export default supabase;
