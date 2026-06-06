"use client";
import { Layout } from '@/components/layout/Layout';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';

const Cookies = () => {
  return (
    <Layout>
      <SEOHead 
        title="Peace Payroll | Cookie Policy"
        description="Peace Payroll cookie policy. Learn how we use cookies on our website."
        keywords="cookie policy, cookies, website cookies, analytics"
        canonicalPath="/cookies"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Cookie Policy', path: '/cookies' }]}
      />
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-primary-foreground/80">
                How we use cookies on our website.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                This website uses cookies. A cookie is a piece of text that our website transfers to your computer, if you agree, so it can remember the webpage you visit. Cookies are generally used to monitor how a website is used and improve your online experience. They do not give us access to the rest of your computer and are not used to identify you personally.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                These cookies allow us to distinguish you from other users of the website which helps us to provide you with a good experience when you browse our website and allows us to improve our site.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Browser Settings</h2>
              <p className="text-muted-foreground mb-6">
                Most web browsers allow some control of most cookies through the browser settings.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Removing Cookies</h2>
              <p className="text-muted-foreground mb-6">
                You can withdraw your consent and remove or block cookies at any time using the settings in your browser, but in some cases, this may impact your ability to use our website.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-card rounded-xl p-6 border border-border/50 mb-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="bg-card rounded-xl p-6 border border-border/50 mb-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Analytics Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about our cookie policy, please contact us at{' '}
                <a href="mailto:support@pcepay.co.uk" className="text-accent hover:underline">support@pcepay.co.uk</a>
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
