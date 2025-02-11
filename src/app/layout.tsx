import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  description: "Connecting Talent, Deliving Excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="fixed z-0 w-full h-full">
        
        <Squares 
            speed={0.2} 
            squareSize={40}
            direction='diagonal' 
            borderColor='#444444'
            hoverFillColor='#222'
        />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
