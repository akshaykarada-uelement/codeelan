import "./globals.css";
import Navbar from "../components/global/Navbar.jsx";
import Footer from "../components/global/Footer.jsx";

export const metadata = {
  title: 'CodeElan Technologies - Where AI Makes Real-World Impact',
  description: 'At CodeElan, we specialize in AI/ML, Computer Vision, and cloud engineering solutions that drive innovation.',
  alternates: {
    canonical: 'https://codeelan.com/',
  },
  openGraph: {
    title: 'CodeElan Technologies - Where AI Makes Real-World Impact',
    description: 'At CodeElan, we specialize in AI/ML, Computer Vision, and cloud engineering solutions that drive innovation.',
    url: 'https://codeelan.com/',
    siteName: 'CodeElan',
    images: [
      {
        url: 'https://codeelan.com/landing/hero/hero-bg3.png',
        width: 1200,
        height: 630,
        alt: 'CodeElan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeElan Technologies - Where AI Makes Real-World Impact',
    description: 'At CodeElan, we specialize in AI/ML, Computer Vision, and cloud engineering solutions that drive innovation.',
    images: ['https://codeelan.com/landing/hero/hero-bg3.png'],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
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