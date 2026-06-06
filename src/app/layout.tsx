import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Peace Payroll: Professional Umbrella Company Services",
  description:
    "Peace Payroll is a reliable umbrella company providing HMRC compliant, accurate and flexible payroll solutions for contractors, agency workers and self-employed workers.",
  metadataBase: new URL("https://www.pcepay.co.uk"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <TooltipProvider>
            <Suspense fallback={null}>{children}</Suspense>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
