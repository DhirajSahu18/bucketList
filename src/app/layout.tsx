import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppSticky } from "@/components/ui/WhatsAppSticky";
import { OrganizationSchema } from "@/components/seo/StructuredData";
import { Analytics } from "@/components/seo/Analytics";

const inter = Inter({
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
    default: "TheBucketList.co — Founder-Led Trip Site",
    template: "%s | TheBucketList.co",
  },
  description:
    "Two founders. Five years of trips. Zero outsourced groups. Small-group journeys across India — personally led by Aryan & Kashshish.",
  metadataBase: new URL("https://thebucketlist.co"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thebucketlist.co",
    siteName: "TheBucketList.co",
    title: "TheBucketList.co — Founder-Led Trip Site",
    description:
      "Two founders. Five years of trips. Zero outsourced groups. Small-group journeys across India — personally led by Aryan & Kashshish.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheBucketList.co — Founder-Led Trips Across India",
    description:
      "Small-group journeys personally led by Aryan & Kashshish.",
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
      className={`${inter.variable} ${playfair.variable} ${spaceMono.variable}`}
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
