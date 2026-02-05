import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/provider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// export const metadata = {
//     title: {
//         default: "Haqq Kitchen – Delicious Meals, Recipes & Easy Order Online",
//         template: "%s | Haqq kitchen",
//     },
//     description: "Car washing system",
// };
export const metadata = {
    metadataBase: new URL("https://haqq-kitchen.vercel.app"),
    title: {
        default: "Haqq Kitchen – Delicious Meals, Recipes & Easy Order Online",
        template: "%s | Haqq Kitchen",
    },
    description: "Explore Haqq Kitchen – discover amazing foods, recipes, and order online",
    openGraph: {
        title: "Haqq Kitchen – Delicious Meals & Recipes",
        description: "Explore Haqq Kitchen — tasty meals & easy ordering.",
          keywords: [
    "Haqq Kitchen",
    "food ordering",
    "online food",
    "restaurant",
    "recipes",
    "Bangladesh food",
    "chef food",
    "meal delivery",
  ],
        url: "https://haqq-kitchen.vercel.app/",
        siteName: "Haqq Kitchen",
        images: [
            {
                url: "https://i.ibb.co.com/h1wW6wBW/Screenshot-2026-02-05-at-10-37-15-PM.png",
                width: 1200,
                height: 630,
                alt: "Haqq Kitchen Homepage Preview",
            }
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        images: ["https://i.ibb.co.com/h1wW6wBW/Screenshot-2026-02-05-at-10-37-15-PM.png"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    );
}