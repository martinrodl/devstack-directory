import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devstack.directory"),
  title: {
    default: "DevStack — Developer Tools Directory for Indie Hackers",
    template: "%s | DevStack",
  },
  description:
    "Curated directory of the best developer tools, APIs, and services for indie hackers and solo founders building profitable SaaS products.",
  keywords: [
    "developer tools",
    "saas tools",
    "indie hacker",
    "api directory",
    "startup tools",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devstack.directory",
    siteName: "DevStack",
    title: "DevStack — Developer Tools Directory for Indie Hackers",
    description:
      "Curated directory of the best developer tools, APIs, and services for indie hackers and solo founders.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevStack — Developer Tools Directory",
    description:
      "55+ curated developer tools for indie hackers and solo founders.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-zinc-950 text-zinc-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
