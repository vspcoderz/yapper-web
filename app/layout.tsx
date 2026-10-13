import type { Metadata, Viewport } from "next";
import { Funnel_Display, Geist_Mono, Poppins } from "next/font/google";

import PageWireframe from "@/app/components/page-wireframe";
import "./globals.css";

/** Display face big headlines. */
const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

/** Body / UI face. */
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://yapper.chat";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Yapper | chat for people who talk",
    template: "%s · Yapper",
  },
  description:
    "Yapper is a free chat app for communities. Servers, channels, DMs and voice. No paywalls, no paid tiers.",
  applicationName: "Yapper",
  keywords: ["chat", "discord alternative", "free chat app", "community", "yapper"],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Yapper",
    title: "Yapper | chat for people who talk",
    description:
      "Servers, channels, DMs and voice. Free, and staying that way.",
    images: [{ url: "/yapper-tile.svg", width: 1254, height: 1254 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yapper | chat for people who talk",
    description: "Servers, channels, DMs and voice. Free, and staying that way.",
    images: ["/yapper-tile.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fc6a39",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${funnelDisplay.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas text-fg">
        <PageWireframe />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
