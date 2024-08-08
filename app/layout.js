import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight:"500", subsets: ["latin"] });

export const metadata = {
  title: "Respicare",
  description: "Respicare - Providing innovative respiratory solutions for optimal lung health in Abu Dhabi, UAE.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}><Header/>{children}<Footer/></body>
    </html>
  );
}
