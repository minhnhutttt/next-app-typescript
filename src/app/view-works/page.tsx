"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from "react";
import ImagePopup from "@/components/imagePopup";

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})
const data = [
    {
        id: '01',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        video01: '/assets/videos/6.mp4',
        video02: '/assets/videos/6.mp4',
        video03: '/assets/videos/6.mp4',
    },
    {
        id: '02',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        video01: '/assets/videos/6.mp4',
        video02: '/assets/videos/6.mp4',
        video03: '/assets/videos/6.mp4',
    },
    {
        id: '03',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        video01: '/assets/videos/6.mp4',
        video02: '/assets/videos/6.mp4',
        video03: '/assets/videos/6.mp4',
    },
    {
        id: '04',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        video01: '/assets/videos/6.mp4',
        video02: '/assets/videos/6.mp4',
        video03: '/assets/videos/6.mp4',
    },
    {
        id: '05',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        video01: '/assets/videos/6.mp4',
        video02: '/assets/videos/6.mp4',
        video03: '/assets/videos/6.mp4',
    },

]

export default function ViewWorks() {
    const isMobile = useMediaQuery("(max-width: 1024px)", false);
    const containerRef = useRef<HTMLDivElement>(null);
    const containerWorkRef = useRef<HTMLDivElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const marquiseRight = document.querySelector(".marquise-right");
        let ctx = gsap.context(() => {
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        toggleActions: "play pause reverse pause",
                        scrub: true,
                    },
                })
                .to(marquiseRight, {
                    xPercent: -40,
                    duration: 3,
                    ease: "linear",
                });
        });

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                containerWorkRef.current &&
                !containerWorkRef.current.contains(event.target as Node)
            ) {
                setHoveredIndex(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleHover = (index: number) => {
        setHoveredIndex(index);
    };

    const handleLeave = () => {
        setHoveredIndex(null);
    };

    const handleClick = (index: number) => {
        setHoveredIndex(hoveredIndex === index ? null : index);
    };

    return (
        <main ref={containerRef} className="bg-black overflow-hidden">
            <div className="pt-[2rem]">
                <div className="flex justify-center items-center py-5">
                    <a href="/" className="">
                        <img
                            className="w-[70px]"
                            src="/assets/images/logo.svg"
                            alt=""
                        />
                    </a>
                </div>
                <div className="mt-20 w-[140vw] max-w-none text-white font-bold text-[24vw] leading-none marquise-right flex whitespace-nowrap ">
                Gallery Gallery
                </div>

                <div className="md:py-[13rem] py-[8rem] px-5 md:px-10">
                    <p className="text-[1.6rem] mb-5">Selected Projects</p>
                    <div ref={containerWorkRef} className="border-t border-white divide-y divide-white">
                        {data.map((item, index) => (
                            <div
                                className={`group relative py-[2rem] grid items-center gap-x-[2rem] grid-cols-6 md:grid-cols-12 md:gap-x-[4.8rem] md:text-[1.6rem] text-[4vw] text-white font-bold duration-200 ${hoveredIndex === index && 'z-30'}`}
                                key={index}
                                onMouseEnter={!isMobile ? () => handleHover(index) : undefined}
                                onMouseLeave={!isMobile ? handleLeave : undefined}
                                onClick={isMobile ? () => handleClick(index) : undefined}
                            >
                                <span className={`h-px bg-white absolute top-0 z-10 inset-x-0 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}></span>
                                <div className={`fixed inset-0 pointer-events-none duration-1000  ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="w-full h-full absolute opacity-70 bg-black"></div>
                                    <div className="flex items-center justify-center h-full relative">
              
                                        <ImagePopup
                                        id={item.id}
                                            videoSrc01={item.video01}
                                            videoSrc02={item.video02}
                                            videoSrc03={item.video03}
                                            isHovered={hoveredIndex === index}
                                        />
                                    </div>
                                </div>
                                <div className="col-[1_/_span_1] max-md:hidden relative">
                                    {item.id}
                                </div>
                                <div className="md:col-[2_/_span_1] col-[1_/_span_1] relative">
                                    {item.client}
                                </div>
                                <div className="md:col-[3_/_span_6] col-[2_/_span_2] relative">
                                    {item.title}
                                </div>
                                <div className="md:col-[9_/_span_2] col-[5_/_span_3] relative">
                                    {item.au}
                                </div>
                                <span className={`h-px bg-white absolute bottom-0 inset-x-0 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
