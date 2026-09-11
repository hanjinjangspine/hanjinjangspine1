import type { Metadata } from "next";
import "./globals.css";
import { AcademicTrust } from "@/components/AcademicTrust";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import PhotoOwnershipNotice from "@/components/PhotoOwnershipNotice";
import { createMetadata } from "@/lib/metadata";
import { organizationSchema, personSchema, physicianSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import SiteAnalytics from "@/components/SiteAnalytics";

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
        <SiteAnalytics />
        <JsonLd data={[physicianSchema(), organizationSchema(), personSchema(), websiteSchema()]} />
        <PhotoOwnershipNotice />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <AcademicTrust />
        <Footer />
      </body>
    </html>
  );
}
