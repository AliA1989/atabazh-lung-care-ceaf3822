import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
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
                <h2 className="text-3xl font-heading font-bold mb-6">Request a Demo</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required placeholder="Smith" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required placeholder="john.smith@facility.ca" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(416) 555-0123" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization/Facility Name *</Label>
                    <Input id="organization" required placeholder="Your LTC Facility" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role *</Label>
                    <Select required>
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Inquiry Type *</Label>
                    <Select required>
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder="Tell us about your facility and what you'd like to learn..."
                      rows={5}
                    />
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
                    By submitting this form, you agree to our privacy policy and consent to be contacted by Atabazh Medical.
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
                          <p className="text-muted-foreground mb-2">
                            <a href="mailto:info@atabazh.com" className="hover:text-primary transition-smooth">
                              info@atabazh.com
                            </a>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            For press inquiries: <a href="mailto:press@atabazh.com" className="hover:text-primary transition-smooth">press@atabazh.com</a>
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
                            <a href="tel:+14165551234" className="hover:text-primary transition-smooth">
                              +1 (416) 555-1234
                            </a>
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Monday - Friday: 9am - 5pm EST
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="shadow-medium hero-gradient border-0 text-primary-foreground">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-heading font-bold">Quick Response Guarantee</h3>
                  <p className="opacity-95">
                    We typically respond to all inquiries within 24 hours during business days. For urgent clinical questions or technical support, please call us directly.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold mb-3">Prefer to Schedule a Call?</h3>
                  <p className="text-muted-foreground mb-4">
                    Book a time directly on our calendar for a personalized discussion about your facility's needs.
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
