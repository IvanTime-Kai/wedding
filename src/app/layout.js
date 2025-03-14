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

export async function generateMetadata() {
  const title = "Truong & Hien Wedding";
  const description = "Join us in celebrating our special day";
  const image =
    "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741757231/18_tkyzj0.png";
  const url = "https://truongandhienwedding.com";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    icons: {
      icon: "/favicon.ico", // Standard favicon
      apple: "/apple-touch-icon.png", // Apple icon (180x180 PNG)
      shortcut: "/favicon.ico",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/tandh.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Mask Icon for Safari */}
        <link rel="mask-icon" href="/tandh.svg" color="#000000" />
      </head>
      <body
        className={`${montserrat.variable} ${bodoni.variable} ${beloved.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
