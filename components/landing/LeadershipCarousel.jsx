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
  const timerRef = useRef(null);

  // carouselSlots.js
  const DESKTOP_SLOTS = {
    "-1": { x: 0, zIndex: 1 },
    0: { x: 285, zIndex: 5 },
    1: { x: 670, zIndex: 3 },
    2: { x: 955, zIndex: 2 },
    // 3: { x: 960, z: -320, zIndex: 1 },
  };

  const MOBILE_SLOTS = {
    0: { x: 0, z: 0, zIndex: 5 },
    1: { x: 200, z: -120, zIndex: 2 },
    2: { x: 400, z: -240, zIndex: 1 },
  };

  /* -------------------- Responsive -------------------- */
  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* -------------------- Autoplay -------------------- */
  useEffect(() => {
    if (paused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % leadershipTeam.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(timerRef.current);
  }, [paused]);

  /* -------------------- Slot Logic -------------------- */
  const slots = isMobile ? MOBILE_SLOTS : DESKTOP_SLOTS;
  const slotKeys = Object.keys(slots).map(Number);

  const visibleCards = slotKeys.map((offset) => {
    const index =
      (activeIndex + offset + leadershipTeam.length) % leadershipTeam.length;

    return {
      leader: leadershipTeam[index],
      offset,
      slot: slots[offset],
      isActive: offset === 0,
    };
  });

  const activeLeader = leadershipTeam[activeIndex];

  /* -------------------- Render -------------------- */
  return (
    <section className="section-block-padding container-padding">
      <div className="text-center mb-12">
        <h2 className="fl2">
          Leadership <UnderlineLastChars>Team</UnderlineLastChars>
        </h2>
      </div>

      <div className="relative w-full overflow-visible">
        {/* CARDS */}
        <div
          className="relative w-full h-[75vh]"
          style={{ perspective: "1800px" }}
        >
          {visibleCards.map(({ leader, slot, isActive }) => (
            <motion.div
              key={leader.id}
              className="absolute bottom-0"
              animate={{
                x: slot.x,
                scale: slot.scale,
                rotateY: slot.rotateY || 0,
                z: slot.z,
                opacity: slot.opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
              style={{
                left: 0,
                zIndex: slot.zIndex,
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={() => isActive && setPaused(true)}
              onMouseLeave={() => isActive && setPaused(false)}
            >
              <div className="relative overflow-hidden"
                style={{ width: isActive ? 350 : 250, height: isActive ? 500 : 250 }}>
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
        </div>

        {/* INFO PANEL */}
        <motion.div
          key={activeLeader.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-0 right-0 w-[41vw] z-50"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="p-6 ">
            <h3 className="fl4 mb-2">{activeLeader.name}</h3>
            <p className="fl7 mb-4">{activeLeader.position}</p>
            <p className="fl8">{activeLeader.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
