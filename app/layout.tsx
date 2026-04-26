import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import { Header } from "@/components/storefront/header";
import { Footer } from "@/components/storefront/footer";

export const metadata: Metadata = {
  title: "Asteria Storefront",
  description: "Production-ready premium storefront demo built with Next.js"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container-page py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
