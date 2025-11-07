import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Palmist Vision | Premium Palm Reading Reports",
  description:
    "Palmist Vision helps you discover your future through personalized palm reading reports delivered within 24 hours.",
  metadataBase: new URL("https://agentic-1e2dc87d.vercel.app"),
  openGraph: {
    title: "Palmist Vision | Premium Palm Reading Reports",
    description:
      "Submit your details and palm photos to receive a personalized palm reading report within 24 hours.",
    url: "https://agentic-1e2dc87d.vercel.app",
    siteName: "Palmist Vision",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palmist Vision | Premium Palm Reading Reports",
    description:
      "Submit your details and palm photos to receive a personalized palm reading report within 24 hours.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased bg-neutral-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
