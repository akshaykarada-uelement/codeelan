"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { leadershipTeam } from "../../data/leadershipData";
import UnderlineLastChars from "../UnderlineLastChars";

const AUTOPLAY_MS = 3000;

export default function LeadershipCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);
  const [metrics, setMetrics] = useState(null);
  const timerRef = useRef(null);

  /* ---------------- Responsive ---------------- */
  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const mobile = vw < 768;

      const cardWidth = mobile ? vw * 0.6 : vw * 0.5;
      const cardHeight = cardWidth * 1.45;
      const gap = cardWidth * 0.5;

      setIsMobile(mobile);
      setMetrics({ cardWidth, cardHeight, gap });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ---------------- Autoplay ---------------- */
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(
      () => setActiveIndex((i) => (i + 1) % leadershipTeam.length),
      AUTOPLAY_MS
    );
    return () => clearInterval(timerRef.current);
  }, [paused]);

  if (!metrics) return null;

  /* ---------------- Slots ---------------- */
  const DESKTOP_SLOTS = {
    "-1": { x: 0, zIndex: 1 },
    "0": { x: metrics.gap * 3.5, zIndex: 5 },
    "1": { x: metrics.gap * 7, zIndex: 3 },
    "2": { x: metrics.gap * 10.5, zIndex: 2 },
  };

  const MOBILE_SLOTS = {
    "0": { x: 0, zIndex: 5 },
    "1": { x: metrics.gap * 1.5, zIndex: 2 },
    "2": { x: metrics.gap * 3, zIndex: 1 },
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
      <div className="text-center mb-12">
        <h2 className="fl2">
          Leadership <UnderlineLastChars>Team</UnderlineLastChars>
        </h2>
      </div>

      <div className="relative w-full h-[80vh]" style={{ perspective: "2000px" }}>
        {/* Cards */}
        {visibleCards.map(({ leader, slot, isActive }) => (
          <motion.div
            key={leader.id}
            className="absolute bottom-0"
            animate={{ x: slot.x,}}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
            style={{ zIndex: slot.zIndex }}
            onMouseEnter={() => isActive && setPaused(true)}
            onMouseLeave={() => isActive && setPaused(false)}
          >
            <div
              style={{
                width: metrics.cardWidth,
                height: metrics.cardHeight,
              }}
              className="relative overflow-hidden"
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
          className="absolute top-0 right-0 w-[45vw] z-50"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="p-6">
            <h3 className="fl4">{activeLeader.name}</h3>
            <p className="fl7 mb-4">{activeLeader.position}</p>
            <p className="fl8">{activeLeader.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
