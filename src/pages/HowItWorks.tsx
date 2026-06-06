"use client";
import { Link } from "@/lib/router-shim";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, FileText, ClipboardList, FileSignature, CreditCard, AlertTriangle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { SEOHead } from "@/components/seo/SEOHead";
import { CTASection } from "@/components/CTASection";
const officeMeeting = '/assets/office-meeting.jpg';
const howItWorksHeroBg = '/assets/how-it-works-hero-bg.jpg';

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Documentation",
    description:
      "We will inform you of all required information needed by us, your end-client or agency (all in line with the UK Data Protection Act and GDPR).",
  },
  {
    number: 2,
    icon: ClipboardList,
    title: "Information Gathering",
    description:
      "We will inform or discuss with you our payroll patterns to ensure it meets your business requirements and expectations.",
  },
  {
    number: 3,
    icon: FileSignature,
    title: "Contract Review/Signing",
    description:
      "Contract clarification and signing by all parties involved i.e. agent, end-client, Peace Payroll and you (our client).",
  },
  {
    number: 4,
    icon: CreditCard,
    title: "Payment",
    description:
      "We receive funds from agency or end client, and we make payment in-line with contractual agreements. i.e. same day payment. For every payroll, we promptly send out payslips to your preferred email address.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      <SEOHead
        title="Peace Payroll | How It Works"
        description="Our simple and compliant umbrella company approach. Easy, simple, professional process for contractors and agency workers."
        keywords="how it works, umbrella company process, contractor onboarding, payroll process"
        canonicalPath="/how-it-works"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'How It Works', path: '/how-it-works' }]}
      />
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-28 relative overflow-hidden">
        {/* Hero Background Image - Translucent */}
        <div className="absolute inset-0">
          <img
            src={howItWorksHeroBg}
            alt="Business workflow and process"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
        </div>

        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mt-2 mb-6">
                Our Simple and Compliant Approach
              </h1>
              <p className="text-xl text-primary-foreground/80">Easy. Simple. Professional approach.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="max-w-xl">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you are new to contracting or thinking of switching, our umbrella company solution is simple
                  and cost-saving. We efficiently manage your payroll, timesheets and end client requirements, leaving
                  you to get on with other aspects of your business.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div className="relative">
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6 lg:p-8">
                  <img
                    src={officeMeeting}
                    alt="Business meeting"
                    className="rounded-xl shadow-card-hover w-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Umbrella Company Process
            </h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="space-y-8" staggerDelay={0.15}>
              {steps.map((step, index) => (
                <StaggerItem key={step.number}>
                  <div className="relative flex gap-6 md:gap-8">
                    {/* Timeline line */}
                    {index !== steps.length - 1 && (
                      <div className="absolute left-7 md:left-9 top-16 w-0.5 h-full bg-accent/20" />
                    )}

                    {/* Number circle */}
                    <div className="flex-shrink-0 w-14 h-14 md:w-18 md:h-18 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-display font-bold text-xl z-10">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50 hover:shadow-card-hover transition-shadow duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-display text-xl font-bold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Umbrella Payroll Model Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How the Umbrella Payroll Model Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A clear, step-by-step look at how your pay flows from assignment to your bank account.
            </p>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <StaggerContainer staggerDelay={0.12}>
              {[
                { step: 1, title: "Contractor works through agency", desc: "You secure a contract role via a recruitment agency and carry out work for the end client." },
                { step: 2, title: "Agency sends payroll data to Peace Payroll", desc: "The agency submits your timesheet and payroll information to Peace Payroll for processing." },
                { step: 3, title: "Peace Payroll processes salary", desc: "We calculate your gross pay, apply compliant employment terms, and prepare your wages." },
                { step: 4, title: "Taxes and deductions applied", desc: "PAYE income tax, National Insurance, pension contributions, and any other statutory deductions are applied." },
                { step: 5, title: "Contractor receives payslip and payment", desc: "Your net pay is transferred to your bank account and a detailed payslip is sent to your email." },
              ].map((item, index, arr) => (
                <StaggerItem key={item.step}>
                  <div className="flex items-start gap-5 md:gap-6">
                    {/* Step indicator with connector */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                        {item.step}
                      </div>
                      {index !== arr.length - 1 && (
                        <div className="w-0.5 h-12 bg-accent/30 mt-2" />
                      )}
                    </div>

                    {/* Content */}
                    <div className={`pb-${index !== arr.length - 1 ? '8' : '0'}`}>
                      <h3 className="font-display text-lg font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Umbrella Company vs Limited Company
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Not sure which route is right for you? Here's a side-by-side comparison.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 md:p-5 bg-muted/50 rounded-tl-xl font-display text-sm uppercase tracking-wider text-muted-foreground">Criteria</th>
                    <th className="p-4 md:p-5 bg-primary text-primary-foreground font-display text-sm uppercase tracking-wider">Umbrella Company</th>
                    <th className="p-4 md:p-5 bg-muted/50 rounded-tr-xl font-display text-sm uppercase tracking-wider text-muted-foreground">Limited Company</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { criteria: "Administration", umbrella: "Handled by the umbrella company", limited: "You manage everything yourself" },
                    { criteria: "Tax Responsibilities", umbrella: "PAYE — taxes deducted at source", limited: "Self-assessment & corporation tax filing" },
                    { criteria: "Payroll Management", umbrella: "Fully managed for you", limited: "You arrange your own payroll" },
                    { criteria: "Compliance", umbrella: "Umbrella ensures IR35 & HMRC compliance", limited: "Your responsibility to stay compliant" },
                    { criteria: "Setup Complexity", umbrella: "Quick and easy — start same day", limited: "Requires company registration & accountant" },
                    { criteria: "Best Suited For", umbrella: "Short-term contracts & inside IR35 roles", limited: "Long-term contracts & outside IR35 roles" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/50 last:border-b-0">
                      <td className="p-4 md:p-5 font-semibold text-foreground text-sm">{row.criteria}</td>
                      <td className="p-4 md:p-5 text-sm text-muted-foreground bg-primary/5 text-center">{row.umbrella}</td>
                      <td className="p-4 md:p-5 text-sm text-muted-foreground text-center">{row.limited}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-10 bg-muted/20 border-t border-border/50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0" />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Peace Payroll processes payroll only and is not the official employer.
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We manage payroll administration while the contractor's employment relationship remains with the relevant employer or agency.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Get Started With Peace Payroll"
        subtitle="Choose the option that best describes you"
      />
    </Layout>
  );
};

export default HowItWorks;
