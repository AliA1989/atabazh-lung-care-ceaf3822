-- Drop the existing overly permissive INSERT policy
DROP POLICY IF EXISTS "Allow public insert" ON public.contact_submissions;

-- Create a more secure INSERT policy that still allows public contact form submissions
-- but validates that required fields are provided (not just "true")
CREATE POLICY "Allow public contact form submissions"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  first_name IS NOT NULL AND 
  last_name IS NOT NULL AND 
  email IS NOT NULL AND 
  organization IS NOT NULL AND 
  role IS NOT NULL AND 
  inquiry IS NOT NULL AND 
  message IS NOT NULL
);

-- Explicitly deny SELECT access to protect customer PII
-- Only backend/edge functions with service role can read this data
CREATE POLICY "Deny public read access"
ON public.contact_submissions
FOR SELECT
USING (false);

-- Deny UPDATE access
CREATE POLICY "Deny update access"
ON public.contact_submissions
FOR UPDATE
USING (false);

-- Deny DELETE access  
CREATE POLICY "Deny delete access"
ON public.contact_submissions
FOR DELETE
USING (false);