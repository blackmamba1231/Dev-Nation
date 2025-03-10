import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head"; 
import "./globals.css";
import Squares from "@/bg/Backgrounds/Squares/Squares";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Nation - Connecting Talent, Delivering Excellence",
  description: "Dev Nation - Your trusted partner in software development. We connect exceptional talent with innovative projects, delivering excellence in web development, mobile apps, and digital solutions.",
  icons: {
    icon: [
      { url: "https://devnation.org.in/dn_png.png", type: "image/png" }    ],
    apple: { url: "https://devnation.org.in/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Dev Nation",
    statusBarStyle: "default",
    capable: true,
  },
  keywords: ["Dev Nation", "DevNation", "Dev Nation India", "Web Development", "Mobile Apps", "Digital Solutions", "Software Development", "IT Services", "Technology Consulting", "Software Engineering", "Development Team", "Tech Talent", "India"],
  authors: [{ name: "Dev Nation", url: "https://devnation.org.in" }],
  openGraph: {
    title: "Dev Nation - Connecting Talent, Delivering Excellence",
    description: "Dev Nation - Your trusted partner in software development. We connect exceptional talent with innovative projects, delivering excellence in web development, mobile apps, and digital solutions.",
    type: "website",
    locale: "en_IN",
    siteName: "Dev Nation",
    url: "https://devnation.org.in",
    images: [{ url: "https://devnation.org.in/dn_ig_4.png", width: 1200, height: 630, alt: "Dev Nation Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Nation - Connecting Talent, Delivering Excellence",
    description: "Dev Nation - Your trusted partner in software development. We connect exceptional talent with innovative projects.",
    site: "@DevNation178044",
    creator: "@DevNation178044",
    images: [{ url: "https://devnation.org.in/dn_ig_4.png", width: 1200, height: 630, alt: "Dev Nation Logo" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: "https://devnation.org.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Dev Nation - Your trusted partner in software development. We connect exceptional talent with innovative projects, delivering excellence in web development, mobile apps, and digital solutions." />
        <meta property="og:title" content="Dev Nation - Connecting Talent, Delivering Excellence" />
        <meta property="og:description" content="Dev Nation - Your trusted partner in software development. We connect exceptional talent with innovative projects, delivering excellence in web development, mobile apps, and digital solutions." />
        <meta property="og:image" content="https://devnation.org.in/dn_ig_4.png" />
        <meta property="og:url" content="https://devnation.org.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/dn_ig_4.png" />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Dev Nation",
            "url": "https://devnation.org.in",
            "logo": "https://devnation.org.in/dn_ig_4.png",
            "image": "https://devnation.org.in/dn_ig_4.png",
            "description": "Dev Nation - Your trusted partner in software development. We connect exceptional talent with innovative projects, delivering excellence in web development, mobile apps, and digital solutions.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.linkedin.com/company/dev-nation-org-in",
              "https://x.com/DevNation178044"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi"]
            }
          })}
        </script>
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed z-0 w-full h-full" aria-hidden="true">
          <Squares
            speed={0.2}
            squareSize={40}
            direction="diagonal"
            borderColor="#444444"
            hoverFillColor="#222"
          />
          </div>

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
