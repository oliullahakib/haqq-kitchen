import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import SideNaveBard from "./_componets/Shared/SideNaveBard";
import TopNavbar from "./_componets/Shared/TopNavbar";

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
          <div className="">
            <SideNaveBard/>
            <TopNavbar></TopNavbar>
            <div className="pl-80 pt-5">
                {children}
            </div>
          </div>
        </body>
      </html>
  );
}
