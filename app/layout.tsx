import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://walnuthillsmusic.org"),
  title: {
    default: "Walnut Hills Instrumental Parents | Cincinnati Music Support",
    template: "%s | Walnut Hills Instrumental Parents",
  },
  description:
    "Support Walnut Hills High School student musicians in Cincinnati through donations, volunteering, merchandise, concerts, and community engagement.",
  applicationName: "Walnut Hills Instrumental Parents",
  keywords: [
    "Walnut Hills Instrumental Parents",
    "WHIP",
    "Walnut Hills High School music",
    "Cincinnati music education",
    "Walnut Hills band",
    "Walnut Hills orchestra",
    "Walnut Hills choir",
    "Walnut Hills marching band",
  ],
  alternates: { canonical: "/" },
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
  icons: {
    icon: [
      { url: "/favicon-music.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon-music.svg", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: "/favicon-music.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Walnut Hills Instrumental Parents",
    title: "Walnut Hills Instrumental Parents | Cincinnati Music Support",
    description:
      "Help Walnut Hills High School student musicians thrive across band, orchestra, choir, jazz, steel drums, and marching band.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Walnut Hills Instrumental Parents",
    description:
      "Supporting student musicians at Walnut Hills High School in Cincinnati.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://walnuthillsmusic.org/#organization",
      name: "Walnut Hills Instrumental Parents",
      alternateName: "WHIP",
      url: "https://walnuthillsmusic.org/",
      logo: {
        "@type": "ImageObject",
        "@id": "https://walnuthillsmusic.org/#logo",
        url: "https://walnuthillsmusic.org/whip-horizontal-logo.png",
        contentUrl: "https://walnuthillsmusic.org/whip-horizontal-logo.png",
        width: 2048,
        height: 597,
        caption: "Walnut Hills Instrumental Parents",
      },
      image: { "@id": "https://walnuthillsmusic.org/#logo" },
      nonprofitStatus: "Nonprofit501c3",
      areaServed: { "@type": "City", name: "Cincinnati" },
      sameAs: [
        "https://www.instagram.com/whhs.marchingband/",
        "https://www.facebook.com/groups/190343281738609",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://walnuthillsmusic.org/#website",
      url: "https://walnuthillsmusic.org/",
      name: "Walnut Hills Instrumental Parents",
      alternateName: "WHIP",
      publisher: { "@id": "https://walnuthillsmusic.org/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://walnuthillsmusic.org/#webpage",
      url: "https://walnuthillsmusic.org/",
      name: "Walnut Hills Instrumental Parents | Cincinnati Music Support",
      description:
        "Support Walnut Hills High School student musicians through donations, volunteering, merchandise, concerts, and community engagement.",
      isPartOf: { "@id": "https://walnuthillsmusic.org/#website" },
      about: { "@id": "https://walnuthillsmusic.org/#organization" },
      primaryImageOfPage: { "@id": "https://walnuthillsmusic.org/#logo" },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
