/*
  # Fix Registration RLS Policy

  1. Security Changes
    - Add policy to allow anonymous users to insert registrations
    - Keep existing policies for reading own data
    - Maintain service role access for admin functions

  This allows the registration form to work directly with Supabase
  without requiring a backend server.
*/

-- Drop existing restrictive policies if they exist
DROP POLICY IF EXISTS "Users can read own registration" ON registrations;
DROP POLICY IF EXISTS "Service role can manage all registrations" ON registrations;

-- Allow anonymous users to insert new registrations
CREATE POLICY "Allow anonymous registration insertions"
  ON registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read their own registrations
CREATE POLICY "Users can read own registration"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);

-- Allow service role to manage all registrations (for admin purposes)
CREATE POLICY "Service role can manage all registrations"
  ON registrations
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);