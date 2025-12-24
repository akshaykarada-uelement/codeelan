"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import LeadershipCard from "./LeadershipCard";
import { leadershipTeam } from "@/data/leadershipData";

import "swiper/css";
import "swiper/css/pagination";

export default function Leadership() {
  const [activeLeaderId, setActiveLeaderId] = useState(null);

  const swiperDesktopRef = useRef(null);
  const swiperMobileRef = useRef(null);
  const paginationDesktopRef = useRef(null);
  const paginationMobileRef = useRef(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const handleHoverDesktop = (leaderId, index) => {
    setActiveLeaderId(leaderId);

    if (swiperDesktopRef.current) {
      swiperDesktopRef.current.slideTo(index, 300);
    }
  };

  return (
    <section className="section-block-padding container-paddingv2">
      
        <div className="flex flex-col justify-center items-center pb-7 md:pb-12 3xl:pb-18">
          <div className="  relative mb-20 text-center">
                <h2 className="fl2 inline-block relative">
                    Leadership Team
                    <span className="block absolute right-0  w-10 h-2 bg-[#49CF38]"></span>
                </h2>
            </div>
          <p className="fl7 text-center w-[80vw]">
            Our leadership team brings together decades of experience crafting
            sophisticated custom software solutions, pioneering automation
            frameworks, and delivering superior-quality engineering for
            enterprises worldwide. They are the architects behind CodeElan’s
            commitment to excellence, ensuring every solution is designed for
            real-world scalability and innovation.
          </p>
        </div>

        <div className="hidden md:block relative">
          <Swiper
            modules={[Pagination]}
            slidesPerView="auto"
            spaceBetween={24}
            grabCursor
            onSwiper={(swiper) => (swiperDesktopRef.current = swiper)}
            pagination={{
              el: paginationDesktopRef.current,
              clickable: true,
              bulletClass: "swiper-pagination-bullet leadership-bullet",
              bulletActiveClass:
                "swiper-pagination-bullet-active leadership-bullet-active",
            }}
            onInit={(swiper) => {
              if (paginationDesktopRef.current && isMounted) {
                swiper.params.pagination.el = paginationDesktopRef.current;
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
              }
            }}
            onDoubleClick={(swiper, e) => {
              if (e.shiftKey) swiper.slidePrev();
              else swiper.slideNext();
            }}
            className="overflow-visible"
          >
            {leadershipTeam.map((leader, index) => {
              const isActive = leader.id === activeLeaderId;

              return (
                <SwiperSlide key={leader.id} className="!w-auto py-6"> 
                  <div
                    onMouseEnter={() => handleHoverDesktop(leader.id, index)}
                    onMouseLeave={() => setActiveLeaderId(null)}
                    className={`transition-all duration-500 ease-in-out h-[386px] ${
                      isActive ? "w-[50vw]" : "w-[23vw]"
                    }`}
                  >
                    <LeadershipCard
                      leader={leader}
                      isActiveDesktop={isActive}
                      isMobile={false}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div
            ref={paginationDesktopRef}
            className="swiper-pagination flex justify-center -mb-5! gap-2 w-full"
          />
        </div>

        <div className="md:hidden w-full mt-4 relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperMobileRef.current = swiper)}
            pagination={{
              el: paginationMobileRef.current,
              clickable: true,
              bulletClass: "swiper-pagination-bullet leadership-bullet",
              bulletActiveClass:
                "swiper-pagination-bullet-active leadership-bullet-active",
            
            }}
            onInit={(swiper) => {
              if (paginationMobileRef.current && isMounted) {
                swiper.params.pagination.el = paginationMobileRef.current;
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
              }
            }}
            className="w-[280px] mx-auto"
          >
            {leadershipTeam.map((leader) => (
              <SwiperSlide key={leader.id}>
                <LeadershipCard
                  leader={leader}
                  isActiveDesktop={false}
                  isMobile
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            ref={paginationMobileRef}
            className="swiper-pagination flex justify-center -mb-10! gap-2 w-full"
          />
        </div>
    
    </section>
  );
}
