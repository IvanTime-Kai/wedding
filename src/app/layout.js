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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      </head>
      <body
        className={`${montserrat.variable} ${bodoni.variable} ${beloved.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
