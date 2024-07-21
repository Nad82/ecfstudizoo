import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable : "--font-sans", 
});

export const metadata: Metadata = {
  title: "Zoo Arcadia",
  description: "Le zoo Arcadia est un zoo situé en Bretagne, à 30 minutes de Rennes. Il est ouvert toute l'année et propose des activités pour toute la famille. Venez découvrir nos animaux et nos habitats !",
  keywords: "zoo, animaux, Bretagne, Rennes, famille, activités",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.svg" />
        </head>
        <body className={inter.className}>
          {children}
        </body>
    </html>
  );
}
