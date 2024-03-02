import type { Metadata } from "next";
import { Poppins, Titillium_Web } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Bottom from "@/components/ui/bottom";
import Header from "@/components/home/Header";
import ToTop from "@/components/shared/toTop";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  description:
    "HackQuest 24: A 24-hour online hackathon by IEEE Delhi Section SAC. Register now and join us to solve real-world challenges, learn new skills, and win exciting prizes. Choose from various tracks and collaborate with other hackers. Hurry, registration closes soon!",
  keywords:
    "hackathon, events, ieee, delhi, section, sac, hackquest, healthtech, cybersecurity, offline, online, hack, hustle, hurdle, 2024",
  robots: "index, follow",
  authors: [{ name: "IEEE Delhi Section SAC" }, { name: "Dipesh Ranjan" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="HackQuest: Hurdle | Hack | Hustle" />
        <meta
          property="og:description"
          content="HackQuest 24: A 24-hour online hackathon by IEEE Delhi Section SAC. Register now and join us to solve real-world challenges, learn new skills, and win exciting prizes. Choose from various tracks and collaborate with other hackers. Hurry, registration closes soon!"
        />
        <meta
          property="og:image"
          content="https://www.hackquest.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhackquest%20logo.d942a3f7.png&w=3840&q=75"
        />{" "}
        {/* Replace with your actual image URL */}
        <meta property="og:url" content="https://www.hackquest.in" />
        <meta property="og:type" content="website" />
      </head>
      <body className={`${poppins.className}, ${titillium.style}`}>
        <Analytics />
        <SpeedInsights />
        <Header />
        {children}
        <ToTop />
        <Bottom />
      </body>
      <GoogleAnalytics gaId="G-SDDY8MD257" />
    </html>
  );
}
