import Missionandvision from "@/components/Missionandvision/Missionandvision";
export const metadata = {
  title: 'Our Mission & Vision | CodeElan',
  description: 'At CodeElan, we specialize in AI/ML, Computer Vision, and cloud engineering solutions that drive innovation.',
  alternates: {
    canonical: 'https://codeelan.com/missionvision',
  },
  openGraph: {
    title: 'Our Mission & Vision | CodeElan',
    description: 'At CodeElan, we specialize in AI/ML, Computer Vision, and cloud engineering solutions that drive innovation.',
    url: 'https://codeelan.com/missionvision',
    siteName: 'CodeElan',
    images: [
      {
        url: 'https://codeelan.com/landing/hero/hero-bg3.png',
        width: 1200,
        height: 630,
        alt: 'CodeElan Mission & Vision',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Mission & Vision | CodeElan',
    description: 'At CodeElan, we specialize in AI/ML, Computer Vision, and cloud engineering solutions that drive innovation.',
    images: ['https://codeelan.com/landing/hero/hero-bg3.png'],
  },
};

export default function Missionvision() {
  return (
    <Missionandvision />
  );
}

