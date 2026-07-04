import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Ajay Patel — Software Engineer",
  description:
    "Software engineer building production LLM, RAG, and multi-agent systems. IIT Hyderabad '24 · Equal · Hyderabad, India.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${fraunces.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
