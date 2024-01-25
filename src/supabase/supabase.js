import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ldcogsugxnwslqfshhex.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkY29nc3VneG53c2xxZnNoaGV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxOTM2NzgsImV4cCI6MjAyMTc2OTY3OH0.1vpcvE8F5cEFlyZICbTwZA2Hp1XqprBlotLUeEXxJ7w"
);

export default supabase;
