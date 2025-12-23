"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
    {
        id: 1,
        title: "Where AI Makes Real-World Impact",
        desc: "Powered by cutting-edge neural networks and sophisticated image processing techniques, our platform enables businesses to automate visual tasks ",
        bg: "/landing/hero/hero-bg1.png",
        image: "/landing/hero/slider-image1.jpg",
    },
    {
        id: 2,
        title: "Automate Complex Visual Tasks",
        desc: "Powered by cutting-edge neural networks and sophisticated image processing techniques, our platform enables businesses to automate visual tasks ",
        bg: "/landing/hero/hero-bg2.png",
        image: "/landing/hero/slider-image1.jpg",
    },
    {
        id: 3,
        title: "Seamless Integration & Scale",
        desc: "Powered by cutting-edge neural networks and sophisticated image processing techniques, our platform enables businesses to automate visual tasks ",
        bg: "/landing/hero/hero-bg3.png",
        image: "/landing/hero/slider-image1.jpg",
    },
];

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    };


    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 6000);


        return () => clearInterval(interval);
    }, []);


    const getCardStyle = (index) => {
        const position = (index - activeIndex + SLIDES.length) % SLIDES.length;

        if (position === 0) {

            return { zIndex: 30, x: 0, scale: 1.3, opacity: 1 };
        } else if (position === 1) {

            return { zIndex: 25, x: 300, scale: 1, opacity: 0.8 };

        } else if (position === 2) {

            return { zIndex: 20, x: 550, scale: 1, opacity: 0.7 };
        } else {

            return { zIndex: 0, x: 120, scale: 1, opacity: 0 };
        }
    };

    return (

        <main className="relative z-50 min-h-screen w-full overflow-hidden bg-black flex flex-col justify-center">


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
                            className="h-full w-full object-cover opacity-50"
                        />
                        <div className="absolute inset-0" />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="relative z-10 container mx-auto grid h-full grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:px-12 lg:py-0">


                <div className="order-2 lg:order-1 lg:pr-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="fl1 mt-6 ">
                                {SLIDES[activeIndex].title}
                            </h1>
                            <p className="mt-6 fl7  !text-white">
                                {SLIDES[activeIndex].desc}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <button className="green-btn mt-8 md:mt-30">
                        Get Started
                    </button>
                </div>


                <div className="order-1 flex items-center justify-center lg:order-2 lg:justify-start">

                    <div className="relative h-[380px] w-[280px] md:h-[450px] md:w-[350px]">
                        {SLIDES.map((slide, index) => {
                            const style = getCardStyle(index);
                            const isFront = (index - activeIndex + SLIDES.length) % SLIDES.length === 0;

                            return (
                                <motion.div
                                    key={slide.id}
                                    className="absolute inset-0 overflow-hidden "
                                    initial={style}
                                    animate={style}

                                    drag={isFront ? "x" : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    onDragEnd={(_, info) => {
                                        if (isFront) {

                                            if (Math.abs(info.offset.x) > 100) {
                                                handleNext();
                                            }
                                        }
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    style={{

                                        cursor: isFront ? "grab" : "default",
                                        touchAction: "none"
                                    }}
                                    whileTap={{ cursor: "grabbing" }}
                                >
                                    <div className="relative h-full w-full pointer-events-none">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="h-102 w-70 object-cover"
                                        />
                                        <div className="absolute inset-0 " />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </main>
    );
}