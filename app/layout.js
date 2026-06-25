import { Monda, Jura, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/menu/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

const monda = Monda({
  variable: "--font-monda",
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const jura = Jura({
  variable: "--font-jura",
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://danieljustiz.com";

const description =
  "Daniel Justiz is a Tampa-based web developer and designer building high-performance Shopify storefronts and custom WordPress websites, from first wireframe to launch, plus hosting, domains, email, and SEO.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Daniel Justiz | Shopify & WordPress Web Developer & Designer",
    template: "%s | Daniel Justiz",
  },
  description,
  keywords: [
    "Shopify developer",
    "WordPress developer",
    "web designer",
    "web developer Tampa",
    "custom WordPress website",
    "Shopify storefront",
    "ecommerce website design",
    "freelance web developer",
    "Daniel Justiz",
  ],
  authors: [{ name: "Daniel Justiz", url: siteUrl }],
  creator: "Daniel Justiz",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Daniel Justiz",
    title: "Daniel Justiz | Shopify & WordPress Web Developer & Designer",
    description,
    images: [
      {
        url: "/webdev/dynaxeworkforce_website_cards.jpg",
        width: 1200,
        height: 630,
        alt: "Websites designed and built by Daniel Justiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Justiz | Shopify & WordPress Web Developer & Designer",
    description,
    images: ["/webdev/dynaxeworkforce_website_cards.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Structured data — Person + WebSite. Helps search engines and AI engines
// identify who this site is about and improves rich-result eligibility.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Daniel Justiz",
      url: siteUrl,
      jobTitle: "Web Developer & Designer",
      description,
      knowsAbout: [
        "Web Development",
        "Web Design",
        "Shopify",
        "WordPress",
        "SEO",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tampa",
        addressRegion: "FL",
        addressCountry: "US",
      },
      sameAs: [
        "https://www.linkedin.com/in/daniel-justiz-a76a3218a/",
        "https://github.com/danielJ305",
        "https://www.behance.net/danieljustizMedia/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Daniel Justiz",
      description,
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${monda.variable} ${jura.variable} ${pixelify.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
