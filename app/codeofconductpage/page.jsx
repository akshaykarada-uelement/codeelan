import CodeOfConduct from '@/components/codeofconduct/Codeofconduct';
export const metadata = {
  title: 'Code of Conduct | CodeElan',
  description: 'At CodeElan, we specialize in AI/ML, Computer Vision, and cloud engineering solutions that drive innovation.',
  alternates: {
    canonical: 'https://codeelan.com/codeofconduct',
  },
  openGraph: {
    title: 'Code of Conduct | CodeElan',
    description: 'At CodeElan, we specialize in AI/ML, Computer Vision, and cloud engineering solutions that drive innovation.',
    url: 'https://codeelan.com/codeofconduct',
    siteName: 'CodeElan',
    images: [
      {
        url: 'https://codeelan.com/landing/hero/hero-bg3.png',
        width: 1200,
        height: 630,
        alt: 'CodeElan Code of Conduct',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code of Conduct | CodeElan',
    description: 'At CodeElan, we specialize in AI/ML, Computer Vision, and cloud engineering solutions that drive innovation.',
    images: ['https://codeelan.com/landing/hero/hero-bg3.png'],
  },
};

export default function Codeofconductpage() {
  return <CodeOfConduct />;
}