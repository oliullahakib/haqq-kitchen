import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "./_components/Shared/Navbar/Navbar";
import Provider from "@/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Haqq Kitchen",
  description: "Kitchen where you can find your bally full",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar></Navbar>
          <div className="container mx-auto my-5">
            {children}
          </div>
        </body>
      </html>
  );
}
