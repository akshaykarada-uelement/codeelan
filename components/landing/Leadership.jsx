"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import LeadershipCard from "./LeadershipCard";
import { leadershipTeam } from "@/data/leadershipData";
import "swiper/css";
import UnderlineLastChars from "../UnderlineLastChars";

const GAP = 24;

export default function Leadership() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="section-block-padding container-paddingv2">
      <div className="flex flex-col items-center pb-12">
        <h2 className="fl2 relative mb-6">
          Leadership {" "}
          <span className="whitespace-nowrap">
            Te<UnderlineLastChars>am</UnderlineLastChars>
          </span>
        </h2>
        <p className="fl7 text-center max-w-4xl">
          Our leadership team brings together decades of experience crafting
          sophisticated custom software solutions.
        </p>
      </div>

      <div className="hidden xl:block w-full overflow-visible ">
        <Swiper
          slidesPerView="auto"
          spaceBetween={GAP}
          className="w-full !pb-8 !px-4 overflow-visible"
        >
          {leadershipTeam.map((leader, index) => {
            const isActive = activeIndex === index;
            const isLast = index === leadershipTeam.length - 1;

            return (
              <SwiperSlide
                key={leader.id}
                className={`
                  transition-[width] duration-500 ease-in-out 
                  ${!isLast ? "!w-auto" : "!w-[220px] 2xl:!w-[340px]"}
                `}
                style={{ zIndex: isActive ? 50 : 1 }}
              >
                <div
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className="relative h-[400px] flex items-stretch group"
                >
                  <div
                    className={`
                      w-[280px] 2xl:w-[340px] shrink-0 z-20 relative 
                      transition-shadow duration-500 bg-white
                      ${isActive ? "shadow-[0px_4px_12px_#00000015]" : ""}
                    `}
                  >
                    <LeadershipCard leader={leader} isActive={isActive} />
                  </div>

                  <div
                    className={`
                      bg-white 
                      flex items-center overflow-hidden
                      transition-all duration-500 ease-in-out
                      
                      /* POSITIONING LOGIC */
                      ${
                        isLast
                          ? `absolute top-0 right-full h-full z-10 origin-right`
                          : `relative z-10`
                      }

                      /* WIDTH & OPACITY */
                      ${
                        isActive
                          ? "w-[320px] 2xl:w-[460px] opacity-100"
                          : "w-0 opacity-0"
                      }

                      /* SHADOW DIRECTION */
                      ${
                        isActive
                          ? isLast
                            ? "shadow-[-4px_4px_12px_#00000010]"
                            : "shadow-[4px_4px_12px_#00000010]"
                          : "shadow-none"
                      }
                    `}
                  >
                    <div className="w-[320px] 2xl:w-[460px] p-6 shrink-0">
                      <p className="fl7 text-left">{leader.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="xl:hidden mt-6">
        <Swiper
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={24}
          className="w-full !pb-10 px-4"
        >
          {leadershipTeam.map((leader) => (
            <SwiperSlide
              key={leader.id}
              className="!w-[300px] sm:!w-[340px] !h-auto"
            >
              <div className="h-full">
                <LeadershipCard leader={leader} isMobile className="h-full" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
