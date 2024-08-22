import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer, Hero } from "@/components";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LeafletJS with Apollo Client",
  description: "Application dedicated to TOST",
  authors: [{ name: "Bruno Lisboa" }],
  keywords: [
    "LeafletJS",
    "Apollo Client",
    "TOST",
    "Next.js 14",
    "GraphQL",
    "Mapping",
  ],
  openGraph: {
    title: "LeafletJS with Apollo Client",
    description:
      "An application dedicated to TOST, utilizing LeafletJS and Apollo Client.",
    url: "https://tots-challenge-lisboa.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
