"use client";
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { PageTransition } from '@/components/animations/PageTransition';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-shim';
import { Smartphone, Shield, FileText, Bell, Clock, Wallet, ArrowRight, Sparkles } from 'lucide-react';
const appScreenLogin = '/assets/app-screenshot-login.webp';
const appScreenPayslip = '/assets/app-screenshot-payslip.webp';
const qrCode = '/assets/qr-code.png';

const benefits = [
  {
    icon: Smartphone,
    title: 'Payroll on the Go',
    description: 'Access your payroll information anytime, anywhere from your mobile device.',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Your data is protected with enterprise-level encryption and secure authentication.',
  },
  {
    icon: FileText,
    title: 'Instant Payslips',
    description: 'View and download your payslips the moment they are processed — no waiting.',
  },
  {
    icon: Bell,
    title: 'Real-Time Notifications',
    description: 'Get instant alerts on pay dates, payslip availability, and important updates.',
  },
];

const features = [
  {
    icon: Wallet,
    title: 'Secure Payment Tracking',
    description: 'Track all your payments with a clear breakdown of earnings, deductions and net pay.',
  },
  {
    icon: FileText,
    title: 'Payslip Access',
    description: 'View your last 6 months of payslips with full details including tax code, NI, and pay period.',
  },
  {
    icon: Clock,
    title: 'Real-Time Payroll Updates',
    description: 'Stay up to date with live payroll processing status and payment confirmations.',
  },
];

const PayrollApp = () => {
  return (
    <Layout>
      <SEOHead
        title="Payroll App | Peace Payroll"
        description="Download the Peace Payroll mobile app to manage your payroll on the go. Access payslips, track payments, and get real-time updates."
        keywords="payroll app, mobile payroll, payslip app, peace payroll app"
        canonicalPath="/payroll-app"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Payroll App', path: '/payroll-app' }]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          "name": "Peace Payroll",
          "operatingSystem": "iOS, Android",
          "applicationCategory": "BusinessApplication",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "GBP" },
          "author": { "@type": "Organization", "name": "Peace Payroll Limited" }
        }}
      />
      <PageTransition>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl" />
          </div>
          <div className="container-custom section-padding relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6 text-sm font-medium">
                  <Smartphone className="w-4 h-4" />
                  Available on iOS & Android
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Peace Payroll Mobile App
                </h1>
                <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                  Manage your payroll anywhere. Access payslips, track payments, and stay on top of your earnings — all from your phone.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="accent" size="lg" asChild>
                    <a href="https://play.google.com/store/apps/details?id=uk.co.pcepay.mobile&hl=en" target="_blank" rel="noopener noreferrer">
                      Get on Google Play <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button variant="hero-outline" size="lg" asChild>
                    <a href="https://apps.apple.com/gb/app/peace-payroll/id6745489122" target="_blank" rel="noopener noreferrer">
                      Download on App Store
                    </a>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-2xl" />
                  <div className="relative bg-foreground/10 rounded-[2.5rem] p-3 border border-primary-foreground/20 shadow-2xl">
                    <img
                      src={appScreenPayslip}
                      alt="Peace Payroll App - Payslip View"
                      className="w-64 rounded-[2rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Use the Peace Payroll App?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Everything you need to manage your payroll, right in your pocket.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <ScrollReveal key={benefit.title} delay={i * 0.1}>
                  <div className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                      <benefit.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  See It in Action
                </h2>
                <p className="text-muted-foreground text-lg">
                  A clean, intuitive interface designed for ease of use.
                </p>
              </div>
            </ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
              <ScrollReveal delay={0}>
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-card rounded-[2rem] p-3 shadow-card-hover border border-border/50">
                    <img
                      src={appScreenLogin}
                      alt="Peace Payroll App - Login Screen"
                      className="w-56 md:w-64 rounded-[1.5rem]"
                    />
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4 font-medium">Secure Login</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-card rounded-[2rem] p-3 shadow-card-hover border border-border/50">
                    <img
                      src={appScreenPayslip}
                      alt="Peace Payroll App - Payslip Dashboard"
                      className="w-56 md:w-64 rounded-[1.5rem]"
                    />
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4 font-medium">Payslip Dashboard</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Key Features
                </h2>
                <p className="text-muted-foreground text-lg">
                  Built for contractors and workers who need fast, reliable payroll access.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 0.15}>
                  <div className="relative bg-card rounded-2xl p-8 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 h-full text-center group">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/15 to-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Download CTA with QR */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Download the App Now
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Scan the QR code or use the links below to get started.
                </p>
                <div className="inline-block bg-card rounded-2xl p-5 shadow-card border border-border/50 mb-8">
                  <img src={qrCode} alt="Download Peace Payroll App QR Code" className="w-36 h-36" />
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="accent" size="lg" asChild>
                    <a href="https://play.google.com/store/apps/details?id=uk.co.pcepay.mobile&hl=en" target="_blank" rel="noopener noreferrer">
                      Google Play
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://apps.apple.com/gb/app/peace-payroll/id6745489122" target="_blank" rel="noopener noreferrer">
                      App Store
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Payroll App for Businesses */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Payroll App for Businesses
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Our payroll platform can also be licensed by other payroll providers or businesses for a small subscription fee.
                </p>
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Partner With Us <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="section-padding bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
          <div className="container-custom">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto text-center">
                <Sparkles className="w-10 h-10 text-accent mx-auto mb-6" />
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Coming Soon – More Features
                </h2>
                <p className="text-primary-foreground/75 text-lg leading-relaxed mb-8">
                  We're continuously improving the Peace Payroll app with new tools and features to make managing your payroll even easier. Stay tuned for updates.
                </p>
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Get Notified <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default PayrollApp;
