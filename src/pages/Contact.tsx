import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";
import { z } from "zod";
import { ScrollReveal } from "@/components/ScrollReveal";

const CONTACT_EMAIL = "aliabedinpour16@gmail.com";
const CONTACT_FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

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

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Atabazh inquiry: ${result.data.inquiry}`,
          _template: "table",
          _captcha: "false",
          _replyto: result.data.email,
          "First Name": result.data.firstName,
          "Last Name": result.data.lastName,
          "Email Address": result.data.email,
          "Phone Number": result.data.phone || "Not provided",
          Organization: result.data.organization,
          Role: result.data.role,
          "Inquiry Type": result.data.inquiry,
          Message: result.data.message,
        }),
      });

      const submitResult = await response.json().catch(() => null);

      if (!response.ok || submitResult?.success === false) {
        if (import.meta.env.DEV) {
          console.error("Error submitting contact form:", submitResult);
        }
        throw new Error("Email submission failed");
      }

      toast({
        title: "Message Sent",
        description: `Thank you. Your message was sent to ${CONTACT_EMAIL}.`,
      });

      setRole("");
      setInquiry("");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Unexpected error:', error);
      }
      toast({
        title: "Submission Failed",
        description: `Please email us directly at ${CONTACT_EMAIL}.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Master Design System */}
      <section className="relative overflow-hidden py-16 pt-28 lg:py-32 lg:pt-32">
        {/* Soft blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,40%,98%)] via-[hsl(200,50%,95%)] to-[hsl(210,60%,90%)] z-0" />
        
        {/* Abstract wave pattern */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <svg className="absolute top-1/2 left-0 w-[200%] h-[400px] -translate-y-1/2 opacity-[0.06]" viewBox="0 0 1400 200" preserveAspectRatio="none">
            <path d="M0,100 C200,60 400,140 600,100 C800,60 1000,140 1200,100" stroke="hsl(200, 80%, 60%)" strokeWidth="3" fill="none" />
          </svg>
        </div>
        
        <div className="container mx-auto relative z-10 max-w-4xl space-y-4 px-6 text-center sm:px-8 lg:px-12 lg:space-y-6">
          <h1 className="text-4xl font-bold text-slate-800 animate-fade-in md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 animate-fade-in md:text-xl">
            We welcome inquiries from LTC operators, clinical partners, and healthcare innovation stakeholders.
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[5]" />
      </section>

      {/* Contact Form & Info - Unified styling */}
      <section className="px-6 py-14 sm:px-8 lg:px-12 lg:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              <Card className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl">
                <CardContent className="p-5 sm:p-8 lg:p-10">
                  <h2 className="mb-6 text-2xl font-bold text-slate-800 md:mb-8 md:text-3xl">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-slate-700">First Name *</Label>
                        <Input 
                          id="firstName" 
                          name="firstName" 
                          placeholder="Sarah" 
                          maxLength={50}
                          className="rounded-xl border-slate-200 focus:border-blue-400 focus:ring-blue-400/20"
                        />
                        {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-slate-700">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          name="lastName" 
                          placeholder="Thompson" 
                          maxLength={50}
                          className="rounded-xl border-slate-200 focus:border-blue-400 focus:ring-blue-400/20"
                        />
                        {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700">Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="s.thompson@example.com" 
                        maxLength={255}
                        className="rounded-xl border-slate-200 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        placeholder="(416) 555-0198" 
                        maxLength={20}
                        className="rounded-xl border-slate-200 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                      {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization" className="text-slate-700">Organization *</Label>
                      <Input 
                        id="organization" 
                        name="organization" 
                        placeholder="Organization name" 
                        maxLength={100}
                        className="rounded-xl border-slate-200 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                      {errors.organization && <p className="text-sm text-red-500">{errors.organization}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-slate-700">Your Role *</Label>
                      <Select value={role} onValueChange={setRole}>
                        <SelectTrigger id="role" className="rounded-xl border-slate-200">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="administrator">Administrator</SelectItem>
                          <SelectItem value="medical-director">Medical Director</SelectItem>
                          <SelectItem value="director-of-care">Director of Care</SelectItem>
                          <SelectItem value="respiratory-therapist">Respiratory Therapist</SelectItem>
                          <SelectItem value="clinical">Clinical Role</SelectItem>
                          <SelectItem value="investor">Investor</SelectItem>
                          <SelectItem value="partner">Partner/Vendor</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.role && <p className="text-sm text-red-500">{errors.role}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiry" className="text-slate-700">Inquiry Type *</Label>
                      <Select value={inquiry} onValueChange={setInquiry}>
                        <SelectTrigger id="inquiry" className="rounded-xl border-slate-200">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="pilot">Pilot Discussion</SelectItem>
                          <SelectItem value="clinical">Clinical Questions</SelectItem>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="press">Press/Media</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.inquiry && <p className="text-sm text-red-500">{errors.inquiry}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-700">Message *</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        placeholder="How can we help?"
                        rows={5}
                        maxLength={2000}
                        className="rounded-xl border-slate-200 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                      {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full rounded-full py-6 h-auto bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="h-5 w-5 ml-2" />
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                      By submitting, you consent to be contacted by Atabazh Medical Inc. regarding your inquiry.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">Contact Information</h2>
                  <div className="space-y-4">
                    {[
                      {
                        icon: MapPin,
                        title: "Address",
                        content: (
                          <p className="text-sm text-slate-600">
                            MaRS Discovery District<br />
                            101 College Street, Suite 200<br />
                            Toronto, ON M5G 1L7<br />
                            Canada
                          </p>
                        )
                      },
                      {
                        icon: Mail,
                        title: "Email",
                        content: (
                          <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                            {CONTACT_EMAIL}
                          </a>
                        )
                      },
                      {
                        icon: Phone,
                        title: "Phone",
                        content: (
                          <>
                            <a href="tel:+14375576846" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                              +1 (437) 557-6846
                            </a>
                            <p className="text-xs text-slate-500 mt-1">Monday–Friday, 9 AM–5 PM EST</p>
                          </>
                        )
                      },
                      {
                        icon: Linkedin,
                        title: "LinkedIn",
                        content: (
                          <a 
                            href="https://www.linkedin.com/company/atabazh-medical-inc" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                          >
                            Atabazh Medical Inc.
                          </a>
                        )
                      }
                    ].map((item, index) => (
                      <Card key={index} className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-lg shadow-slate-900/5 rounded-2xl">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/30">
                              <item.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-800 mb-1">{item.title}</h3>
                              {item.content}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <Card className="bg-gradient-to-br from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] text-white rounded-2xl shadow-xl">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold">Response Time</h3>
                    <p className="text-sm opacity-90">
                      We aim to respond to all inquiries within one business day. For clinical questions or partnership discussions, please include relevant context in your message.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
