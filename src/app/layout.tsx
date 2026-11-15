import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Diggraph Consulting — Engineering, Infrastructure & EPC Consulting",
    template: "%s | Diggraph Consulting",
  },
  description:
    "Connecting engineering insight, infrastructure research and commercial strategy to support businesses operating across the construction and infrastructure sectors.",
  keywords: [
    "EPC consulting",
    "infrastructure research",
    "construction business development",
    "engineering consulting",
    "project research",
    "infrastructure advisory",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Diggraph Consulting",
    title: "Diggraph Consulting — Engineering, Infrastructure & EPC Consulting",
    description:
      "Connecting engineering insight, infrastructure research and commercial strategy to support businesses operating across the construction and infrastructure sectors.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diggraph Consulting",
    description:
      "Engineering, infrastructure research and commercial strategy consulting.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-warm-white text-charcoal-700">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
