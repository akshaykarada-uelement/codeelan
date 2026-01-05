import CasestudyGrid from '@/components/casestudy/Casestudy';
import { getAllCaseStudies } from '../../data/caseStudies';

export const metadata = {
  title: 'Case Studies | CodeElan',
  description: 'At CodeElan, we specialize in AI/ML, Computer Vision, and cloud engineering solutions that drive innovation.',
  alternates: {
    canonical: 'https://codeelan.com/casestudy',
  },
  openGraph: {
    title: 'Case Studies | CodeElan',
    description: 'At CodeElan, we specialize in AI/ML, Computer Vision, and cloud engineering solutions that drive innovation.',
    url: 'https://codeelan.com/casestudy',
    siteName: 'CodeElan',
    images: [
      {
        url: 'https://codeelan.com/landing/hero/hero-bg3.png',
        width: 1200,
        height: 630,
        alt: 'CodeElan Case Studies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | CodeElan',
    description: 'At CodeElan, we specialize in AI/ML, Computer Vision, and cloud engineering solutions that drive innovation.',
    images: ['https://codeelan.com/landing/hero/hero-bg3.png'],
  },
};

export default function CasestudyPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <main className="section-block-padding container-paddingv2">
      
          <CasestudyGrid  />
    </main>
  );
}
