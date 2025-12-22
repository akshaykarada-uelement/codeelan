"use client";

import Image from "next/image";

export default function LeadershipCard({
  leader,
  isActiveDesktop,
  isMobile = false,
}) {
  if (isMobile) {
    return (
      <div className="bg-[#F0F0F0] shadow-md overflow-hidden w-full h-full flex flex-col">
        <div className="relative w-full h-56">
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-4 flex flex-col gap-1">
          <h3 className="fl4 text-center">{leader.name}</h3>
          <p className="fl7 text-center">{leader.position}</p>
        </div>
          <p className="fl7 p-4">
            {leader.description}
          </p>
      </div>
    );
  }

  if (isActiveDesktop) {
    return (
      <div className="bg-white shadow-md overflow-hidden flex h-[350px]">
        <div className="w-[260px] flex-shrink-0 flex items-center justify-center bg-[#F0F0F0]">
          <div className="flex-1 px-8 py-6 flex flex-col justify-center">
            <div className="relative w-[200px] h-[200px]">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover rounded-md"
                priority
              />
            </div>
            <h3 className="fl4 text-center py-2">
              {leader.name}
            </h3>
            <p className="pl7 text-center py-2">{leader.position}</p>
          </div>
        </div>
        <p className="fl7 p-8">
          {leader.description}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#F0F0F0] overflow-hidden flex flex-col h-[350px]">
      <div className="flex-1 flex items-center justify-center bg-[#F0F0F0]">
        <div className="relative w-[200px] h-[200px]">
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>
      </div>
      <div className="px-4 py-3 text-center">
        <h3 className="fl4">
          {leader.name}
        </h3>
        <p className="fl7">{leader.position}</p>
      </div>
    </div>
  );
}
