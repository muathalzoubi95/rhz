import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { Analytics } from "@vercel/analytics/react"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { CrispChat } from "@/components/crisp"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head >
        <Script defer src="https://shown.io/metrics/jE3kaWYm9Z" type="text/javascript"></Script>
          
                  </head>
        <body
          className="min-h-screen bg-background font-sans antialiased"
        >
<Script id="twipla-tracking" strategy="afterInteractive">
  {`
    (function(v,i,s,a,t){
      v[t]=v[t]||function(){
        (v[t].v=v[t].v||[]).push(arguments)
      };
      if(!v._visaSettings){
        v._visaSettings={}
      }
      v._visaSettings[a]={
        v:'1.0',
        s:a,
        a:'1',
        t:t
      };
      var b=i.getElementsByTagName('body')[0];
      var p=i.createElement('script');
      p.defer=1;
      p.async=1;
      p.src=s+'?s='+a;
      b.appendChild(p)
    })(window,document,'//app-worker.visitor-analytics.io/main.js','e8b5c467-9f3f-11f1-9aa5-960004340fd3','va')
  `}
</Script>
          <Analytics/>
          <CrispChat/>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-5 pt-6">{children}</div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=AW-10860808864`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10860808864');
          `}
        </Script>
        </body>
      </html>
    </>
  )
}
