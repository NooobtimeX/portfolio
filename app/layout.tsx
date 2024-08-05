import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume Wongsaphat Puangsorn (NooobtimeX)",
  abstract:
    "Resume of Wongsaphat Puangsorn (NooobtimeX) - Thammasat University Student and Software Developer from Thailand",

  description:
    "Resume of Wongsaphat Puangsorn (NooobtimeX) - Thammasat University Student and Software Developer from Thailand",
  keywords:
    "Wongsaphat Puangsorn, NooobtimeX, Thammasat University, Software Developer, Thailand",
  icons: "/favicon.ico",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
