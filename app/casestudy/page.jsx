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
      <div className="inline-block w-full mx-auto">
        <h3 className="relative fl2 section-block-bottom text-center">
            Case Studies
           <span className="block absolute md:right-[calc(50%-150px)] right-[calc(50%-110px)]  -translate-1/2 w-8 md:w-11 h-2 bg-[#49CF38] "></span>
        </h3>
      </div>
          <CasestudyGrid caseStudies={caseStudies} />
    </main>
  );
}
