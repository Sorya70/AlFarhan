import { Cairo, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MobileMenuProvider from "@/context/MobileMenuContext";
import FixedButtons from "@/ui/FixedButtons";

const roboto = Roboto({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });

export const metadata = {
  title: "Al Farhan International – Gulf Jobs Manpower Services",
  description:
    "Al Farhan International Manpower Service – Top consultancy in Rajasthan India. Contact us for trusted overseas job placement in Gulf countries. 5.0 rating on Google. Call +91-9785767664.",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Gulf jobs, manpower consultancy, Bissau Rajasthan jobs, overseas job placement, Al Farhan International, Saudi jobs, Dubai jobs, Qatar, UAE, Al Farhan travel" />
        <meta name="author" content="Al Farhan International" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://al-farhan-xi.vercel.app" />

        {/* Open Graph (Facebook, WhatsApp) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://al-farhan-xi.vercel.app" />
        <meta property="og:image" content="https://al-farhan-xi.vercel.app/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://al-farhan-xi.vercel.app/og-image.png" />

        {/* JSON-LD Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EmploymentAgency",
              "name": "Al Farhan International",
              "image": "https://al-farhan-xi.vercel.app/logo.png",
              "email": "team.alfarhan@gmail.com",
              "telephone": "+91-9785767664",
              "url": "https://al-farhan-xi.vercel.app",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "opposite jangir bhawan complex",
                "addressLocality": "Bissau",
                "addressRegion": "Rajasthan",
                "postalCode": "331027",
                "addressCountry": "IN"
              },
              "description": "Trusted manpower consultancy for Gulf country jobs. Based in Bissau, Rajasthan.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "20"
              },
              "sameAs": [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourpage"
              ]
            }),
          }}
        />
      </head>

      <body
        className={`${
          isArabic ? cairo.className : roboto.className
        } antialiased min-h-screen flex flex-col`}
      >
        <MobileMenuProvider>
          <Header locale={locale} />
          <main className="flex-grow mt-[72px]">{children}</main>
          <Footer locale={locale} />
          <FixedButtons />
        </MobileMenuProvider>
      </body>
    </html>
  );
}
