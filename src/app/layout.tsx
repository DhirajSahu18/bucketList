import type { Metadata } from "next";
import { Manrope, Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppSticky } from "@/components/ui/WhatsAppSticky";
import { OrganizationSchema } from "@/components/seo/StructuredData";
import { Analytics } from "@/components/seo/Analytics";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bucketlist — Good People. Great Places. Trips Planned Properly.",
    template: "%s | Bucketlist",
  },
  description:
    "Community travel expeditions across Himachal, Uttarakhand, Kerala, Goa, and Gokarna. Well-planned trips with zero on-ground hassle.",
  metadataBase: new URL("https://thebucketlist.co"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thebucketlist.co",
    siteName: "Bucketlist",
    title: "Bucketlist — Good People. Great Places. Trips Planned Properly.",
    description:
      "Community travel expeditions across Himachal, Uttarakhand, Kerala, Goa, and Gokarna. Well-planned trips with zero on-ground hassle.",
    images: [
      {
        url: "/images/trips/himachal-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Bucketlist community travellers on a mountain expedition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bucketlist — Community Trips Across India",
    description:
      "Well-planned community trips across Himachal, Uttarakhand, Kerala, Goa, and Gokarna.",
    images: ["/images/trips/himachal-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} ${spaceMono.variable}`}
    >
      <body className="font-sans bg-[#faf7f2] text-[#1c1917] antialiased selection:bg-[#FACC15] selection:text-[#1c1917]">
        <OrganizationSchema />
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppSticky />
      </body>
    </html>
  );
}
