"use client";
import { Link } from '@/lib/router-shim';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { ArrowRight, Eye, MessageCircle, Target, Handshake, ShieldCheck } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
const aboutHeroBg = '/assets/about-hero-bg.jpg';

const About = () => {
  return (
    <Layout>
      <SEOHead 
        title="About Peace Payroll | Professional Umbrella Company"
        description="Peace Payroll is an umbrella company with a difference. We provide exceptional payroll and employment services to contractors, agency and self employed workers."
        keywords="about peace payroll, umbrella company, payroll services, contractor employment"
        canonicalPath="/about"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]}
      />
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-28 relative overflow-hidden">
        {/* Hero Background Image - Translucent */}
        <div className="absolute inset-0">
          <img 
            src={aboutHeroBg} 
            alt="Professional corporate team"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
        </div>
        
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mt-2 mb-6">
                About Peace Payroll
              </h1>
              <p className="text-xl text-primary-foreground/80">
                We enable our customers to excel
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Mission</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
                  Our Mission
                </h2>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50 mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The mission of Peace Payroll Limited is to achieve the highest standards in the practice of payroll services and customer service by offering transparency, accuracy, peace of mind and future proof.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are an umbrella company with a difference. We provide exceptional payroll services to contractors, agency workers, self employed workers across all sectors at various locations in the country.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At Peace Payroll, we value our customers and ensure each journey is tailored to guarantee a seamless experience.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Eye, title: "Transparency", description: "We operate with openness and clarity in every interaction and transaction." },
              { icon: MessageCircle, title: "Communication", description: "We maintain proactive, clear dialogue to keep you informed at every step." },
              { icon: Target, title: "Accuracy", description: "We deliver precise, error-free payroll processing you can depend on." },
              { icon: Handshake, title: "Trust", description: "We build lasting relationships founded on reliability and integrity." },
              { icon: ShieldCheck, title: "Compliance", description: "We adhere to all HMRC regulations and industry standards without compromise." },
            ].map((value) => (
              <StaggerItem key={value.title}>
                <div className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:border-accent/30 text-center h-full flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our People */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our People</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              Our People
            </h2>
          </ScrollReveal>
          
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We are a dedicated team providing a top-quality payroll service.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe our strength is in our people. We have assembled the best people in the payroll industry, who all share a common passion for delivering excellent service to our clients. Simply, we believe that payroll processing should be easy.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <ScrollReveal variant="scale">
            <div className="bg-gradient-to-br from-primary to-navy-light rounded-3xl p-8 md:p-12 lg:p-16 text-center">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                Let's Work Together
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Experience the difference with our professional umbrella company services.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
