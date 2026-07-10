"use client";
import { Link } from "@/lib/router-shim";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Shield, Award, Heart, Target, Headphones, Lock, Sparkles, Clock, FileCheck } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { CTASection } from "@/components/CTASection";
const whyPeaceHeroBg = '/assets/why-peace-hero-bg.jpg';

const reasons = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "At Peace Payroll, we work systematically with our values, policies and procedures. This ensures our work is expressed in a respectful and sustainable method in working with our clients through abiding agreements, information management and data confidentiality.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Award,
    title: "Professionalism",
    description:
        "Our professional approach ensures we are inline with tax, IR35 and GDPR requirements, so our customers can trust our work and due diligence.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We are passionate about what we do. We create a tailored, professional bond with our customers across all sectors.",
    gradient: "from-rose-500/20 to-orange-500/20",
  },
  {
    icon: Target,
    title: "Result Driven",
    description:
      "We commit ourselves to a resolute way in achieving set desired results that ensures added value to our clients and our service.",
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
  {
    icon: Headphones,
    title: "Customer Service",
    description:
      "Excellent customer service is at the fore front of our service - our customers are at the core of our service.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description: "Information handling and data confidentiality is in accordance with GDPR and UK data protection act.",
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
];

const WhyPeace = () => {
  return (
    <Layout>
      <SEOHead
        title="Peace Payroll | Why Peace Payroll"
        description="Benefit from our professional and compliant umbrella company service. Integrity, professionalism, passion and customer focus."
        keywords="why peace payroll, umbrella company benefits, professional payroll, compliant service"
        canonicalPath="/why-peace"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Why Peace Payroll', path: '/why-peace' }]}
      />
      {/* Hero Section */}
      <section className="hero-gradient py-24 md:py-32 relative overflow-hidden">
        {/* Hero Background Image - Translucent */}
        <div className="absolute inset-0">
          <img
            src={whyPeaceHeroBg}
            alt="Professional business team celebrating success"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
        </div>

        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-float" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Us</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mt-2 mb-6">
              Why Peace Payroll?
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/80 max-w-2xl">
              Benefit from our professional and compliant service
            </p>
          </div>
        </div>
      </section>

      {/* Introduction with decorative element */}
      <section className="section-padding bg-background relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-16 h-16 bg-accent rounded-2xl rotate-45 shadow-button" />

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center pt-8">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Umbrella company solutions that <span className="text-gradient">works for you.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With our team of passionate and committed staff, you are covered for all your business payroll needs.
                Regardless of your line of business, our solutions ensures your payday is sorted on time and within
                regulatory compliance. Why not join us?
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Fully Compliant", gradient: "from-blue-500/20 to-cyan-500/20" },
                { icon: Clock, label: "Same Day Pay", gradient: "from-amber-500/20 to-yellow-500/20" },
                { icon: FileCheck, label: "IR35 Compliant", gradient: "from-purple-500/20 to-pink-500/20" },
                { icon: Headphones, label: "24/7 Support", gradient: "from-green-500/20 to-emerald-500/20" },
              ].map((item) => (
                  <div
                  key={item.label}
                  className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300`}
                >
                  <div className="w-14 h-14 rounded-xl bg-card shadow-card flex items-center justify-center mb-3">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <span className="font-display font-bold text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reasons Grid - Enhanced */}
      <section className="section-padding bg-muted/30 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Reasons to Join Peace Payroll
            </h2>
            <div className="w-24 h-1 accent-gradient mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:border-accent/50 hover:-translate-y-2 opacity-0 animate-fade-in-up stagger-${index + 1}`}
                style={{ animationFillMode: "forwards" }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-button transition-all duration-300">
                    <reason.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="py-16 bg-background border-y border-border/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100%", label: "Tax Compliant" },
              { value: "Same Day", label: "Payments" },
              { value: "IR35", label: "Compliant" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join Peace Payroll Today"
        subtitle="Choose the option that best describes you"
      />
    </Layout>
  );
};

export default WhyPeace;
