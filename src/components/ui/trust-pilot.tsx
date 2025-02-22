"use client";

import { useEffect } from "react";
import Script from "next/script";

export const TrustPilotWidget = () => {
  useEffect(() => {
    // This ensures the widget is properly initialized after the script loads
    if ((window as any).Trustpilot) {
      (window as any).Trustpilot.loadFromElement(document.getElementById("trustpilot-widget-container"));
    }
  }, []);

  return (
    <>
      <Script
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
      />
      <div
        id="trustpilot-widget-container"
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="67b97e62c71349483950c747"
        data-style-height="52px"
        data-style-width="100%"
        style={{
          background: 'transparent',
          '--tp-widget-background': 'transparent',
          '--tp-widget-text-color': '#fff',
          '--tp-widget-button-background': 'transparent',
          '--tp-widget-button-text-color': '#fff',
        } as React.CSSProperties}
      >
        <a
          href="https://www.trustpilot.com/review/devnation.org.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition-colors"
          style={{ color: '#fff' }}
        >
          Trustpilot
        </a>
      </div>
      <style jsx global>{`
        .trustpilot-widget {
          background: transparent !important;
        }
        .trustpilot-widget iframe {
          background: transparent !important;
        }
        .trustpilot-widget * {
          color: #fff !important;
        }
      `}</style>
    </>
  );
};
