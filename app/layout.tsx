import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import ModeBtn from "@/components/modeBtn";
import ThemeContextProvider from "@/contexts/theme";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PONGSATHON",
  description: "Pongsathon a web developer",
  keywords: [
    "developer",
    "react developer",
    "angular developer",
    "thailand",
    "pongsathon",
    "wongondee",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth scroll-py-16">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeContextProvider>
          <Header />
          {children}
          <ModeBtn />
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
