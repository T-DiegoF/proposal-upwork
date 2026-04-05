import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Teko } from "next/font/google";
import "./globals.css";

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-display",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CrewCore MVP | Industrial Frontend Concept",
  description:
    "A production-grade Next.js frontend concept for a construction operations MVP proposal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${teko.variable} ${plexSans.variable} ${plexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
