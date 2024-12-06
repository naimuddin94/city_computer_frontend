import { gumelaArabic } from "@/assets/fonts";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "City Computers",
  description: "A computer accessories selling websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gumelaArabic.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
