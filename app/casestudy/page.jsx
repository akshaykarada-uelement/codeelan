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
      <div className="inline-block w-full mx-auto">
        <h3 className="relative text-[#1E273E] section-block-bottom text-center font-bold text-[40px]">
            Case Studies
            <span className="block absolute right-[calc(50%-150px)] -translate-1/2 w-11 h-[5px] bg-[#49CF38] "></span>
        </h3>
      </div>
          <CasestudyGrid caseStudies={caseStudies} />
    </main>
  );
}
