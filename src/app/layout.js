import { Montserrat } from 'next/font/google'
import "./globals.css";
import { TranslationProvider } from '../context/TranslationContext';
import Navbar from '../components/Navbar';
import MainFooter from '../components/Footer';
import Script from 'next/script';
import CookieConsentProvider from "../components/cookie/CookieConsentProvider.jsx";
import SmoothScroll from '@/components/SmoothScroll';
import ScrollToTop from '@/components/ScrollToTop';
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata = {
  metadataBase: new URL('https://www.jeftechno.com'),
  title: "Industrial Electrical Engineering Services | JEF Techno",
  description:
    "JEF Techno delivers industrial electrical engineering, lightning protection, and technical solutions with expert support, quality service, and trusted results.",
  keywords:
    "industrial electrical engineering services, electrical engineering company, industrial electrical solutions, electrical engineering consultant, electrical services provider, electrical system design, industrial power solutions, electrical maintenance services, engineering consultancy services, industrial automation solutions, lightning protection services, lightning protection system, earthing solutions, electrical safety solutions, electrical inspection services, power distribution solutions, industrial electrical services India, manufacturing electrical solutions, commercial electrical engineering, infrastructure electrical solutions, industrial safety solutions",
  openGraph: {
    title: "Industrial Electrical Engineering Services | JEF Techno",
    url: "https://www.jeftechno.com/",
    description:
      "JEF Techno provides industrial electrical engineering, lightning protection, and reliable technical solutions for businesses.",
    siteName: "JEF Techno",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Electrical Engineering Services | JEF Techno",
    description:
      "Expert industrial electrical engineering, lightning protection, and technical solutions from JEF Techno.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.jeftechno.com/",
  },
  icons: {
    icon: "/HomePageImg/NavbarImg/JefTechno_logo_ 2.png",
  },
  verification: {
    google: 'NdAWjzLB8pCxgjiIspNZg8SmkWugCBbH2BsvoqKQjMM',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload first banner poster to prevent black flash on initial load */}
        <link rel="preload" as="image" href="/HomePageImg/Banner-1-poster.jpg" />
        
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-53ZRLRWM');
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9QGX5CDEGB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9QGX5CDEGB');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.jeftechno.com/#website",
                  url: "https://www.jeftechno.com/",
                  name: "JEF Techno",
                  description: "Industrial Electrical Engineering Services & Consulting",
                  publisher: {
                    "@id": "https://www.jeftechno.com/#organization"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.jeftechno.com/#organization",
                  name: "JEF Techno",
                  url: "https://www.jeftechno.com/",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.jeftechno.com/HomePageImg/NavbarImg/JefTechno_logo_%202.png"
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+91-80-26485082",
                    contactType: "customer service"
                  },
                  sameAs: [
                    "https://www.facebook.com/JEFTECHNO/",
                    "https://x.com/JeftechnoIndia",
                    "https://www.linkedin.com/company/jefgroup/",
                    "https://www.youtube.com/@JEFgroup"
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-53ZRLRWM"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <TranslationProvider>
          <div id="google_translate_element" style={{ display: "none" }}></div>
          <Navbar />
          <SmoothScroll />
          {children}
          {/* Twak.io live chat widget */}
          <Script id="tawk-io" strategy="lazyOnload">{`
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/5a4d451f4b401e45400bdbcc/default';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `}</Script>
          <MainFooter />
          <CookieConsentProvider />
          <ScrollToTop />
        </TranslationProvider>
      </body>
    </html>
  );
}