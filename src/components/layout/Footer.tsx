"use client";
import { Link } from '@/lib/router-shim';
import { Phone, Mail, Linkedin, Facebook, Twitter, Instagram, Smartphone } from 'lucide-react';
const qrCode = '/assets/qr-code.png';
const peacePayrollLogo = '/assets/peace-payroll-logo.png';

const footerLinks = {
  services: [
    { name: 'Payroll Services', href: '/services/payroll-services' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Why Peace Payroll?', href: '/why-peace' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/peace-payroll-limited/' },
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/peace.payroll' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/PeaceLimited' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/peacepayroll/' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img
                src={peacePayrollLogo}
                alt="Peace Payroll"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Peace Payroll is an umbrella company with a difference. We provide exceptional payroll and employment services to contractors, agency and self employed workers.
            </p>
            <div className="space-y-3 mb-6">
              <a
                href="tel:+442045054951"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                020 4505 4951
              </a>
              <a
                href="mailto:support@pcepay.co.uk"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                support@pcepay.co.uk
              </a>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center text-white hover:from-orange-500 hover:to-accent hover:scale-110 hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile App Download */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-accent" />
              Mobile App
            </h3>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Scan to download our app for iOS & Android
            </p>
            <div className="bg-white rounded-xl p-3 inline-block">
              <img
                src={qrCode}
                alt="Download Peace Payroll App"
                className="w-24 h-24"
              />
            </div>
            <p className="text-xs text-primary-foreground/60 mt-2">
              Works on iPhone & Android
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-primary-foreground/60">
            <p>© {currentYear} Peace Payroll Limited — UK registered company. All rights reserved.</p>
            <p>
              <Link to="/privacy" className="text-accent hover:underline">Privacy</Link>{' · '}
              <Link to="/cookies" className="text-accent hover:underline">Cookies</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
