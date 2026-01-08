/*
  # Create registrations table for partner applications

  1. New Tables
    - `registrations`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text, unique)
      - `country` (text)
      - `city` (text)
      - `phone` (text)
      - `company_name` (text)
      - `business_type` (text)
      - `role` (text)
      - `experience` (text)
      - `countries` (text array for countries of interest)
      - `source` (text for how they heard about us)
      - `consent` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `registrations` table
    - Add policy for service role to manage all data
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text UNIQUE NOT NULL,
  country text NOT NULL,
  city text NOT NULL,
  phone text NOT NULL,
  company_name text NOT NULL,
  business_type text NOT NULL,
  role text NOT NULL,
  experience text NOT NULL,
  countries text[] NOT NULL DEFAULT '{}',
  source text NOT NULL,
  consent boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Policy for service role (backend operations)
CREATE POLICY "Service role can manage all registrations"
  ON registrations
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Policy for authenticated users to read their own data
CREATE POLICY "Users can read own registration"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_registrations_updated_at
  BEFORE UPDATE ON registrations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();