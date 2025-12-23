"use client";

import Image from "next/image";

export default function LeadershipCard({
  leader,
  isActiveDesktop,
  isMobile = false,
}) {
  if (isMobile) {
    return (
      <div className="bg-[#F0F0F0] shadow-[0_4px_12px_#00000040] overflow-hidden w-full h-133 flex flex-col">
        <div className="relative w-full h-56">
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            className="object-cover p-4"
            priority
          />
        </div>
        <div className="p-4 flex flex-col gap-1">
          <h3 className="fl4 text-center">{leader.name}</h3>
          <p className="fl7 text-center">{leader.position}</p>
        </div>
        <p className="fl7 p-4">{leader.description}</p>
      </div>
    );
  }

  if (isActiveDesktop) {
    return (
      <div className="bg-white shadow-[0_4px_12px_#00000040] flex h-full">
        <div className="w-[260px] flex items-center justify-center bg-[#F0F0F0]">
          <div className="flex-1 px-8 py-4 flex flex-col">
            <div className="relative w-[185px] h-[170px]">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <h3 className="fl4 text-center pt-10">{leader.name}</h3>
            <p className="pl7 text-center py-2">{leader.position}</p>
          </div>
        </div>
        <p className="fl7 p-8">{leader.description}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F0F0F0] flex flex-col h-full">
      <div className="flex-1 flex items-center justify-center px-8 py-4 flex flex-col">
        <div className="relative w-[185px] h-[170px]">
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <h3 className="fl4 text-center pt-10">{leader.name}</h3>
        <p className="pl7 text-center py-2">{leader.position}</p>
      </div>
    </div>
  );
}
