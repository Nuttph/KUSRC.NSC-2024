import type { Metadata } from "next";
import { Noto_Sans_Thai_Looped } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav/Navbar";
import Ccookie from "@/components/fixed/Ccookie";
import Footer from "@/components/Nav/Footer";

const notoSansThaiLooped = Noto_Sans_Thai_Looped({
  weight: "400",
  subsets: ["thai"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansThaiLooped.className}>
        <div className="sticky top-0 z-[5000]">{/* <Navbar /> */}</div>
        {children}
        <div className="fixed bottom-[41px] w-full flex justify-center z-[50]">
          <Ccookie />
        </div>
        <div className="">{/* <Footer /> */}</div>
      </body>
    </html>
  );
}
