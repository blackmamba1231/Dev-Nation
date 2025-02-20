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
  title: "Dev Nation",
  description: "Building Digital Excellence",
  icons: {
    icon: "/dn_png.png",
    apple: "/dn_png.png",
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
        <meta name="description" content="Building Digital Excellence" />
        <meta property="og:title" content="Dev Nation" />
        <meta property="og:description" content="Building Digital Excellence" />
        <meta property="og:image" content="/dn_png.png" />
        <meta property="og:url" content="https://devnation.org.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/dn_png.png" />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Dev Nation",
            "url": "https://devnation.org.in",
            "logo": "https://devnation.org.in/dn_png_black.png",
            "description": "Building Digital Excellence",
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

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
