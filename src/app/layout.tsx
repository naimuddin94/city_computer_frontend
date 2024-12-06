<<<<<<< HEAD
import { gumelaArabic } from "@/assets/fonts";
=======
import Navbar from "@/components/shared/Navbar";
>>>>>>> 8ab54666d26d471c636b4cdfafa4237bc890f2df
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
<<<<<<< HEAD
      <body className={`${gumelaArabic.className} antialiased`}>
=======
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
>>>>>>> 8ab54666d26d471c636b4cdfafa4237bc890f2df
        {children}
      </body>
    </html>
  );
}
