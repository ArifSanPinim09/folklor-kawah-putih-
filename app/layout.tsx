import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar, Footer } from "@/components/layout";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Folklor Kawah Putih — Menjelajahi Cerita di Balik Kabut",
  description:
    "Website interpretasi digital folklor Kawah Putih. Jelajahi sejarah, legenda, dan kearifan lokal yang hidup di balik keindahan Gunung Patuha.",
  keywords: [
    "Kawah Putih",
    "folklor",
    "Gunung Patuha",
    "Bandung",
    "wisata alam",
    "cerita rakyat",
    "heritage",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
