import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CallBar from "@/components/layout/CallBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SmileCare Dental | Family Dentist in București",
  description: "Professional family dental care in București. Book your appointment today for comprehensive dental services in a comfortable environment.",
  keywords: "dentist, family dentist, dental care, București, teeth cleaning, dental services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CallBar />
      </body>
    </html>
  );
}
