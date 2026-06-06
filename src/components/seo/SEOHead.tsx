"use client";
import { useEffect, useMemo } from 'react';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
}

const BASE_URL = 'https://www.pcepay.co.uk';

export const SEOHead = ({ title, description, keywords, canonicalPath, jsonLd, noIndex, breadcrumbs }: SEOHeadProps) => {
  const allSchemas = useMemo(() => {
    const schemas: Record<string, unknown>[] = [];

    // Add breadcrumb schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": `${BASE_URL}${item.path}`
        }))
      });
    }

    // Add custom JSON-LD
    if (jsonLd) {
      const custom = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.push(...custom);
    }

    return schemas;
  }, [jsonLd, breadcrumbs]);

  useEffect(() => {
    document.title = title;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);

    if (noIndex) {
      setMeta('name', 'robots', 'noindex, nofollow');
    } else {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) robotsMeta.remove();
    }

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    if (canonicalPath !== undefined) {
      const fullUrl = `${BASE_URL}${canonicalPath}`;
      setMeta('property', 'og:url', fullUrl);
    }

    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    if (canonicalPath !== undefined) {
      const fullUrl = `${BASE_URL}${canonicalPath}`;
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', fullUrl);
    }

    // JSON-LD structured data
    document.querySelectorAll('script[data-seo-head="true"]').forEach(el => el.remove());
    if (allSchemas.length > 0) {
      allSchemas.forEach(schema => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-head', 'true');
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll('script[data-seo-head="true"]').forEach(el => el.remove());
    };
  }, [title, description, keywords, canonicalPath, allSchemas, noIndex]);

  return null;
};
