"use client";
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { MessageSquare, Send, CheckCircle } from 'lucide-react';

const enquirySchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  phone: z.string().max(30).optional(),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().trim().min(1, 'Message is required').max(2000),
});

interface GeneralEnquiryDialogProps {
  trigger: React.ReactNode;
}

export const GeneralEnquiryDialog = ({ trigger }: GeneralEnquiryDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = enquirySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/general-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Submission failed');
      setSubmitted(true);
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

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setTimeout(() => {
        setSubmitted(false);
        setErrors({});
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Thank You</h3>
            <p className="text-muted-foreground">Thank you for contacting us. We will respond within one business day.</p>
            <Button variant="accent" className="mt-6" onClick={() => handleOpenChange(false)}>Close</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-accent" />
                Contact Us
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Name<span className="text-accent">*</span></label>
                <Input name="name" value={formData.name} onChange={handleChange} className={errors.name ? 'border-destructive' : ''} placeholder="Your name" />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email<span className="text-accent">*</span></label>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'border-destructive' : ''} placeholder="your@email.com" />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone Number <span className="text-muted-foreground text-xs">(optional)</span></label>
                <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Subject<span className="text-accent">*</span></label>
                <Select value={formData.subject} onValueChange={(v) => {
                  setFormData(prev => ({ ...prev, subject: v }));
                  if (errors.subject) setErrors(prev => ({ ...prev, subject: '' }));
                }}>
                  <SelectTrigger className={errors.subject ? 'border-destructive' : ''}>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General Question">General Question</SelectItem>
                    <SelectItem value="App Support">App Support</SelectItem>
                    <SelectItem value="Payroll Query">Payroll Query</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Message<span className="text-accent">*</span></label>
                <Textarea name="message" value={formData.message} onChange={handleChange} className={`min-h-[100px] ${errors.message ? 'border-destructive' : ''}`} placeholder="How can we help?" />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
