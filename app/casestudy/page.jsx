import CasestudyGrid from '@/components/casestudy/Casestudy';
import { getAllCaseStudies } from '../../data/caseStudies';

export const metadata = {
  title: 'Case Studies - Our Work',
  description: 'Explore our portfolio of successful case studies',
};

export default function CasestudyPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <main className="section-block-padding px-5 md:px-7">
        <h3 className="text-[#1E273E] section-block-bottom text-center font-bold text-[40px]">
            Case Studies
        </h3>
          <CasestudyGrid caseStudies={caseStudies} />
    </main>
  );
}
