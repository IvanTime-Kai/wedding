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
      icon: "/tandh.svg",
      apple: [
        { url: "/tandh.svg", sizes: "180x180" },
        { url: "/tandh.svg", sizes: "152x152" },
        { url: "/tandh.svg", sizes: "167x167" },
      ],
      mask: {
        url: "/tandh.svg",
        color: "transparent",
      },
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="mask-icon" href="/tandh.svg" color="transparent" />
      </head>
      <body
        className={`${montserrat.variable} ${bodoni.variable} ${beloved.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
