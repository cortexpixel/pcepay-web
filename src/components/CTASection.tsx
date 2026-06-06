"use client";
import { Button } from '@/components/ui/button';
import { Building, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { PayrollQuoteDialog } from '@/components/forms/PayrollQuoteDialog';
import { GeneralEnquiryDialog } from '@/components/forms/GeneralEnquiryDialog';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  bgClass?: string;
}

export const CTASection = ({
  title = 'Get Started With Peace Payroll',
  subtitle = 'Choose the option that best describes you',
  bgClass = 'bg-background',
}: CTASectionProps) => {
  return (
    <section className={`section-padding ${bgClass}`}>
      <div className="container-custom">
        <div className="bg-gradient-to-br from-primary via-primary to-navy-light rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent font-semibold text-sm">Get Started Today</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              {subtitle}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Option 1 — Companies */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 hover:border-accent/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Building className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">
                  For Companies
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-5">
                  Are you a company looking for payroll services?
                </p>
                <PayrollQuoteDialog
                  trigger={
                    <Button variant="hero" size="lg" className="w-full">
                      Request a Payroll Quote
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  }
                />
              </div>

              {/* Option 2 — General Enquiries */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 hover:border-accent/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">
                  General Enquiries
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-5">
                  Just have a question or need support?
                </p>
                <GeneralEnquiryDialog
                  trigger={
                    <Button variant="hero-outline" size="lg" className="w-full">
                      General Enquiry
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
