"use client";
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { Building, ArrowRight, CheckCircle } from 'lucide-react';

const quoteSchema = z.object({
  companyName: z.string().trim().min(1, 'Company name is required').max(100),
  country: z.string().trim().min(1, 'Country is required').max(100),
  contactPerson: z.string().trim().min(1, 'Contact person is required').max(100),
  businessEmail: z.string().trim().email('Invalid email address').max(255),
  phone: z.string().trim().min(1, 'Phone number is required').max(30),
  employeeCount: z.string().trim().min(1, 'Number of employees is required').max(50),
  ir35Status: z.string().min(1, 'Please select IR35 status'),
  industry: z.string().trim().min(1, 'Industry is required').max(100),
  message: z.string().max(2000).optional(),
});

interface PayrollQuoteDialogProps {
  trigger: React.ReactNode;
}

export const PayrollQuoteDialog = ({ trigger }: PayrollQuoteDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    companyName: '',
    country: '',
    contactPerson: '',
    businessEmail: '',
    phone: '',
    employeeCount: '',
    ir35Status: '',
    industry: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = quoteSchema.safeParse(formData);
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
      const response = await fetch('/api/payroll-quote', {
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
        setFormData({
          companyName: '', country: '', contactPerson: '', businessEmail: '',
          phone: '', employeeCount: '', ir35Status: '', industry: '', message: '',
        });
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Thank You</h3>
            <p className="text-muted-foreground">Our payroll team will contact you shortly.</p>
            <Button variant="accent" className="mt-6" onClick={() => handleOpenChange(false)}>Close</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl flex items-center gap-2">
                <Building className="w-6 h-6 text-accent" />
                Request a Payroll Quote
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Company Name<span className="text-accent">*</span></label>
                  <Input name="companyName" value={formData.companyName} onChange={handleChange} className={errors.companyName ? 'border-destructive' : ''} placeholder="Your company" />
                  {errors.companyName && <p className="text-xs text-destructive mt-1">{errors.companyName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Country<span className="text-accent">*</span></label>
                  <Input name="country" value={formData.country} onChange={handleChange} className={errors.country ? 'border-destructive' : ''} placeholder="Country" />
                  {errors.country && <p className="text-xs text-destructive mt-1">{errors.country}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Contact Person<span className="text-accent">*</span></label>
                  <Input name="contactPerson" value={formData.contactPerson} onChange={handleChange} className={errors.contactPerson ? 'border-destructive' : ''} placeholder="Full name" />
                  {errors.contactPerson && <p className="text-xs text-destructive mt-1">{errors.contactPerson}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Business Email<span className="text-accent">*</span></label>
                  <Input type="email" name="businessEmail" value={formData.businessEmail} onChange={handleChange} className={errors.businessEmail ? 'border-destructive' : ''} placeholder="email@company.com" />
                  {errors.businessEmail && <p className="text-xs text-destructive mt-1">{errors.businessEmail}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone Number<span className="text-accent">*</span></label>
                  <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? 'border-destructive' : ''} placeholder="Phone number" />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">No. of Employees/Contractors<span className="text-accent">*</span></label>
                  <Input name="employeeCount" value={formData.employeeCount} onChange={handleChange} className={errors.employeeCount ? 'border-destructive' : ''} placeholder="e.g. 50" />
                  {errors.employeeCount && <p className="text-xs text-destructive mt-1">{errors.employeeCount}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">IR35 Status<span className="text-accent">*</span></label>
                <Select value={formData.ir35Status} onValueChange={(v) => handleSelectChange('ir35Status', v)}>
                  <SelectTrigger className={errors.ir35Status ? 'border-destructive' : ''}>
                    <SelectValue placeholder="Select IR35 status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Inside IR35">Inside IR35</SelectItem>
                    <SelectItem value="Outside IR35">Outside IR35</SelectItem>
                    <SelectItem value="Both">Both Inside &amp; Outside</SelectItem>
                    <SelectItem value="Not Sure">Not Sure</SelectItem>
                  </SelectContent>
                </Select>
                {errors.ir35Status && <p className="text-xs text-destructive mt-1">{errors.ir35Status}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Industry / Type of Business<span className="text-accent">*</span></label>
                <Input name="industry" value={formData.industry} onChange={handleChange} className={errors.industry ? 'border-destructive' : ''} placeholder="e.g. Construction, IT, Healthcare" />
                {errors.industry && <p className="text-xs text-destructive mt-1">{errors.industry}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Message / Additional Information</label>
                <Textarea name="message" value={formData.message} onChange={handleChange} className="min-h-[80px]" placeholder="Any additional details..." />
              </div>
              <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Request Quote'}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
