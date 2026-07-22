import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import WhatsAppButton from "@/src/components/WhatsAppButton";
import AosInitializer from "@/src/components/AosInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreenCircuits | Premium PCB Assembly & Fabrication",
  description: "High-precision SMT/THT PCB assembly and custom PCB fabrication services. Prototypes delivered in 24-48 hours. Certified quality.",
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
      <body className="min-h-full flex flex-col">
        <AosInitializer />
        <Navbar/>
        {children}
        <Footer/>
        <WhatsAppButton/>
      </body>
    </html>
  );
}
