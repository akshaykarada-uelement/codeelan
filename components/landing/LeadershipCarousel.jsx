"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { leadershipTeam } from "../../data/leadershipData";
import UnderlineLastChars from "../UnderlineLastChars";

const AUTOPLAY_MS = 3000; // 3 seconds
const CARD_GAP = 20; // gap between cards
const DESKTOP_VISIBLE_COUNT = 5; // Always show 5 cards on desktop
const MOBILE_VISIBLE_COUNT = 3; // Always show 3 cards on mobile

// Responsive sizes
const getCardSizes = (isMobile, screenWidth) => {
  if (isMobile) {
    // Mobile: responsive sizes
    const baseSize = Math.min(120, screenWidth * 0.25);
    return {
      inactive: { w: baseSize, h: baseSize },
      active: { w: baseSize * 2.5, h: baseSize * 3.5 },
    };
  } else {
    // Desktop: fixed sizes
    return {
      inactive: { w: 160, h: 160 },
      active: { w: 480, h: 600 },
    };
  }
};

export default function LeadershipCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1920);
  const autoplayRef = useRef(null);
  const containerRef = useRef(null);
  const rowRef = useRef(null);
  const itemRefs = useRef([]);
  const [detailsPosition, setDetailsPosition] = useState({ left: 0, top: 0, visible: false });

  // Detect mobile and screen width
  useEffect(() => {
    const onResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobile(width < 768);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    
    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % leadershipTeam.length);
      }, AUTOPLAY_MS);
    }

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPaused]);

  // Get visible cards based on current index and device type
  const getVisibleCards = () => {
    const total = leadershipTeam.length;
    if (total === 0) return [];

    const visibleCount = isMobile ? MOBILE_VISIBLE_COUNT : DESKTOP_VISIBLE_COUNT;
    const cards = [];

    if (isMobile) {
      // Mobile: Show 3 cards, active card at position 0 (first from left)
      for (let i = 0; i < visibleCount; i++) {
        const index = (currentIndex + i) % total;
        cards.push({
          index,
          leader: leadershipTeam[index],
          position: i, // 0 = active, 1-2 = inactive
          isActive: i === 0,
        });
      }
    } else {
      // Desktop: Show 5 cards, active card at position 1 (second from left)
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
    const cardSizes = getCardSizes(isMobile, screenWidth);
    
    if (isMobile) {
      // Mobile: active card is first, position at start with padding
      return 16;
    } else {
      // Desktop: position first card at target position
      const targetLeftPosition = 120;
      return targetLeftPosition;
    }
  };

  // Calculate position for details panel
  useEffect(() => {
    const updateDetailsPosition = () => {
      const cardSizes = getCardSizes(isMobile, screenWidth);
      
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
      
      // Position details panel on top-right of active card
      // Above the inactive cards on the right
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
  }, [currentIndex, isMobile, screenWidth]);

  const handleCardClick = (dataIndex) => {
    setCurrentIndex(dataIndex);
  };

  const visibleCards = getVisibleCards();
  const activeLeader = visibleCards.find(card => card.isActive)?.leader;
  const translateX = computeTranslateX();
  const cardSizes = getCardSizes(isMobile, screenWidth);
  
  // Calculate container height based on active card height
  const containerHeight = isMobile 
    ? cardSizes.active.h + 40 
    : cardSizes.active.h + 40;

  return (
    <section className="section-block-padding container-paddingv2">
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

      <div
        ref={containerRef}
        className="relative w-full overflow-visible"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Cards Row - All cards aligned at bottom */}
        <div 
          className="relative flex items-end overflow-visible"
          style={{ height: `${containerHeight}px` }}
        >
          <div
            ref={rowRef}
            className="flex items-end will-change-transform"
            style={{ 
              transform: `translateX(${translateX}px)`,
              transition: 'transform 800ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {visibleCards.map(({ index: dataIndex, leader, position, isActive }) => {
              const size = isActive ? cardSizes.active : cardSizes.inactive;
              const width = size.w;
              const height = size.h;

              return (
                <div
                  key={`${leader.id}-${position}-${currentIndex}`}
                  ref={(el) => {
                    if (el) itemRefs.current[position] = el;
                  }}
                  onClick={() => handleCardClick(dataIndex)}
                  className={`shrink-0 cursor-pointer ${
                    isActive ? "z-50" : "z-10 opacity-90 hover:opacity-100"
                  }`}
                  style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    marginRight: position < visibleCards.length - 1 ? `${CARD_GAP}px` : "0",
                    // Smooth morphing animation for width and height
                    transition: 'width 800ms cubic-bezier(0.4, 0, 0.2, 1), height 800ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease-in-out',
                  }}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg transform-gpu">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes={isActive ? `${width}px` : `${width}px`}
                      className="object-cover"
                      style={{
                        transition: 'transform 800ms cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      priority={isActive}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Details Panel - Desktop and Mobile, no image, only text */}
        {activeLeader && detailsPosition.visible && (
          <div
            className="absolute z-[100] pointer-events-none transition-all duration-500 ease-out"
            style={{
              left: `${detailsPosition.left}px`,
              top: `${detailsPosition.top}px`,
              maxWidth: isMobile ? `calc(100vw - ${detailsPosition.left + 32}px)` : "520px",
              opacity: detailsPosition.visible ? 1 : 0,
            }}
          >
            <div className="bg-white p-4 md:p-6 lg:p-8 shadow-2xl rounded-lg pointer-events-auto transform transition-all duration-500">
              {/* Only text details, no image */}
              <div className="flex flex-col">
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 md:mb-3">
                  #{currentIndex + 1}
                </p>
                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-slate-900 mb-3 md:mb-4 uppercase tracking-tight">
                  {activeLeader.name}
                </h3>
                <p className="text-xs md:text-sm lg:text-base text-slate-700 leading-relaxed">
                  {activeLeader.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}