"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { leadershipTeam } from "../../data/leadershipData";
import UnderlineLastChars from "../UnderlineLastChars";

const AUTOPLAY_MS = 3000;
const DESKTOP_VISIBLE_COUNT = 5;
const MOBILE_VISIBLE_COUNT = 3;

const getCardSizes = (isMobile) => {
  if (isMobile) {
    return {
      inactive: {
        widthClass: "w-[15%]",
        heightClass: "h-[25vw]",
        // maxWidthClass: "max-w-[120px]",
        scale: 1,
        zIndex: 10,
        translateX: 0,
        rotateY: 0,
      },
      active: {
        widthClass: "w-[50%]",
        heightClass: "h-[70vh]",
        // maxWidthClass: "max-w-[350px]",
        scale: 1,
        zIndex: 50,
        translateX: 0,
        rotateY: 0,
      },
    };
  } else {
    return {
      inactive: {
        widthClass: "w-[15%]",
        heightClass: "h-[15vw]",
        scale: 1,
        zIndex: 10,
        translateX: 0,
        rotateY: 0,
      },
      active: {
        widthClass: "w-[20%]",
        heightClass: "h-[30vw]",
        scale: 1,
        zIndex: 10,
        translateX: 0,
        rotateY: 0,
      },
    };
  }
};

const get3DTransform = ({ position, isActive, isMobile }) => {
  // Desktop: active at index 1
  const centerIndex = isMobile ? 0 : 1;
  const offset = position - centerIndex;

  const rotateY = offset * -12; // depth illusion
  const translateZ = isActive ? 140 : 40; // strong Z separation

  return `
    translateZ(${translateZ}px)
    rotateY(${rotateY}deg)
  `;
};
export default function LeadershipCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const autoplayRef = useRef(null);
  const containerRef = useRef(null);
  const rowRef = useRef(null);
  const itemRefs = useRef([]);
  const activeCardHoverRef = useRef(false);
  const [detailsPosition, setDetailsPosition] = useState({
    visible: false,
  });

  // Detect mobile
  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Auto-advance carousel - only pause when active card is hovered
  useEffect(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);

    if (!isPaused && !activeCardHoverRef.current) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % leadershipTeam.length);
      }, AUTOPLAY_MS);
    }

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPaused, currentIndex]);

  // Get visible cards based on current index and device type
  const getVisibleCards = () => {
    const total = leadershipTeam.length;
    if (total === 0) return [];

    const visibleCount = isMobile
      ? MOBILE_VISIBLE_COUNT
      : DESKTOP_VISIBLE_COUNT;
    const cards = [];

    if (isMobile) {
      for (let i = 0; i < visibleCount; i++) {
        const index = (currentIndex + i) % total;
        cards.push({
          index,
          leader: leadershipTeam[index],
          position: i,
          isActive: i === 0,
        });
      }
    } else {
      for (let i = 0; i < visibleCount; i++) {
        let dataIndex;
        if (i === 0) {
          // First position: card before active
          dataIndex = (currentIndex - 1 + total) % total;
        } else {
          // Positions 2-5: active + next 3
          dataIndex = (currentIndex + i - 1) % total;
        }
        cards.push({
          index: dataIndex,
          leader: leadershipTeam[dataIndex],
          position: i, // 0 = inactive, 1 = active, 2-4 = inactive
          isActive: i === 1,
        });
      }
    }

    return cards;
  };

  // Calculate translateX to position cards correctly
  const computeTranslateX = () => {
    // Use viewport-based calculation to prevent overflow
    if (isMobile) {
      // Mobile: minimal offset for padding
      return 16; // 1rem padding
    } else {
      // Desktop: center the active card better
      return 80; // ~5% of typical viewport
    }
  };

  // Calculate position for details panel
  useEffect(() => {
    const updateDetailsPosition = () => {
      // Find the active card element
      const activePosition = isMobile ? 0 : 1;
      const activeCardElement = itemRefs.current[activePosition];
      const container = containerRef.current;

      if (!activeCardElement || !container) {
        setDetailsPosition({ left: 0, top: 0, visible: false });
        return;
      }

      const cardRect = activeCardElement.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const left = cardRect.right - containerRect.left + 16;
      const top = cardRect.top - containerRect.top;

      setDetailsPosition({ left, top, visible: true });
    };

    const timeoutId = setTimeout(updateDetailsPosition, 100);
    updateDetailsPosition();

    window.addEventListener("resize", updateDetailsPosition);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateDetailsPosition);
    };
  }, [currentIndex, isMobile]);

  const handleCardClick = (dataIndex) => {
    setCurrentIndex(dataIndex);
  };

  const visibleCards = getVisibleCards();
  const activeLeader = visibleCards.find((card) => card.isActive)?.leader;
  const translateX = computeTranslateX();
  const cardSizes = getCardSizes(isMobile);

  return (
    <section className="section-block-padding container-padding">
      <div className="flex flex-col items-center pb-12">
        <h2 className="fl2 relative mb-6">
          Leadership{" "}
          <span className="whitespace-nowrap">
            Te<UnderlineLastChars>am</UnderlineLastChars>
          </span>
        </h2>
        <p className="fl7 text-center max-w-4xl">
          Our leadership team brings together decades of experience crafting
          sophisticated custom software solutions.
        </p>
      </div>

      <div ref={containerRef} className="relative w-full overflow-hidden">
        <div
          className="relative flex items-end overflow-x-hidden overflow-y-visible pb-8"
          style={{
            perspective: "1600px",
            perspectiveOrigin: "50% 50%",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            ref={rowRef}
            className="flex items-end justify-center will-change-transform gap-4 md:gap-10"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 1000ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {visibleCards.map(
              ({ index: dataIndex, leader, position, isActive }) => {
                const size = isActive ? cardSizes.active : cardSizes.inactive;

                return (
                  <div
                    key={`${leader.id}-${position}-${currentIndex}`}
                    ref={(el) => {
                      if (el) itemRefs.current[position] = el;
                    }}
                    onClick={() => handleCardClick(dataIndex)}
                    className={`shrink-0 cursor-pointer relative ${
                      size.widthClass
                    } ${size.heightClass} ${size.maxWidthClass} ${
                      isActive ? "z-50" : "z-10"
                    }`}
                    style={{
                      // transform: `scale(${
                      //   size.scale
                      // }) translateZ(${
                      //   isActive ? "20px" : "0px"
                      // })`,
                      // opacity: opacityTransition,
                      // transition: "all 1200ms cubic-bezier(0.4, 0, 0.2, 1)",

                      transform: get3DTransform({
                        position,
                        isActive,
                        isMobile,
                      }),
                      transition:
                        "transform 1000ms cubic-bezier(0.22, 1, 0.36, 1)",
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                      willChange: "transform, opacity",
                    }}
                    onMouseEnter={() => {
                      if (isActive) {
                        activeCardHoverRef.current = true;
                        setIsPaused(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (isActive) {
                        activeCardHoverRef.current = false;
                        setIsPaused(false);
                      }
                    }}
                  >
                    <div
                      className="relative md:w-50 h-full overflow-hidden transform-gpu will-change-transform transition-all ease-out"
                      style={{ transitionDuration: "1200ms" }}
                    >
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        sizes="100vw"
                        className="object-cover transition-transform ease-out"
                        style={{
                          transitionDuration: "1200ms",
                        }}
                        priority={isActive}
                      />
                      {isActive && (
                        <div
                          className="absolute w-[40vw] inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity"
                          style={{ transitionDuration: "1200ms" }}
                        />
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
        {activeLeader && detailsPosition.visible && (
          <div
            className="absolute right-0 top-0 w-[50vw] md:w-[50vw] z-[10] pointer-events-none transition-all duration-500 ease-out"
            onMouseEnter={() => {
              activeCardHoverRef.current = true;
              setIsPaused(true);
            }}
            onMouseLeave={() => {
              activeCardHoverRef.current = false;
              setIsPaused(false);
            }}
          >
            <div className="w-full h-40 px-4 md:px-6 lg:px-8 pointer-events-auto transform transition-all duration-500">
              <div className="flex flex-col">
                <h3 className="fl4 mb-3 md:mb-4 tracking-tight">
                  {activeLeader.name}
                </h3>
                <p className="fl7 mb-2 md:mb-3">{activeLeader.position}</p>
                <p className="fl8">{activeLeader.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
