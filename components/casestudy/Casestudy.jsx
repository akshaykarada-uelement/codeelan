'use client';

import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CasestudyCard from './CasestudyCard';
import 'swiper/css';
import 'swiper/css/pagination';

export default function CasestudyGrid({ caseStudies }) {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <div className="hidden md:block w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-5 md:gap-6 auto-rows-[300px] md:auto-rows-[320px] lg:auto-rows-[350px]">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className={`${
                caseStudy.gridSize === 'tall-right'
                  ? 'col-span-2 md:col-span-4 row-span-1'
                  : caseStudy.gridSize === 'tall-bottom'
                    ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2'
                    : caseStudy.gridSize === 'equal'
                      ? 'col-span-2 md:col-span-3 row-span-1'
                      : 'col-span-2 row-span-1'
              }`}
            >
              <CasestudyCard caseStudy={caseStudy} />
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE VIEW (SWIPER SLIDER) */}
      <div className="md:hidden w-full">
        <div className="w-full mx-auto relative">
          <Swiper
            ref={swiperRef}
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            pagination={{
              el: paginationRef.current,
              clickable: true,
              bulletClass: 'swiper-pagination-bullet casestudy-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active casestudy-bullet-active',
            }}
            touchEventsTarget="container"
            simulateTouch={true}
            allowTouchMove={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              if (paginationRef.current) {
                swiper.params.pagination.el = paginationRef.current;
                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
              }
            }}
            onInit={(swiper) => {
              if (paginationRef.current && isMounted) {
                swiper.params.pagination.el = paginationRef.current;
                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
              }
            }}
            className="overflow-hidden casestudy-swiper"
          >
            {caseStudies.map((caseStudy) => (
              <SwiperSlide key={caseStudy.id} className="w-auto h-auto">
                <div className="h-[300px]">
                  <CasestudyCard caseStudy={caseStudy} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            ref={paginationRef}
            className="swiper-pagination flex justify-center mt-6 gap-2"
          ></div>
        </div>
      </div>
    </>
  );
}
