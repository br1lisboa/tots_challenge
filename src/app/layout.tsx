import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components";

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
    url: "https://your-domain.com", // Reemplaza con el dominio de tu aplicación.
    type: "website",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg", // Reemplaza con la URL de una imagen para compartir en redes sociales.
        width: 1200,
        height: 630,
        alt: "LeafletJS with Apollo Client",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
