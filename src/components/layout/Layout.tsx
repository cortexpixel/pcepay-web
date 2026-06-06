"use client";
import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from '../ui/ScrollToTop';
import { PageTransition } from '../animations/PageTransition';
import { CookieConsent } from '../ui/CookieConsent';
import { useScrollToTop } from '@/hooks/useScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};
