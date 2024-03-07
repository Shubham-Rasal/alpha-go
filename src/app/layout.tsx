import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alpha Go App",
  description: "Alphabet Learning App for Kids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <img
          src="/bg.png"
          className="absolute inset-0 object-cover w-full h-full z-[-1]"
        />
        {children}
      </body>
    </html>
  );
}
