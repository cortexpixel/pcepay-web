"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Layout } from '@/components/layout/Layout';
import { Phone, Mail, Send, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
const contactHeroBg = '/assets/contact-hero-bg.jpg';

const contactSchema = z.object({
  title: z.string().min(1, 'Please select a title'),
  fullName: z.string().trim().min(1, 'Full name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().optional(),
  enquiryType: z.string().min(1, 'Please select an enquiry type'),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    fullName: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');

      toast({
        title: 'Message sent!',
        description: "We'll get back to you within one working day.",
      });

      setFormData({
        title: '',
        fullName: '',
        email: '',
        phone: '',
        enquiryType: '',
        message: '',
      });
    } catch (err) {
      toast({
        title: 'Something went wrong',
        description: 'Please try again or email us directly at support@pcepay.co.uk.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Peace Payroll | Contact Us"
        description="Get in touch with Peace Payroll. Contact us for business quotes, customer support, contractor enquiries and more."
        keywords="contact peace payroll, payroll enquiry, contractor support, business quote"
        canonicalPath="/contact"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact Us', path: '/contact' }]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Peace Payroll",
          "url": "https://www.pcepay.co.uk/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "Peace Payroll Limited",
            "telephone": "+442045054951",
            "email": "support@pcepay.co.uk",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "6 Watergate Walk, Mill Harbour Court",
              "addressLocality": "London",
              "postalCode": "E14 9XH",
              "addressCountry": "GB"
            }
          }
        }}
      />
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-28 relative overflow-hidden">
        {/* Hero Background Image - Translucent */}
        <div className="absolute inset-0">
          <img
            src={contactHeroBg}
            alt="Professional business team"
            className="w-full h-full object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
        </div>
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact Us</span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mt-2 mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Please fill your details to get in touch with us and we shall respond within one working day.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <ScrollReveal variant="fadeLeft" className="lg:col-span-1">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Contact Address
              </h2>

              <StaggerContainer className="space-y-6">
                <StaggerItem>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a
                        href="tel:+442045054951"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        020 4505 4951
                      </a>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:support@pcepay.co.uk"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        support@pcepay.co.uk
                      </a>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Monday – Friday<br />
                        9:00 AM – 5:00 PM
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal variant="fadeRight" delay={0.2} className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Title */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Title<span className="text-accent">*</span>
                      </label>
                      <Select value={formData.title} onValueChange={(value) => handleSelectChange('title', value)}>
                        <SelectTrigger className={errors.title ? 'border-destructive' : ''}>
                          <SelectValue placeholder="Select title" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Mr">Mr</SelectItem>
                          <SelectItem value="Mrs">Mrs</SelectItem>
                          <SelectItem value="Miss">Miss</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.title && <p className="text-sm text-destructive mt-1">{errors.title}</p>}
                    </div>

                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name<span className="text-accent">*</span>
                      </label>
                      <Input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={errors.fullName ? 'border-destructive' : ''}
                        placeholder="Your full name"
                      />
                      {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Email<span className="text-accent">*</span>
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'border-destructive' : ''}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  {/* Enquiry Type */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Enquiry Type<span className="text-accent">*</span>
                    </label>
                    <Select value={formData.enquiryType} onValueChange={(value) => handleSelectChange('enquiryType', value)}>
                      <SelectTrigger className={errors.enquiryType ? 'border-destructive' : ''}>
                        <SelectValue placeholder="Select enquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Business Quote">Business Quote</SelectItem>
                        <SelectItem value="Customer Support">Customer Support</SelectItem>
                        <SelectItem value="Contractors">Contractors</SelectItem>
                        <SelectItem value="Freelancers">Freelancers</SelectItem>
                        <SelectItem value="Careers">Careers</SelectItem>
                        <SelectItem value="General Enquiry">General Enquiry</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.enquiryType && <p className="text-sm text-destructive mt-1">{errors.enquiryType}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Message<span className="text-accent">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`min-h-[150px] ${errors.message ? 'border-destructive' : ''}`}
                      placeholder="How can we help you?"
                    />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                  </div>

                  {/* Privacy Notice */}
                  <p className="text-sm text-muted-foreground">
                    Please note that by submitting this form, you confirm that you accept our website{' '}
                    <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.
                  </p>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;
