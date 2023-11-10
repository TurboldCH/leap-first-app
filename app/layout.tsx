import type { Metadata } from "next";
import { Mulish, Cabin } from "next/font/google";
import "./globals.css";
import React from "react";

const mulish = Mulish({ subsets: ["latin"] });
const cabin = Cabin({subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const body = {
    margin: 0,
    padding: 0,
  };

  return (
    <html lang="en">
      <body style={body} className={mulish.className}>
        {children}
      </body>
    </html>
  );
}
