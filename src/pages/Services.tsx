"use client";
import { Link } from "@/lib/router-shim";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Clock, Wallet, CheckCircle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { SEOHead } from "@/components/seo/SEOHead";
import { CTASection } from "@/components/CTASection";
const servicesHeroBg = '/assets/services-hero-bg.jpg';
const smartPensionLogo = '/assets/smart-pension.svg';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
  bullets?: string[];
}

const services: ServiceItem[] = [
  {
    title: "Payroll Services",
    description:
        "We provide a flexible umbrella payroll service that is consistent, compliant, timely and accurate to a variety of businesses and employment types across varying sectors. We also ensure full employment rights such as annual leave payments, Statutory Sick Pay, Statutory Maternity Pay are complied with in accordance with contractual terms with your agency or company.",
    icon: Clock,
    link: "/services/payroll-services",
  },
  {
    title: "Pension Services",
    description:
      "We manage workplace pension auto-enrolment, contributions, and compliance so businesses remain fully aligned with UK pension regulations.",
    icon: Wallet,
    link: "/faqs?open=pension",
    bullets: [
      "Auto-enrolment setup",
      "Pension contributions processing",
      "Compliance with UK pension regulations",
      "Integration with payroll",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <SEOHead
        title="Peace Payroll | Our Services"
        description="Bespoke umbrella company service offering payroll and pension services for contractors, agency workers and self-employed workers."
        keywords="payroll services, pension services, umbrella company, contractor services"
        canonicalPath="/services"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Umbrella Company Payroll Services",
          "provider": {
            "@type": "Organization",
            "name": "Peace Payroll Limited",
            "url": "https://www.pcepay.co.uk"
          },
          "areaServed": { "@type": "Country", "name": "United Kingdom" },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Payroll & Pension Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Payroll Services" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pension Services" } }
            ]
          }
        }}
      />
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-28 relative overflow-hidden">
        {/* Hero Background Image - Translucent */}
        <div className="absolute inset-0">
          <img
            src={servicesHeroBg}
            alt="Professional business services"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
        </div>
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mt-2 mb-6">
                Bespoke umbrella company service that works.
              </h1>
              <p className="text-xl text-primary-foreground/80">Umbrella company service with a difference.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:border-accent/30 h-full">
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    {service.bullets && (
                      <ul className="space-y-2 mb-6">
                        {service.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <Button variant="accent" asChild>
                      <Link to={service.link}>
                        {service.title === "Pension Services" ? "See our frequently asked questions page" : "Learn More"}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Smart Pension Logo Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <ScrollReveal variant="fadeUp">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={smartPensionLogo}
                  alt="Smart Pension Provider"
                  className="h-20 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Smart Pension Provider</h3>
                <p className="text-muted-foreground">
                  We are registered with Smart Pension provider and can enrol your company and employees into the
                  pension scheme. See our frequently asked questions page for more information.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Let's Simplify Your Payroll"
        subtitle="Choose the option that best describes you"
      />
    </Layout>
  );
};

export default Services;
