"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "@/data/testimonialsData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SlashPrefix from "../SlashPrefix";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperDesktopRef = useRef(null);
  const swiperMobileRef = useRef(null);
  const paginationMobileRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePrev = () => {
    if (swiperDesktopRef.current) {
      swiperDesktopRef.current.slidePrev();
      setActiveIndex((prev) =>
        prev === 0 ? testimonialsData.length - 1 : prev - 1
      );
    }
  };

  const handleNext = () => {
    if (swiperDesktopRef.current) {
      swiperDesktopRef.current.slideNext();
      setActiveIndex((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section className="section-block-top  md:pl-14 2xl:pl-15 3xl:pl-18 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 bg-[#1E273E] hidden md:block h-150"></div>

      <div className="hidden md:block">
        <div className="flex gap-8 items-center">
          <div className="md:w-[30%]">
            <img
              src="/landing/double-testimonial.png"
              alt=""
              className="absolute left-80 -top-2 w-60 h-40"
            />
            <div className="relative">
              <h2 className="fl2 inline-block relative">
                <SlashPrefix /> Testimonials
              </h2>
            </div>
          </div>
          <div className="md:w-[70%] relative flex flex-col justify-center pb-24">
            <div className="flex justify-center">
              <span className="absolute -left-2 top-0 h-75 w-2 bg-[#49CF38]" />
              <span className="absolute -left-2 -top-2 h-2 w-[8vw] bg-[#49CF38]" />
              <span className="absolute -left-2 bottom-35 h-2 w-[8vw] bg-[#49CF38] z-10" />
              <Swiper
                ref={swiperDesktopRef}
                modules={[Navigation]}
                slidesPerView={1.5}
                spaceBetween={24}
                onSwiper={(swiper) => (swiperDesktopRef.current = swiper)}
                className="overflow-visible h-[350]"
              >
                {testimonialsData.map((testimonial, index) => (
                  <SwiperSlide key={testimonial.id}>
                    <TestimonialCard
                      testimonial={testimonial}
                      isMobile={false}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-8 lg:bottom-12 z-50 flex gap-16 md:gap-20 lg:gap-32 xl:gap-40">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-12 h-12 transition-all"
            aria-label="Previous testimonial"
            onMouseEnter={() => setIsPrevHovered(true)}
            onMouseLeave={() => setIsPrevHovered(false)}
          >
            <img
              src={isPrevHovered ? "/icons/prev1.svg" : "/icons/prev.svg"}
              alt="Previous"
            />
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-12 h-12  transition-all"
            aria-label="Next testimonial"
            onMouseEnter={() => setIsNextHovered(true)}
            onMouseLeave={() => setIsNextHovered(false)}
          >
            <img
              src={isNextHovered ? "/icons/next1.svg" : "/icons/next-wt.svg"}
              alt="Next"
            />
          </button>
        </div>
      </div>

      <div className="md:hidden w-[80%] mx-auto pb-10">
        <div className=" mb-8 relative flex justify-center items-center">
          <h3 className="relative fl2 title-content-gap mx-auto inline-block">
            <SlashPrefix /> Testimonials
          </h3>
        </div>

        <Swiper
          ref={swiperMobileRef}
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 24,
            },
          }}
          pagination={{
            el: paginationMobileRef.current,
            clickable: true,
            bulletClass: "swiper-pagination-bullet testimonial-bullet",
            bulletActiveClass:
              "swiper-pagination-bullet-active testimonial-bullet-active",
          }}
          onSwiper={(swiper) => (swiperMobileRef.current = swiper)}
          onInit={(swiper) => {
            if (paginationMobileRef.current && isMounted) {
              swiper.params.pagination.el = paginationMobileRef.current;
              swiper.pagination.init();
              swiper.pagination.render();
              swiper.pagination.update();
            }
          }}
          className="w-full px-4 sm:px-8"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <div className="h-full py-2">
                <TestimonialCard testimonial={testimonial} isMobile={true} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={paginationMobileRef}
          className="swiper-pagination relative flex justify-center mt-6 gap-2 w-full"
        ></div>
      </div>
    </section>
  );
}
