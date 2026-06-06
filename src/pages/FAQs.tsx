"use client";
import { Link, useSearchParams } from "@/lib/router-shim";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { SEOHead } from "@/components/seo/SEOHead";
import { CTASection } from "@/components/CTASection";
const faqsHeroBg = '/assets/faqs-hero-bg.jpg';
const smartPensionLogo = '/assets/smart-pension.svg';

const faqs = [
  {
    question: "What is an umbrella company?",
    answer:
      "An umbrella company is a company that acts as an employer to agency contractors who work under a fixed, short term contract assignment usually through a recruitment employment agency in the United Kingdom.",
  },
  {
    question: "Do I get employee rights?",
    answer:
      "Yes, we ensure rights such are Statutory Maternity Pay (SMP), Statutory Sick Pay (SSP) etc are paid in accordance with your agency employment contract.",
  },
  {
    question: "Why use Peace Payroll?",
    answer:
      "For convenience, efficiency of service but most of all we save time and money by taking away all the administrative tasks relating to your payroll. We also guarantee employee benefits in accordingly.",
  },
  {
    question: "How are payments made?",
    answer: "Payments are made into your preferred bank account via an instant bank transfer.",
  },
  {
    question: "Do I earn Holiday pay?",
    answer:
      "Yes, holiday pay is made in accordance with your contract and as agreed with your agency. Peace Payroll do not retain any holiday pay.",
  },
  {
    question: "Does my tax code effect my wages?",
    answer:
      "Your tax code indicates your annual allowance. Our software allows this weekly amount of tax-free pay when we work out your tax deductions. Your wages are also affected if you have a second income which needs to be declared so you do not underpay tax which HMRC will in time ask you to pay back.",
  },
  {
    question: "What documents do I receive at the end of the Tax year?",
    answer: "Yes, we will send you a P60 at the end of each financial/tax year (April).",
  },
  {
    question: "How do I register?",
    answer:
      "Simply, email us at support@pcepay.co.uk or call us on 020 3903 8056 or visit our website to complete our enquiry form and we'll get in touch with you.",
  },
  {
    question: "What is IR35?",
    answer:
      'IR35 refers to the United Kingdom\'s anti-avoidance tax legislation designed to tax "disguised employment" at a rate similar to employment. In this context, "disguised employees" means workers who receive payments from a client via an intermediary, for example, their own limited company, and whose relationship with their client is such that, had they been paid directly, they would be employees of the client.',
  },
  {
    question: "Do I have to pay any joining fee?",
    answer: "No, we do not require a joining fee.",
  },
  {
    question: "Do I get pension payment?",
    answer:
      "We are registered with Smart Pension provider and can enrol your company and employees into the pension scheme.",
    showPensionLogo: true,
    id: "pension",
  },
  {
    question: "Do I get paid weekly or monthly?",
    answer: "In line with contractual agreements you can get paid as weekly, fortnightly or monthly.",
  },
  {
    question: "Do you get payslip for my staff?",
    answer:
      "Absolutely! Easily read and understandable Payslips are immediately sent out to provided employee email addresses.",
  },
  {
    question: "Do I get a P60?",
    answer: "Yes, we send you a P60 once at the end of the financial year (April).",
  },
];

const FAQs = () => {
  const [searchParams] = useSearchParams();
  const openParam = searchParams.get("open");
  const pensionRef = useRef<HTMLDivElement>(null);

  // Find the index of the FAQ to auto-open based on query param
  const autoOpenIndex = openParam
    ? faqs.findIndex((faq) => 'id' in faq && faq.id === openParam)
    : -1;

  const [openValue, setOpenValue] = useState<string | undefined>(
    autoOpenIndex >= 0 ? `item-${autoOpenIndex}` : undefined
  );

  // Scroll to the auto-opened FAQ item
  useEffect(() => {
    if (autoOpenIndex >= 0 && pensionRef.current) {
      setTimeout(() => {
        pensionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 500);
    }
  }, [autoOpenIndex]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Layout>
      <SEOHead
        title="Peace Payroll | FAQs"
        description="Frequently asked questions about Peace Payroll umbrella company services. Learn about IR35, holiday pay, pensions and more."
        keywords="umbrella company FAQs, IR35 questions, payroll questions, contractor FAQs"
        canonicalPath="/faqs"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'FAQs', path: '/faqs' }]}
        jsonLd={faqJsonLd}
      />
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-28 relative overflow-hidden">
        {/* Hero Background Image - Translucent */}
        <div className="absolute inset-0">
          <img src={faqsHeroBg} alt="Customer support team" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
        </div>

        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQs</span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mt-2 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-primary-foreground/80">
                The answers to what you need to know about Peace Payroll.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Got questions? We have the answers.
              </h2>
            </ScrollReveal>

            <StaggerContainer staggerDelay={0.05}>
              <Accordion type="single" collapsible value={openValue} onValueChange={setOpenValue} className="space-y-4">
                {faqs.map((faq, index) => (
                  <StaggerItem key={index}>
                    <div ref={'id' in faq && faq.id === openParam ? pensionRef : undefined}>
                    <AccordionItem
                      value={`item-${index}`}
                      className="bg-card rounded-xl border border-border/50 px-6 shadow-sm data-[state=open]:shadow-card"
                    >
                      <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-accent py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {'showPensionLogo' in faq && faq.showPensionLogo && (
                          <img 
                            src={smartPensionLogo} 
                            alt="Smart Pension" 
                            className="h-12 w-auto object-contain mb-3"
                          />
                        )}
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                    </div>
                  </StaggerItem>
                ))}
              </Accordion>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Have More Questions?"
        subtitle="Choose the option that best describes you"
        bgClass="bg-muted/30"
      />
    </Layout>
  );
};

export default FAQs;
