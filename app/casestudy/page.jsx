import CasestudyGrid from '@/components/casestudy/Casestudy';
import { getAllCaseStudies } from '../../data/caseStudies';

export const metadata = {
  title: 'Case Studies - Our Work',
  description: 'Explore our portfolio of successful case studies',
};

export default function CasestudyPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <main className="section-block-padding container-paddingv2">
      
          <CasestudyGrid  />
    </main>
  );
}
