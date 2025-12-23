"use client";
import { useState, useRef } from "react";

const partners = [
    {
        name: "AWS",
        logo: "/partnerships/aws.png",
        content:
            "AWS Computer Vision services, like Amazon Rekognition, use AI to analyze images and videos. With the help of this, CodeElan's platform is enabled to carry out tasks such as object detection, facial recognition, and content moderation. These services are scalable, reliable, and integrate seamlessly with other AWS offerings, enhancing applications in security, cloud infrastructure, healthcare, and more.",
    },
    {
        name: "Grafana",
        logo: "/partnerships/grafana.png",
        content:
            "Grafana enables observability and monitoring by visualizing metrics, logs, and traces. It helps CodeElan monitor cloud infrastructure, applications, and performance in real time.",
    },
    {
        name: "NVIDIA",
        logo: "/partnerships/nvidia.png",
        content:
            "NVIDIA’s Computer Vision AI leverages GPUs to power advanced image and video analysis. It enables CodeElan's platform applications like autonomous vehicles, medical imaging, and smart cities.",
    },
];

export default function Partnerships() {
    const [isPrevHovered, setIsPrevHovered] = useState(false);
    const [isNextHovered, setIsNextHovered] = useState(false);
    const [active, setActive] = useState(0);
    const touchStart = useRef(null);

    const prevIndex = (active - 1 + partners.length) % partners.length;
    const nextIndex = (active + 1) % partners.length;

    const prev = () => setActive(prevIndex);
    const next = () => setActive(nextIndex);

    const onTouchStart = (e) =>
        (touchStart.current = e.touches[0].clientX);

    const onTouchEnd = (e) => {
        if (!touchStart.current) return;
        const diff = touchStart.current - e.changedTouches[0].clientX;
        if (diff > 60) next();
        if (diff < -60) prev();
        touchStart.current = null;
    };

    return (
        <section className="py-24 relative">
           <div className="  relative mb-20 text-center">
                <h2 className="fl2 inline-block relative">
                   Partnerships
                    <span className="block absolute right-0  w-10 h-[5px] bg-[#49CF38]"></span>
                </h2>
            </div>

            <div className="carousel-wrapper"> 
                <div className="relative flex justify-center z-0">


                    <div className="side-card left ">
                        <img src={partners[prevIndex].logo} alt="" />
                    </div>


                    <div className="center-card fl7">
                        <img src={partners[active].logo} alt="" />
                        <p>{partners[active].content}</p>
                    </div>


                    <div className="side-card right">
                        <img src={partners[nextIndex].logo} alt="" />
                    </div>
                </div>
            </div>


            <div className="carousel-nav-wrapper">
                <button
                    onClick={prev}
                    onMouseEnter={() => setIsPrevHovered(true)}
                    onMouseLeave={() => setIsPrevHovered(false)}
                >
                    <img
                        src={isPrevHovered ? "/icons/prev1.svg" : "/icons/prev.svg"}
                        alt="Previous"
                    />
                </button>

                <button
                    onClick={next}
                    onMouseEnter={() => setIsNextHovered(true)}
                    onMouseLeave={() => setIsNextHovered(false)}
                >
                    <img
                        src={isNextHovered ? "/icons/next1.svg" : "/icons/next.svg"}
                        alt="Next"
                    />
                </button>
            </div>
        </section>

    );
}
