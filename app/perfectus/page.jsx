import Perfectuspage from "@/components/perfectuspage/Perfectuspage";
export const metadata = {
  title: 'Perfectus | CodeElan',
  description: 'At CodeElan, we specialize in AI/ML, Computer Vision, and cloud engineering solutions that drive innovation.',
  alternates: {
    canonical: 'https://codeelan.com/perfectus',
  },
  openGraph: {
    title: 'Perfectus | CodeElan',
    description: 'At CodeElan, we specialize in AI/ML, Computer Vision, and cloud engineering solutions that drive innovation.',
    url: 'https://codeelan.com/perfectus',
    siteName: 'CodeElan',
    images: [
      {
        url: 'https://codeelan.com/landing/hero/hero-bg3.png',
        width: 1200,
        height: 630,
        alt: 'CodeElan perfectus',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfectus | CodeElan',
    description: 'At CodeElan, we specialize in AI/ML, Computer Vision, and cloud engineering solutions that drive innovation.',
    images: ['https://codeelan.com/landing/hero/hero-bg3.png'],
  },
};

export default function Perfectus() {
    return (
        <Perfectuspage />
    );
}
