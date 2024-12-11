"use client";
import ImagePopup from "@/components/imagePopup";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from "react";

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
        image: '/assets/images/MessUp_Holo.jpg',
        href: "#"
    },
    {
        id: '02',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        image: '/assets/images/GET-REAL-Sticker_08.png',
        href: "#"
    },
    {
        id: '03',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        image: '/assets/images/LETS-ROLL-Sticker_01.png',
        href: "#"
    },
    {
        id: '04',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        image: '/assets/images/MessUp_Holo.jpg',
        href: "#"
    },
    {
        id: '05',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        image: '/assets/images/MessUp_Holo_Circle.png',
        href: "#"
    },
    {
        id: '06',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        image: '/assets/images/MessUp_Holo.jpg',
        href: "#"
    },
    {
        id: '07',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        image: '/assets/images/WTF-Sticker_01.png',
        href: "#"
    },
    {
        id: '08',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        image: '/assets/images/MessUp_Holo.jpg',
        href: "#"
    },
]

export default function ViewWorks() {
    const containerRef = useRef<HTMLElement>(null)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    useEffect(() => {
        const marquiseRight = document.querySelector(".marquise-right");
        let ctx = gsap.context(() => {
            gsap
            .timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                toggleActions: 'play pause reverse pause',
                scrub: true,
              },
            })
            .to(marquiseRight, {
              xPercent: -40,
              duration: 3,
              ease: 'linear',
            })
        });
    
        return () => ctx.revert();
      }, []);
  return (
    <main ref={containerRef} className="bg-black overflow-hidden">
        <div className="pt-[2rem]">
            <div className="flex justify-center items-center py-5">
                <a href="/" className=""><img className="w-[70px]" src="/assets/images/logo.svg" alt="" /></a>
            </div>
            <div className="mt-20 w-[140vw] max-w-none text-white font-bold text-[24vw] leading-none marquise-right flex whitespace-nowrap">
            WORKS WORKS
            </div>

            <div className="md:py-[13rem] py-[8rem] px-5 md:px-10">
                <p className="text-[1.6rem] mb-5">Selected Projects
                </p>
                <div className="border-t border-white divide-y divide-white">
                    {data.map((item,index) => (
                        <a href={item.href} className="group relative hover:z-30 py-[2rem] grid items-center gap-x-[2rem] grid-cols-6 md:grid-cols-12 md:gap-x-[4.8rem] md:text-[1.6rem] text-[4vw] text-white font-bold duration-200" key={index}  onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}>
                                <span className="h-px bg-white absolute top-0 z-10 inset-x-0 opacity-0 group-hover:opacity-100"></span>
                            <div className="fixed inset-0 pointer-events-none group-hover:opacity-100 opacity-0  duration-1000">
                                <div className="w-full h-full absolute group-hover:opacity-70 opacity-0 bg-black"></div>
                                <div className="flex items-center justify-center h-full relative">
                                    <ImagePopup imageSrc={item.image} isHovered={hoveredIndex === index}/>
                                </div>
                            </div>
                            <div className="col-[1_/_span_1] max-md:hidden relative">{item.id}</div>
                            <div className="md:col-[2_/_span_1] col-[1_/_span_1] relative">{item.client}</div>
                            <div className="md:col-[3_/_span_6] col-[2_/_span_2] relative">{item.title}</div>
                            <div className="md:col-[9_/_span_2] col-[5_/_span_3] relative">{item.au}</div>
                            <div className="col-[12_/_span_1] flex items-center gap-2 max-md:hidden relative">
                            Launch
                            <span className="bg-white group-hover:scale-110 duration-200 group-hover:rotate-0 -rotate-45 rounded-full flex-[0_0_24px] h-6 flex items-center justify-center"><img src="/assets/images/arrow.svg" alt="" /></span>
                            </div>
                            <span className="h-px bg-white absolute bottom-0 inset-x-0 opacity-0 group-hover:opacity-100"></span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </main>
  );
}
