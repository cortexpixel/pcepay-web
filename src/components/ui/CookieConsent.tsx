"use client";
import { useState, useEffect } from 'react';
import { Button } from './button';
import { Cookie, X } from 'lucide-react';
import { Link } from '@/lib/router-shim';

const COOKIE_CONSENT_KEY = 'peace-payroll-cookie-consent';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <div className="container-custom">
        <div className="bg-card border border-border shadow-card-hover rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Cookie className="w-6 h-6 text-accent" />
            </div>
          </div>
          
          <div className="flex-1 pr-8 md:pr-0">
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              We value your privacy
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We use cookies to enhance your browsing experience and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies. 
              Read our{' '}
              <Link to="/cookies" className="text-accent hover:underline">
                Cookie Policy
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-accent hover:underline">
                Privacy Policy
              </Link>{' '}
              for more information.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="w-full sm:w-auto"
            >
              Decline
            </Button>
            <Button
              variant="accent"
              size="sm"
              onClick={handleAccept}
              className="w-full sm:w-auto"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
