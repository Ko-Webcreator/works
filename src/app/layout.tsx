import type { Metadata, Viewport } from "next";
import "@/app/globals.scss";
import { Pacifico } from "next/font/google";

export const metadata: Metadata = {
  title: {
    template: "%s | WebCreator Ko",
    default: "WebCreator Ko",
  },
  description:
    "Kotaro from WebCreator is a site where he posts his blog and portfolio, and is currently seeking work opportunities through inquiries!",
  metadataBase: new URL(process.env.SITE_URL!),
  openGraph: {
    url: "/",
    images: "/images/ogp.png",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${pacifico.variable}`}>
      <body>{children}</body>
    </html>
  );
}
