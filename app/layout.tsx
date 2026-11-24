import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "NusaKultur — Find your way into Indonesia",
  description: "Discover Indonesia through its living cultures, local hosts, and communities.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${cormorant.variable} ${dmSans.variable}`}>{children}</body></html>;
}
