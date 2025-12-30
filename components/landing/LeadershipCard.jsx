"use client";

import Image from "next/image";

export default function LeadershipCard({ leader, isMobile = false, isActive = false }) {
  if (isMobile) {
    return (
      <div className="bg-[#F0F0F0] shadow-[0_4px_12px_#00000040] h-full flex flex-col">
        <div className="relative h-64 w-full">
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 text-center flex-grow flex flex-col justify-center">
          <h3 className="fl4 text-xl font-bold">{leader.name}</h3>
          <p className="fl7 text-sm text-gray-600 mb-4">{leader.position}</p>
          <p className="fl7 text-sm leading-relaxed">{leader.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
        h-full flex flex-col items-center px-6 py-10
        transition-colors duration-500 ease-in-out
        ${isActive ? "bg-white" : "bg-[#F0F0F0]"} 
      `}
    >
      
      <div className="relative w-[185px] h-[170px] 2xl:w-[240px] 2xl:h-[220px]">
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          className="object-cover shadow-sm"
        />
      </div>

      <h3 className="fl4 pt-8 text-center text-lg 2xl:text-2xl">{leader.name}</h3>
      <p className="fl7 pt-2 text-center text-gray-600 2xl:text-lg">{leader.position}</p>
    </div>
  );
}