import { Monda, Jura } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/menu/nav";


const monda = Monda({
  variable: "--font-monda",
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const jura = Jura({
  variable: "--font-jura",
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Daniel Justiz",
  description: "Let's Create",
};

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang='en'>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className={`${monda.className} ${jura.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
