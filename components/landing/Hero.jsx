"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";


const SLIDES = [
  {
    id: 1,
    title: "Where AI Makes Real-World Impact",
    desc: "Powered by cutting-edge neural networks and sophisticated image processing techniques, our platform enables businesses to automate visual tasks.",
    bg: "/landing/hero/hero-bg1.png", 
    image: "/landing/hero/slider-image1.jpg", 
  },
  {
    id: 2,
    title: "Automate Complex Visual Tasks",
    desc: "Streamline your workflow with next-generation AI that understands context and detail better than ever before.",
    bg: "/landing/hero/hero-bg1.png", 
    image: "/landing/hero/slider-image1.jpg",
  },
  {
    id: 3,
    title: "Seamless Integration & Scale",
    desc: "Deploy rapidly across your existing infrastructure with our flexible and scalable API solutions.",
    bg: "/landing/hero/hero-bg1.png", 
    image: "/landing/hero/slider-image1.jpg",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SLIDES.length);
  };

  // Helper to determine z-index and positions for the card stack
  // REMOVED ": number" here to fix the error
  const getCardStyle = (index) => {
    // Determine the position relative to the active index
    const position = (index - activeIndex + SLIDES.length) % SLIDES.length;

    if (position === 0) {
        // Active Card
        return { zIndex: 30, x: 0, scale: 1, opacity: 1, rotate: 0 };
    } else if (position === 1) {
        // Next Card (Behind & Right)
        return { zIndex: 20, x: 160, scale: 0.85, opacity: 0.6, rotate: 0 };
    } else if (position === 2) {
        // Third Card (Further Behind)
        return { zIndex: 10, x: 300, scale: 0.75, opacity: 0.4, rotate: 0 };
    } else {
        // Hidden
        return { zIndex: 0, x: 400, scale: 0.5, opacity: 0, rotate: 0 };
    }
  };

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black text-white">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={SLIDES[activeIndex].bg}
              alt="Background"
              className="h-full w-full object-cover opacity-60 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 mx-auto grid h-full max-w-7xl grid-cols-1 items-center px-6 lg:grid-cols-2 lg:px-12">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="space-y-8 pr-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold leading-tight md:text-6xl">
                {SLIDES[activeIndex].title}
              </h1>
              <p className="mt-6 max-w-lg text-lg text-gray-300">
                {SLIDES[activeIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <button className="group flex items-center gap-2 rounded-sm bg-[#4ade80] px-8 py-3 text-base font-semibold text-black transition-all hover:bg-[#22c55e]">
            Get Started
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* RIGHT COLUMN: Slider Stack */}
        <div className="relative flex h-full items-center justify-center lg:justify-start">
            <div 
                className="relative h-[450px] w-[350px] cursor-pointer"
                onClick={handleNext}
            >
                {SLIDES.map((slide, index) => {
                    const style = getCardStyle(index);
                    return (
                        <motion.div
                            key={slide.id}
                            className="absolute inset-0 overflow-hidden rounded-xl shadow-2xl"
                            initial={style}
                            animate={style}
                            transition={{ 
                                duration: 0.6, 
                                ease: [0.16, 1, 0.3, 1] 
                            }}
                        >
                            <div className="relative h-full w-full">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40" />
                            </div>
                        </motion.div>
                    );
                })}

                <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-4">
                    <button 
                        onClick={handleNext} 
                        className="rounded-full border border-white/20 p-3 text-white/50 backdrop-blur-md hover:bg-white/10 hover:text-white"
                    >
                        <ArrowRight />
                    </button>
                </div>
            </div>
        </div>

      </div>
    </main>
  );
}