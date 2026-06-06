"use client";
import { Link } from "@/lib/router-shim";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Wallet, Shield, Users, FileCheck, Clock, Headphones, Calculator, Award, CheckCircle, Banknote, Building2 } from "lucide-react";
import MindMap from "@/components/MindMap";
import { SEOHead } from "@/components/seo/SEOHead";
import { CTASection } from "@/components/CTASection";
const payrollServicesHeroBg = '/assets/payroll-services-hero-bg.jpg';

const payrollFeatures = [
  {
    icon: CheckCircle,
    title: "Reliable",
    description:
      "We offer a transparent service that's future proof as we'll be present for our customers today and when required in the future.",
  },
  {
    icon: Wallet,
    title: "Hassle-free",
    description: "We look after your payroll while you look after your business.",
  },
  {
    icon: Award,
    title: "Efficient",
    description:
      "We appreciate the significance of wage(s) to the employer, employee, consultant, contractor, agency worker or self-employed. As a result, with our dedicated team of experts we guarantee peace of mind in our services to all clients.",
  },
];

const businessFeatures = [
  {
    icon: Building2,
    title: "HMRC Compliant",
    description:
      "We comply with HMRC regulations by ensuring the submission of required regulatory files at each pay run and remitting due taxes accordingly. i.e. Real Time Information and HMRC BACS payment.",
  },
  {
    icon: Shield,
    title: "IR35 Compliant",
    description:
      "Our approach to compliance with IR35 ensures regulatory assessment in line with HMRC guidelines are facilitated to ensure our clients are fully compliant. We understand IR35 regulations and are fully compliant.",
  },
  {
    icon: Banknote,
    title: "Same day payment",
    description:
      "We offer a seamless BACS service that guarantees and easy, cost-effective way to make direct payments to your employees.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "With our customers at the core of our service, we work systematically with our values, policies and procedures that supports our result driven approach in achieving desired outcomes and value to our customers.",
  },
  {
    icon: Users,
    title: "Expert Staff",
    description:
      "Our teams are subject matter experts in payroll matters and are committed to ensuring peace of mind to all our customers on payroll matters.",
  },
  {
    icon: Calculator,
    title: "Payroll data processing",
    description:
      "We process the payroll data you submit to us and ensure everything related to salaries, benefits, tax, NI, pensions and statutory payments are calculated correctly.",
  },
];

const PayrollServices = () => {
  return (
    <Layout>
      <SEOHead
        title="Peace Payroll | Payroll Services"
        description="Get your wages done on-time and worry-free. HMRC compliant, IR35 compliant payroll services with same day payment."
        keywords="payroll services, HMRC compliant, IR35 compliant, same day payment, contractor payroll"
        canonicalPath="/services/payroll-services"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Payroll Services', path: '/services/payroll-services' }]}
      />
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-28 relative overflow-hidden">
        {/* Hero Background Image - Translucent */}
        <div className="absolute inset-0">
          <img
            src={payrollServicesHeroBg}
            alt="Payroll and finance concept"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Payroll Services</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mt-2 mb-6">
              Get your wages done on-time and worry-free
            </h1>
            <p className="text-xl text-primary-foreground/80">Look forward to a worry-free payday.</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Peace payroll, we enjoy taking care of the extra and unnecessary payroll responsibilities within your
              business and appreciate the importance of a consistent, dependable and accurate wage payment to employees.
              You can count on our reliable and efficient payroll service.
            </p>
          </div>
        </div>
      </section>

      {/* Mind Map */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Who We Serve</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Payroll Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide tailored payroll services across multiple workforce categories.
            </p>
          </div>
          <MindMap />
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Our Payroll Service?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {payrollFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:border-accent/30"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Features</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              Payroll Features for Your Business
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:border-accent/30"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Let's Simplify Your Payroll"
        subtitle="Choose the option that best describes you"
        bgClass="bg-muted/30"
      />
    </Layout>
  );
};

export default PayrollServices;
