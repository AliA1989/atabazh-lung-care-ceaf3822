-- Create contact_submissions table for storing contact form data
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  organization TEXT NOT NULL,
  role TEXT NOT NULL,
  inquiry TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert contact submissions (public form)
CREATE POLICY "Allow public insert" 
ON public.contact_submissions 
FOR INSERT 
TO anon
WITH CHECK (true);

-- No SELECT policy means submissions cannot be read by anonymous users
-- Admin access would need to be added separately via service role or authenticated admin users