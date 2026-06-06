"use client";
import { useEffect } from 'react';
import { useLocation } from '@/lib/router-shim';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
};
