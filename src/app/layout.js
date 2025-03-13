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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tandh.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${montserrat.variable} ${bodoni.variable} ${beloved.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
