import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Osborn Transport Services | Fleet Maintenance & Recovery",
    template: "%s | Osborn Transport Services",
  },
  description:
    "Osborn Transport Services — professional fleet maintenance, roadside repairs, breakdown & recovery across Bedfordshire and the UK. ISO9001 registered. Call 01525 383 548.",
  keywords: [
    "fleet maintenance",
    "commercial vehicle servicing",
    "roadside repairs",
    "breakdown recovery",
    "MoT testing",
    "Leighton Buzzard",
    "Bedfordshire",
  ],
  openGraph: {
    title: "Osborn Transport Services | Fleet Maintenance & Recovery",
    description:
      "Professional fleet maintenance, servicing & 24/7 breakdown recovery. ISO9001 registered. Based in Leighton Buzzard, Bedfordshire.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
