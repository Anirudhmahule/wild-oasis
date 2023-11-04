import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fyonkpcasbofpacjutjb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5b25rcGNhc2JvZnBhY2p1dGpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0NTQ0MTgsImV4cCI6MjAxMzAzMDQxOH0.CEHXSGzRxR-3B__P2wCz5v8hWBOJR-kf-X4M7xORBfo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
