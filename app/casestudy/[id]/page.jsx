import { use } from 'react';
import CaseStudyDetails from '../../../components/casestudy/CasestudyDetails';
import { getAllCaseStudies } from '../../../data/caseStudies';
import { notFound } from 'next/navigation';

function getCaseStudyById(id) {
  const caseStudies = getAllCaseStudies();
  return caseStudies.find((study) => study.id === id);
}


export async function generateMetadata({ params }) {
  const awaitedParams = await params;
 
  const id = awaitedParams.id;
  const decodedId = decodeURIComponent(id);
 
  const caseStudy = getCaseStudyById(decodedId);
 

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'The case study you are looking for does not exist.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${caseStudy.title} | Case Studies`,
    description: caseStudy.description || caseStudy.shortDescription,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
      images: [
        {
          url: caseStudy.image,
          alt: caseStudy.title,
        },
      ],
    },
  };
}

export default function CaseStudyPage({ params }) {
  const awaitedParams = use(params);
 
  const id = awaitedParams.id;
  const decodedId = decodeURIComponent(id);
 
  const caseStudy = getCaseStudyById(decodedId);
 

  if (!caseStudy) {
    notFound();
  }

  return(
    <main className="section-block-padding">
       <div className="inline-block w-full mx-auto">
        <h3 className="relative text-[#1E273E] section-block-bottom text-center font-bold text-[40px]">
            Case Studies
            <span className="block absolute right-[calc(50%-150px)] -translate-1/2 w-11 h-[5px] bg-[#49CF38] "></span>
        </h3>
      </div>
      <CaseStudyDetails caseStudy={caseStudy} />;
    </main>
  ) 
}