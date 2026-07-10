"use client";
import { Link } from '@/lib/router-shim';
import { Button } from '@/components/ui/button';
import { Check, Users, Building, Briefcase, ArrowRight, Shield, Clock, Phone, Sparkles, Award, Heart, FileCheck } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/CTASection';
import { SEOHead } from '@/components/seo/SEOHead';
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel';
const milleniumBridge = '/assets/millenium-bridge.jpg';
const features = [
  {
    icon: Shield,
    title: 'HMRC Compliant',
    description: 'Our services fully comply with HMRC regulations and IR35 requirements.',
  },
  {
    icon: Clock,
    title: 'Same Day Payment',
    description: 'Get your wages paid on time with our efficient BACS payment system.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Our dedicated team of payroll experts are here to help you.',
  },
];

const audiences = [
  {
    title: 'For Self-employed',
    description: 'We ensure accurate, timely, consistent wage payment whilst also guaranteeing necessary HMRC compliance.',
    icon: Briefcase,
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'For Entrepreneurs',
    description: 'Our service offering enables entrepreneurs and startup to get on with developing their businesses without worrying about payroll or regulatory compliance details.',
    icon: Building,
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'For Small and Medium Businesses',
    description: 'Outsourcing to Peace Payroll will enable your staff to focus on their core day to day duties which guarantees efficiency, high productivity and huge savings.',
    icon: Users,
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
];

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Peace Payroll: Professional Umbrella Company Services"
        description="Peace Payroll is a reliable umbrella company providing HMRC compliant, accurate and flexible payroll solutions for contractors, agency workers and self-employed workers."
        keywords="umbrella company, payroll services, HMRC compliant, IR35 compliant, contractor payroll"
        canonicalPath="/"
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        {/* Hero Background Image - Translucent */}
        <div className="absolute inset-0">
          <img
            src={milleniumBridge}
            alt="London Millennium Bridge"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        </div>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Trusted Umbrella Company</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
              Reliable Umbrella{' '}
              <span className="relative">
                Company Service
                <div className="absolute -bottom-2 left-0 w-full h-2 accent-gradient rounded-full opacity-60" />
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 animate-fade-in-up stagger-2 max-w-3xl">
              You can count on us for stress-free payroll solutions for contractors and agency workers of all types.
            </p>
            <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl animate-fade-in-up stagger-3">

            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 bg-card border-b border-border/50">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Payroll Solutions for Peace of Mind
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our accurate, compliant and flexible umbrella service ensures your wages are sorted on time.
          </p>
          <div className="w-24 h-1 accent-gradient mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-up">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
                Who We Are?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Peace Payroll is an umbrella company with a difference. We provide exceptional payroll and employment services to contractors, agency and self employed workers. Our solutions are designed to give you an added peace of mind while you focus on other operational aspects of your business.
              </p>
              <Button variant="accent" asChild>
                <Link to="/services">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: 'Fully Compliant', gradient: 'from-blue-500/20 to-cyan-500/20' },
                { icon: Award, label: 'Professional', gradient: 'from-purple-500/20 to-pink-500/20' },
                { icon: Heart, label: 'Passionate', gradient: 'from-rose-500/20 to-orange-500/20' },
                { icon: Users, label: 'Customer Focused', gradient: 'from-green-500/20 to-emerald-500/20' },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300`}
                >
                  <div className="w-14 h-14 rounded-xl bg-card shadow-card flex items-center justify-center mb-3">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <span className="font-display font-semibold text-foreground text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Peace Payroll Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: 'Integrity', desc: 'Systematic values & procedures' },
                  { icon: Award, label: 'Professionalism', desc: 'Tax & IR35 compliance' },
                  { icon: Clock, label: 'Same Day', desc: 'Accurate payments on time' },
                  { icon: FileCheck, label: 'Compliant', desc: 'Full regulatory adherence' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-card rounded-2xl p-5 border border-border/50 hover:border-accent/50 hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-display font-bold text-foreground mb-1">{item.label}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-up">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
                Why Peace Payroll?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We provide services for agency workers, consultants, contractors and self-employed workers. We provide accurate same day payments whilst we ensure compliance with tax and IR35 regulations.
              </p>
              <ul className="space-y-3 mb-6">
                {['Tax Compliant', 'IR35 Compliant', 'Same Day Payments', 'Expert Support'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="accent" asChild>
                <Link to="/why-peace">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Solutions Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Bespoke Umbrella Company Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed to Suit Your Kind of Business
            </p>
            <div className="w-24 h-1 accent-gradient mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {audiences.map((audience, index) => (
              <div
                key={audience.title}
                className={`group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:border-accent/50 hover:-translate-y-2`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-button transition-all duration-300">
                    <audience.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              We're committed to providing the best umbrella company services in the UK.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <CTASection
        title="Join a Better Umbrella Company"
        subtitle="Choose the option that best describes you"
        bgClass="bg-muted/30"
      />
    </Layout>
  );
};

export default Index;
