import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { organizationSchema, personSchema, physicianSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <JsonLd data={[physicianSchema(), organizationSchema(), personSchema(), websiteSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
