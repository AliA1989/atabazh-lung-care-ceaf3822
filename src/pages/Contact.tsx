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
import { NavLink } from "@/components/NavLink";

const PUBLIC_CONTACT_EMAIL = "support@atabazh-med.com";

const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone number must be less than 20 characters").optional().or(z.literal("")),
  organization: z.string().trim().min(1, "Organization name is required").max(100, "Organization name must be less than 100 characters"),
  role: z.string().min(1, "Please select your role"),
  inquiry: z.string().min(1, "Please select an inquiry type"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
  privacyAccepted: z.boolean().refine((value) => value, "Please confirm that you have read the Privacy Policy"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [role, setRole] = useState("");
  const [inquiry, setInquiry] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const honeypot = String(formData.get("_honey") ?? "").trim();

    if (honeypot) {
      toast({ title: "Message Sent", description: "Thank you. Your inquiry has been received." });
      e.currentTarget.reset();
      setIsSubmitting(false);
      return;
    }

    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      organization: formData.get("organization") as string,
      role: role,
      inquiry: inquiry,
      message: formData.get("message") as string,
      privacyAccepted: formData.get("privacyAccepted") === "on",
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

    const subject = `Atabazh inquiry: ${result.data.inquiry}`;
    const body = [
      `Name: ${result.data.firstName} ${result.data.lastName}`,
      `Organization: ${result.data.organization}`,
      `Role: ${result.data.role}`,
      `Email: ${result.data.email}`,
      `Phone: ${result.data.phone || "Not provided"}`,
      `Inquiry type: ${result.data.inquiry}`,
      "",
      result.data.message,
    ].join("\n");

    window.location.href = `mailto:${PUBLIC_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitting(false);
    toast({
      title: "Email Draft Prepared",
      description: `Review and send the message from your email app to ${PUBLIC_CONTACT_EMAIL}.`,
    });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-950">
      {/* Hero Section - Master Design System */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f8fafc] px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-36">
        {/* Soft blue gradient background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />
        
        {/* Abstract wave pattern */}
        <div className="hidden">
          <svg className="absolute top-1/2 left-0 w-[200%] h-[400px] -translate-y-1/2 opacity-[0.06]" viewBox="0 0 1400 200" preserveAspectRatio="none">
            <path d="M0,100 C200,60 400,140 600,100 C800,60 1000,140 1200,100" stroke="hsl(200, 80%, 60%)" strokeWidth="3" fill="none" />
          </svg>
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl space-y-4 text-center lg:space-y-6">
          <h1 className="text-4xl font-bold leading-[1.06] tracking-[-0.05em] text-slate-950 animate-fade-in md:text-5xl lg:text-[3.6rem]">
            Discuss Pilot Fit or Collaboration
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 animate-fade-in md:text-xl">
            We welcome inquiries from LTC operators, clinical partners, rehabilitation and respiratory-care stakeholders, grant reviewers, investors, and healthcare innovation teams.
          </p>
        </div>
        
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/50 to-transparent" />
      </section>

      {/* Contact Form & Info - Unified styling */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <CardContent className="p-5 sm:p-8 lg:p-10">
                  <h2 className="mb-6 text-2xl font-bold text-slate-800 md:mb-8 md:text-3xl">Send a Collaboration Inquiry</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
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
                        placeholder="Tell us about your care setting, collaboration interest, or pilot-readiness question."
                        rows={5}
                        maxLength={2000}
                        className="rounded-xl border-slate-200 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                      {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                      <p className="text-xs leading-relaxed text-slate-500">
                        Do not include patient names, health-card numbers, medical records, or other identifiable health information.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                        <input
                          type="checkbox"
                          name="privacyAccepted"
                          className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-600"
                        />
                        <span>
                          I have read the <NavLink to="/privacy" className="font-semibold text-blue-700 underline underline-offset-4">Privacy Policy</NavLink> and consent to Atabazh Medical using my information to respond to this inquiry.
                        </span>
                      </label>
                      {errors.privacyAccepted && <p className="text-sm text-red-500">{errors.privacyAccepted}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="h-auto w-full rounded-xl bg-blue-700 py-4 font-semibold shadow-sm transition hover:bg-blue-800"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Preparing..." : "Prepare Email"}
                      <Send className="h-5 w-5 ml-2" />
                    </Button>

                    <p className="text-center text-xs leading-relaxed text-slate-500">
                      Submitting opens a draft in your default email app. This website does not send your information to a third-party form processor.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">Atabazh Medical</h2>
                  <div className="space-y-4">
                    {[
                      {
                        icon: MapPin,
                        title: "Address",
                        content: (
                          <p className="text-sm text-slate-600">
                            Ontario, Canada<br />
                            Meetings by appointment
                          </p>
                        )
                      },
                      {
                        icon: Mail,
                        title: "Email",
                        content: (
                          <a href={`mailto:${PUBLIC_CONTACT_EMAIL}`} className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                            {PUBLIC_CONTACT_EMAIL}
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
                            <p className="text-xs text-slate-500 mt-1">Monday–Friday, 9 AM–5 PM ET</p>
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
                      <Card key={index} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-700">
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

                <Card className="rounded-2xl border border-slate-800 bg-[#0b1b2f] text-white shadow-sm">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold">What to Include</h3>
                    <p className="text-sm opacity-90">
                      For pilot or clinical workflow discussions, include your care setting, resident population, workflow question, and preferred follow-up window.
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
