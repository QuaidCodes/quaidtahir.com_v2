"use client";

import Header from "@/app/components/Header";

import "./globals.css";

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
