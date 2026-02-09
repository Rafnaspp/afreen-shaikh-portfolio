


import type { Metadata } from "next";
import { Playfair_Display, Lato, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afreen Shaikh | Clinical Psychologist",
  description: "Clinical Psychologist with 7+ years of experience. Services for children, adolescents, and adults related to anxiety, depression, ADHD, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${lato.variable} ${dancing.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
