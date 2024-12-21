import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import NewsLetter from "@/components/Footer/Newsletter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <header className="sticky top-0 z-30 md:zIndex">
          <Navbar/>
        </header>
        <main>
        {children}
        </main>
        <footer>
          <NewsLetter/>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
