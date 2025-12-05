import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";

// Contact form validation schema
const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone number must be less than 20 characters").optional().or(z.literal("")),
  organization: z.string().trim().min(1, "Organization name is required").max(100, "Organization name must be less than 100 characters"),
  role: z.string().min(1, "Please select your role"),
  inquiry: z.string().min(1, "Please select an inquiry type"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [role, setRole] = useState("");
  const [inquiry, setInquiry] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      organization: formData.get("organization") as string,
      role: role,
      inquiry: inquiry,
      message: formData.get("message") as string,
    };

    // Validate form data
    const result = contactFormSchema.safeParse(data);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      toast({
        title: "Validation Error",
        description: "Please check the form for errors.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission (replace with actual backend call when ready)
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    setRole("");
    setInquiry("");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-heading font-bold">
            Get in Touch
          </h1>
          <p className="text-2xl text-muted-foreground">
            Ready to transform respiratory care at your facility? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-bold mb-6">Request a Product Demo</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" placeholder="Sarah" maxLength={50} />
                      {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" placeholder="Thompson" maxLength={50} />
                      {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" placeholder="s.thompson@ltcfacility.ca" maxLength={255} />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(416) 555-0198" maxLength={20} />
                    {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization/Facility Name *</Label>
                    <Input id="organization" name="organization" placeholder="Toronto LTC Health Centre" maxLength={100} />
                    {errors.organization && <p className="text-sm text-destructive">{errors.organization}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role *</Label>
                    <Select value={role} onValueChange={setRole}>
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="administrator">Administrator</SelectItem>
                        <SelectItem value="medical-director">Medical Director</SelectItem>
                        <SelectItem value="director-of-care">Director of Care</SelectItem>
                        <SelectItem value="respiratory-therapist">Respiratory Therapist</SelectItem>
                        <SelectItem value="other-clinical">Other Clinical Role</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.role && <p className="text-sm text-destructive">{errors.role}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Inquiry Type *</Label>
                    <Select value={inquiry} onValueChange={setInquiry}>
                      <SelectTrigger id="inquiry">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Request a Demo</SelectItem>
                        <SelectItem value="pilot">Pilot Program Interest</SelectItem>
                        <SelectItem value="pricing">Pricing Information</SelectItem>
                        <SelectItem value="clinical">Clinical Questions</SelectItem>
                        <SelectItem value="press">Press/Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.inquiry && <p className="text-sm text-destructive">{errors.inquiry}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell us about your facility's respiratory care needs and current workflows..."
                      rows={5}
                      maxLength={2000}
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full hero-gradient border-0"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-5 w-5 ml-2" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you consent to be contacted by Atabazh Medical regarding Smart Lung Physio™ and agree to our privacy policy.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <Card className="shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold mb-1">Address</h3>
                          <p className="text-muted-foreground">
                            MaRS Discovery District<br />
                            101 College Street, Suite 200<br />
                            Toronto, ON M5G 1L7<br />
                            Canada
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold mb-1">Email</h3>
                          <p className="text-muted-foreground">
                            <a href="mailto:support@atabazh-med.com" className="hover:text-primary transition-smooth">
                              support@atabazh-med.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold mb-1">Phone</h3>
                          <p className="text-muted-foreground">
                            <a href="tel:+14375576846" className="hover:text-primary transition-smooth">
                              +1 (437) 557-6846
                            </a>
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Monday–Friday, 9 AM–5 PM EST
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="shadow-medium hero-gradient border-0 text-primary-foreground">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-heading font-bold">Enterprise Support</h3>
                  <p className="opacity-95">
                    Our team responds to all inquiries within one business day. For clinical questions, implementation support, or technical assistance, contact us by phone or email during business hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold mb-3">Schedule a Consultation</h3>
                  <p className="text-muted-foreground mb-4">
                    Book a time with our clinical team to discuss implementation, training, and integration with your facility's care protocols.
                  </p>
                  <Button variant="outline" className="w-full">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl font-heading font-bold">Have Questions?</h2>
          <p className="text-lg text-muted-foreground">
            Before reaching out, you might find answers in our comprehensive resources
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Button asChild variant="outline" size="lg">
              <a href="#">FAQ</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#" download>Product Brochure</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#" download>Clinical Evidence</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
