"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "@/data/testimonialsData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <section className="section-block-top pl-8 md:pl-14 2xl:pl-15 3xl:pl-18 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 bg-[#1E273E] hidden md:block h-150"></div>

      <div className="hidden md:block">
        <div className="flex gap-8 items-center">
          <div className="md:w-[30%]">
            <img
              src="/landing/double-testimonial.png"
              alt=""
              className="absolute left-75 -top-8 w-60 h-40"
            />
            <div className="inline-block w-full mx-auto">
              <h3 className="relative fl2 title-content-gap">
                Testimonials
                <span className="block absolute md:right-[calc(50%-75px)] right-[calc(50%-140px)]  -translate-1/2 w-10 md:w-11 h-2 bg-[#49CF38] "></span>
              </h3>
            </div>
            <div className="flex gap-40 mt-20">
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
                  src={isNextHovered ? "/icons/next1.svg" : "/icons/next.svg"}
                  alt="Next"
                />
              </button>
            </div>
          </div>
          <div className="md:w-[70%]  relative flex justify-center">
            <span className="absolute -left-2 top-0 h-71 w-2 bg-[#49CF38]" />
            <span className="absolute -left-2 -top-2 h-2 w-[8vw] bg-[#49CF38]" />
            <span className="absolute -left-2 bottom-15.5 h-2 w-[8vw] bg-[#49CF38] z-10" />
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
                  <TestimonialCard testimonial={testimonial} isMobile={false} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="inline-block w-full mx-auto">
          <h3 className="relative fl2 title-content-gap text-center">
            Testimonials
            <span className="block absolute md:right-[calc(50%-150px)] right-[calc(50%-110px)]  -translate-1/2 w-8 md:w-11 h-[5px] bg-[#49CF38] "></span>
          </h3>
        </div>

        <Swiper
          ref={swiperMobileRef}
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1}
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
          className="w-70 mx-auto"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} isMobile={true} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={paginationMobileRef}
          className="swiper-pagination flex justify-center mt-6 gap-2"
        ></div>
      </div>
    </section>
  );
}
