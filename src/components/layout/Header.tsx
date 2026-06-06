"use client";
import { useState } from 'react';
import { Link, useLocation } from '@/lib/router-shim';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const peacePayrollLogo = '/assets/peace-payroll-logo.png';

const navigation = [
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Payroll Services', href: '/services/payroll-services' },
    ]
  },
  { name: 'Why Peace Payroll?', href: '/why-peace' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'About', href: '/about' },
  { name: 'Payroll App', href: '/payroll-app' },
  { name: 'Contact Us', href: '/contact' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <nav className="container-custom" aria-label="Global">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={peacePayrollLogo} 
              alt="Peace Payroll" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.dropdown && setDropdownOpen(item.name)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "px-3 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200 flex items-center gap-1 whitespace-nowrap",
                    isActive(item.href) 
                      ? "text-accent" 
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  )}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown */}
                {item.dropdown && dropdownOpen === item.name && (
                  <div 
                    className="absolute top-full left-0 pt-2 w-48 z-50"
                    onMouseEnter={() => setDropdownOpen(item.name)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <div className="bg-card rounded-lg shadow-card-hover border border-border/50 py-2 animate-fade-in">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-accent/5 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Phone */}
          <div className="hidden lg:flex lg:items-center">
            <a href="tel:+442045054951" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              020 4505 4951
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      isActive(item.href) 
                        ? "text-accent bg-accent/5" 
                        : "text-foreground hover:text-accent hover:bg-accent/5"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-8 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-4 px-4 flex flex-col gap-3">
                <a href="tel:+442045054951" className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  020 4505 4951
                </a>
                <Button variant="accent" asChild className="w-full">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
