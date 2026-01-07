"use client";

import React from "react";
import Image from "next/image";
import { getAllCaseStudies } from "../../data/caseStudies";
import CaseStudyDetails from "./CasestudyDetails";
import { useState, useRef } from "react";
import UnderlineLastChars from "@/components/UnderlineLastChars";

// Map slides to case study IDs
const slideToCaseStudyMap = {
  0: "ecommerce-mobile-app",
  1: "product-testing-web",
  2: "automation-website-mobile",
  3: "insurance-automation",
  4: "crm-development-aspnet",
  5: "automotive-car-resale",
};

const slides = [
  { id: 0, title: "Ecommerce Mobile App", image: "/casestudy/mobileapp.png" },
  { id: 1, title: "Product Testing (Web)", image: "/casestudy/testing.png" },
  { id: 2, title: "Automation", image: "/casestudy/automation.png" },
  { id: 3, title: "Insurance Automation", image: "/casestudy/insurance.jpg" },
  { id: 4, title: "CRM Development", image: "/casestudy/development.png" },
  { id: 5, title: "UI/UX Automotive Platform", image: "/casestudy/uiux.png" },
];

export default function CasestudyGrid() {
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const onStart = (x) => {
    startX.current = x;
    isDragging.current = true;
  };

  const onMoveEnd = (x) => {
    if (!isDragging.current) return;
    const diff = x - startX.current;
    if (diff > 60) prev();
    if (diff < -60) next();
    isDragging.current = false;
  };

  // Get the active case study
  const caseStudies = getAllCaseStudies();
  const activeCaseStudyId = slideToCaseStudyMap[activeIndex];
  const activeCaseStudy = caseStudies.find(
    (study) => study.id === activeCaseStudyId
  );

  const prev = () =>
    setActiveIndex((p) => (p === 0 ? slides.length - 1 : p - 1));

  const next = () => setActiveIndex((p) => (p + 1) % slides.length);

  const visibleSlides = [
    slides[(activeIndex - 1 + slides.length) % slides.length],
    slides[activeIndex],
    slides[(activeIndex + 1) % slides.length],
  ];

  return (
    <main className="w-full container-paddingv2">
      <div className="hidden md:flex mx-auto">
        <div className="w-[20vw] flex items-center">
          <div>
            <h3 className="relative inline-block fl2 mb-6 text-center">
              Case{" "}
              <span className="whitespace-nowrap">
                Stud<UnderlineLastChars>es</UnderlineLastChars>
              </span>
            </h3>
          </div>
        </div>

        <div className="w-[80%] relative">
          <div
            className="flex items-center justify-center gap-6 h-[600px] overflow-hidden"
            onMouseDown={(e) => onStart(e.clientX)}
            onMouseUp={(e) => onMoveEnd(e.clientX)}
            onMouseLeave={() => (isDragging.current = false)}
          >
            {visibleSlides.map((slide, i) => {
              const isActive = i === 1;

              return (
                <div
                  key={slide.id}
                  className={`
                    relative h-full bg-cover bg-center transition-all duration-500
                    ${
                      isActive
                        ? "w-[350px] xl:w-[420px]"
                        : "w-[120px] xl:w-[240px]"
                    }
                  `}
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[#F7F7F7]/0 via-[#323232]/70 to-[#000000]/85" />
                  {!isActive && (
                    <>
                      <div className="absolute bottom-6 bg-[#1E273E] w-25 h-35 z-5"></div>
                      <span className="absolute bottom-6 left-14 rotate-[-90deg] origin-left !text-white fl4 z-10">
                        {slide.title}
                      </span>
                    </>
                  )}

                  {isActive && (
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                      <h3 className="!text-[#49CF38] fl4">{slide.title}</h3>

                      <button className="size-10 flex justify-end">
                        <Image
                          src="/icons/downarrow.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex w-full items-center justify-between mt-8 px-24 lg:px-32 xl:px-40">
            <button
              onClick={prev}
              onMouseEnter={() => setIsPrevHovered(true)}
              onMouseLeave={() => setIsPrevHovered(false)}
            >
              <img
                src={isPrevHovered ? "/icons/prev1.svg" : "/icons/prev.svg"}
                alt="Previous"
              />
            </button>

            <div className="flex items-center gap-3">
              {slides.map((_, i) => {
                const diff = Math.abs(i - activeIndex);
                if (diff > 1) return <span key={i}>•</span>;

                return (
                  <span
                    key={i}
                    className={
                      (i === activeIndex ? "!text-[#49CF38] fl3" : "fl4") +
                      " cursor-pointer"
                    }
                    onClick={() => setActiveIndex(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" ||
                        e.key === " " ||
                        e.key === "Spacebar"
                      )
                        setActiveIndex(i);
                    }}
                  >
                    {i + 1}
                  </span>
                );
              })}
            </div>

            <button
              onClick={next}
              onMouseEnter={() => setIsNextHovered(true)}
              onMouseLeave={() => setIsNextHovered(false)}
            >
              <img
                src={isNextHovered ? "/icons/next1.svg" : "/icons/next.svg"}
                alt="Next"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="w-full flex justify-center">
          <h3 className="relative inline-block fl2 mb-6 text-center">
            Case{" "}
            <span className="whitespace-nowrap">
              Stud<UnderlineLastChars>es</UnderlineLastChars>
            </span>
          </h3>
        </div>

        <div
          className="flex gap-4 px-4 h-[420px] overflow-hidden"
          onTouchStart={(e) => onStart(e.touches[0].clientX)}
          onTouchEnd={(e) => onMoveEnd(e.changedTouches[0].clientX)}
        >
          {[
            slides[(activeIndex - 1 + slides.length) % slides.length],
            slides[activeIndex],
          ].map((slide, i) => {
            const isActive = i === 1;

            return (
              <div
                key={slide.id}
                className={`
                    relative h-full bg-cover bg-center transition-all duration-500
                    ${isActive ? "w-[60%]" : "w-[35%]"}
                  `}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
               <div className="absolute inset-0 bg-gradient-to-b from-[#F7F7F7]/0 via-[#323232]/70 to-[#000000]/85" />

                {!isActive && (
                  <>
                  <div className="absolute bottom-6 bg-[#1E273E] w-20 h-30 z-5"></div>
                  <span className="absolute bottom-8 left-10 rotate-[-90deg] origin-left !text-white fl4 tracking-wide z-10">
                    {slide.title}
                  </span>
                  </>
                )}

                {isActive && (
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <h3 className="!text-[#49CF38] fl4 leading-tight max-w-[70%]">
                      {slide.title}
                    </h3>

                    <button className="size-7 bg-[#49CF38] flex items-center justify-center">
                      <img src="/icons/downarrow.svg" alt="" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between px-6 mt-6">
          <button onClick={prev}>
            <img src="/icons/prev.svg" alt="prev" />
          </button>

          <div className="flex items-center gap-3">
            {slides.map((_, i) => {
              const diff = Math.abs(i - activeIndex);
              if (diff > 1) return <span key={i}>•</span>;

              return (
                <span
                  key={i}
                  className={
                    (i === activeIndex ? "!text-[#49CF38] fl3" : "fl4") +
                    " cursor-pointer"
                  }
                  onClick={() => setActiveIndex(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (
                      e.key === "Enter" ||
                      e.key === " " ||
                      e.key === "Spacebar"
                    )
                      setActiveIndex(i);
                  }}
                >
                  {i + 1}
                </span>
              );
            })}
          </div>

          <button onClick={next}>
            <img src="/icons/next.svg" alt="next" />
          </button>
        </div>
      </div>

      {/* Case Study Details Section */}
      {activeCaseStudy && (
        <div className="mt-12 md:mt-16">
          <CaseStudyDetails caseStudy={activeCaseStudy} hideBackButton={true} />
        </div>
      )}
    </main>
  );
}
