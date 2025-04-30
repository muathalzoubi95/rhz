"use client"

import Script from "next/script"
import { useEffect } from "react"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export default function GoogleAdsConversion() {
  useEffect(() => {
    // Make sure gtag is available
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "conversion", {
        send_to: "AW-17043763058/2mzmCJv8078aEPLejL8_",
      })
    }
  }, [])

  return (
    <>
      {/* Base Google Ads script - add this in your layout if not already present */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17043763058" strategy="afterInteractive" />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17043763058');
        `}
      </Script>
    </>
  )
}
