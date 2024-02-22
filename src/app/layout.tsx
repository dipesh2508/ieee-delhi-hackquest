import type { Metadata } from "next";
import { Poppins, Titillium_Web } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Bottom from "@/components/ui/bottom";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "HackQuest",
  description: "Hackathon organized by IEEE Delhi Section",
  keywords: "hackathon, ieee, delhi, section, hackquest, healthtech, cybersecurity, offline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={`${poppins.className}, ${titillium.style}`}>
        <NavBar />
        {children}
        <Bottom />
      </body>
    </html>
  );
}
