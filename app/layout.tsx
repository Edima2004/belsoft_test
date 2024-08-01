
//import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import {Montserrat} from "next/font/google"

const montserrat = Montserrat({
  subsets:['latin'],
  weight:['300','500']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
