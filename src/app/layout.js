import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from "next/font/google";

const bodoni = localFont({
  src: "./fonts/bodoni.ttf",
  variable: "--font-bodoni",
  display: "swap",
});

const beloved = localFont({
  src: "./fonts/fz-beloved-script.ttf",
  variable: "--font-beloved",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Truong & Hien Wedding",
  description: "Join us in celebrating our special day",
  image:
    "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741757231/18_tkyzj0.png",
  url: "https://truonghienwedding.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning translate="no">
      <head>
        {/* Favicon cho các trình duyệt hiện đại */}
        <link rel="icon" href="/tandh.svg" type="image/svg+xml" />
        {/* Fallback cho Safari và trình duyệt cũ */}
        <link rel="icon" href="/tandh.svg" type="image/png" sizes="32x32" />
        {/* Apple Touch Icon cho iOS/macOS */}
        <link rel="apple-touch-icon" href="/tandh.svg" sizes="180x180" />
        {/* Optional: thêm kích thước khác cho Apple */}
        <link rel="apple-touch-icon" href="/tandh.svg" sizes="152x152" />
        <link rel="apple-touch-icon" href="/tandh.svg" sizes="167x167" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </head>
      <body
        suppressContentEditableWarning
        className={`${montserrat.variable} ${bodoni.variable} ${beloved.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
