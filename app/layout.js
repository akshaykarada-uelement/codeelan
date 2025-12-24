import "./globals.css";
import Navbar from "../components/global/Navbar.jsx";
import Footer from "../components/global/Footer.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <link rel="icon" href="/codeElan.ico" />
      </head>
      <body>
        <Navbar />
        <div className="xl:pt-18 pt-13">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}