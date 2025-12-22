"use client";
import Link from "next/link";
import Image from "next/image";

export default function CasestudyCard({ caseStudy }) {
  if (!caseStudy) return null;

  return (
    <Link href={`/casestudy/${caseStudy.id}`}>
      <div
        className="group relative w-full h-full overflow-hidden border-2 border-[#1E273E4D]
       hover:border-[#49CF38] hover:shadow-[#00000026] 
      transition-all duration-300 cursor-pointer bg-white  grid grid-rows-[80%_20%]"
      >
        <div className="relative w-full h-full">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            className="object-cover group-hover:scale-102 transition-transform duration-300"
          />
        </div>

        <div className="flex items-center justify-between p-4 md:p-5">
          <h3 className="group-hover:text-[#49CF38]  fl4">
            {caseStudy.title}
          </h3>
          <div
            className="relative size-12 
           bg-[url('/casestudy/black-arrow.png')] 
           bg-contain bg-no-repeat bg-center bg-cover group-hover:bg-[url('/casestudy/green-arrow.png')]"
          ></div>
        </div>
      </div>
    </Link>
  );
}
