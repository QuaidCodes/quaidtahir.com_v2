
import type { Metadata } from "next";

import Header from "@/app/components/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Quaid Tahir Portfolio",
  description: "Quaid Tahir - Software Engineer | Portfolio | Showcase | Resume",
  keywords: ['software engineering', 'software', 'engineer', 'portfolio', 'sde'],
  icons: {
    icon: "path", // update this path for icon
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
