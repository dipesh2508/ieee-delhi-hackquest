import type { Metadata } from "next";
import { Poppins, Titillium_Web } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Bottom from "@/components/ui/bottom";
import Header from "@/components/home/Header";
import ToTop from "@/components/shared/toTop";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    "Hackathon organized by IEEE Delhi Section Students Activities Committee",
  keywords:
    "hackathon, ieee, delhi, section, hackquest, healthtech, cybersecurity, offline, online, hack, hustle, hurdle",
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
        <meta property="og:title" content="HackQues: Hurdle | Hack | Hustle" />
        <meta
          property="og:description"
          content="Hackathon organized by IEEE Delhi Section Students Activities Committee"
        />
        <meta
          property="og:image"
          content="https://www.hackquest.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhackquest%20logo.d942a3f7.png&w=3840&q=75"
        />{" "}
        {/* Replace with your actual image URL */}
        <meta property="og:url" content="https://www.hackquest.in" />
        <meta property="og:type" content="website" />
        {/* Google tag (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}")`,
          }}
        />
      </head>
      <body className={`${poppins.className}, ${titillium.style}`}>
        <Analytics />
        <SpeedInsights />
        <Header />
        {children}
        <ToTop />
        <Bottom />
      </body>
    </html>
  );
}
