import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WHIP | Walnut Hills Instrumental Parents",
  description:
    "Support Walnut Hills High School student musicians through donations, volunteering, merchandise, and community engagement.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
