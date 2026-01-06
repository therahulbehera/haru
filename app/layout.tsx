import type React from "react";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import {
  DM_Sans,
  Space_Mono,
  DM_Sans as V0_Font_DM_Sans,
  Space_Mono as V0_Font_Space_Mono,
  Source_Serif_4 as V0_Font_Source_Serif_4,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

// Initialize fonts
const _dmSans = V0_Font_DM_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
});
const _spaceMono = V0_Font_Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const _sourceSerif_4 = V0_Font_Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({ subsets: ["latin"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Haru - Build Better Habits, Spring into Growth",
  description:
    "Transform your life with Haru, the modern habit tracker designed for sustainable growth. Track daily habits, visualize progress, and build lasting change.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
