"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { leadershipTeam } from "../../data/leadershipData";
import SlashPrefix from "../SlashPrefix";

const AUTOPLAY_MS = 3000;

export default function LeadershipCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);
  const [metrics, setMetrics] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const mobile = vw < 768;

      const cardWidth = mobile ? vw * 0.202 : vw * 0.18;
      const cardHeight = mobile ? cardWidth * 1.45 : cardWidth * 1.25;
      const gap = cardWidth * 0.35;

      setIsMobile(mobile);
      setMetrics({ cardWidth, cardHeight, gap });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(
      () => setActiveIndex((i) => (i + 1) % leadershipTeam.length),
      AUTOPLAY_MS
    );
    return () => clearInterval(timerRef.current);
  }, [paused]);

  if (!metrics) return null;

  const SCALE = {
    active: {
      width: 1.6,
      height: 2,
    },
    inactive: {
      width: 1,
      height: 0.8,
    },
  };

  const DESKTOP_SLOTS = {
    "-1": { x: 0, zIndex: 1 },
    0: { x: metrics.gap * 3.15, zIndex: 5 },
    1: { x: metrics.gap * 8.02, zIndex: 3 },
    2: { x: metrics.gap * 11.2, zIndex: 2 },
  };

  const MOBILE_SLOTS = {
    0: { x: 0, zIndex: 5 },
    1: { x: metrics.gap * 5.2, zIndex: 2 },
    2: { x: metrics.gap * 8.6, zIndex: 1 },
  };

  const slots = isMobile ? MOBILE_SLOTS : DESKTOP_SLOTS;

  const visibleCards = Object.keys(slots).map((offset) => {
    const index =
      (activeIndex + Number(offset) + leadershipTeam.length) %
      leadershipTeam.length;

    return {
      leader: leadershipTeam[index],
      offset: Number(offset),
      slot: slots[offset],
      isActive: Number(offset) === 0,
    };
  });

  const activeLeader = leadershipTeam[activeIndex];

  /* ---------------- Render ---------------- */
  return (
    <section className="section-block-padding container-padding">
      <div className="text-center mb-12 ">
        <h2 className="fl2 title-content-gap">
          <SlashPrefix />
          Leadership Team
        </h2>
        <p className="fl7 text-center w-[80vw] mx-auto">
          Our leadership team brings together decades of experience crafting
          sophisticated custom software solutions, pioneering automation
          frameworks, and delivering superior-quality engineering for
          enterprises worldwide. They are the architects behind CodeElan’s
          commitment to excellence, ensuring every solution is designed for
          real-world scalability and innovation.
        </p>
      </div>

      <div
        className="relative w-full h-[40vh] md:h-[85vh] xl:h-[70vh] 3xl:h-[60vh] overflow-hidden"
        style={{ perspective: "2000px" }}
      >
        {/* Cards */}
        {visibleCards.map(({ leader, slot, isActive ,offset }) => (
          <motion.div
            key={leader.id}
            className="absolute bottom-0"
            animate={{ x: slot.x }}
            transition={{ type: "spring", stiffness: 100, damping: 22 }}
            style={{ zIndex: slot.zIndex }}
            onMouseEnter={() => isActive && setPaused(true)}
            onMouseLeave={() => isActive && setPaused(false)}
            onClick={() => {
              if (!isActive) {
                setActiveIndex(
                  (activeIndex + offset + leadershipTeam.length) %
                    leadershipTeam.length
                );
              }
            }}
          >
            <div
              style={{
                width:
                  metrics.cardWidth *
                  (isActive ? SCALE.active.width : SCALE.inactive.width),
                height:
                  metrics.cardHeight *
                  (isActive
                    ? SCALE.active.height * (isMobile ? 1.5 : 1)
                    : SCALE.inactive.height),
              }}
              className="relative overflow-hidden cursor-pointer"
            >
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover"
                priority={isActive}
              />
            </div>
          </motion.div>
        ))}

        {/* Info Panel */}
        <motion.div
          key={activeLeader.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className={`absolute top-0 right-0`}
          style={{
            width: metrics.cardWidth * SCALE.inactive.width * 2,
          }}
        >
          <div className="xl:-ml-6 2xl:-ml-12 sm:ml-2 -ml-5 cursor-pointer">
            <h3 className="fl4">{activeLeader.name}</h3>
            <p className="fl7 mb-4">{activeLeader.position}</p>
            <p className="fl8">{activeLeader.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
