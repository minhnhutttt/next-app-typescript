"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

interface Member {
  id: number;
  image: string;
  position: string;
  name: string;
}

const members: Member[] = [
  {
    id: 1,
    image: "/assets/images/member-01.png",
    position: "CEO & Founder",
    name: "Tanaka Hiroshi",
  },
  {
    id: 2,
    image: "/assets/images/member-02.png",
    position: "CEO & Founder",
    name: "Nariyuki Terada",
  },
  {
    id: 3,
    image: "/assets/images/member-03.png",
    position: "Chief",
    name: "Akiko Yamamoto",
  },
  {
    id: 4,
    image: "/assets/images/member-04.png",
    position: "Chief Asia-Pacific Officer",
    name: "Liu Wei",
  },
  {
    id: 5,
    image: "/assets/images/member-05.png",
    position: "Chief Global Markets Officer",
    name: "Tanaka Hiroshi",
  },
  {
    id: 6,
    image: "/assets/images/member-06.png",
    position: "Chief Creative Officer",
    name: "Hiroshi Tanaka",
  },
];

const Member = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const panels = document.querySelectorAll('.panel');
    if (!panels.length) return;

    panelsRef.current = Array.from(panels) as HTMLDivElement[];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${panels.length * 600}vh`,
        scrub: 1,                  
        pin: true,                        
        markers: false,                   
      }
    });

    panels.forEach((panel, index) => {
      const startX = window.innerWidth;
      const startY = window.innerHeight - panel.clientHeight / 2;
      const endX = -panel.clientWidth;
      const endY = -panel.clientHeight / 2;

      console.log(endX, endY)

      gsap.set(panel, {
        x: startX,
        y: startY,
      });

      tl.to(panel, {
        x: endX,
        y: endY,
        duration: 1,
        ease: "none",
      }, index * 0.3);
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="px-5">
        <h3 className="md:text-[64px] xl:text-[128px] text-[40px] font-semibold text-center">
          BOARD MEMBERS
        </h3>
        <p className="md:text-[24px] text-[18px] leading-[1.8] w-full max-w-[910px] mx-auto">
          Meet our visionary leadership team bringing together decades of
          experience in global entertainment markets.
        </p>
      </div>
      <div className="min-h-screen">
        <div className="px-20 flex justify-end">
          <div className="">
            <div className="w-px h-[200px] bg-[#F34927] rotate-[30deg]"></div>
          </div>
        </div>
        <div className="md:pt-[9em] pt-[3em] overflow-hidden">
          <div ref={containerRef} className="flex items-center h-screen">
            <div className="relative w-screen h-full">
              <div className="absolute inset-0 w-screen">
                {members.map((item, index) => (
                  <div
                    key={item.id}
                    className="panel !w-[16em] md:!w-[23.25em] absolute overflow-hidden"
                  >
                    <div className="relative shake rounded-[0.75em] w-full h-full flex justify-center items-center overflow-hidden">
                      <div className="text-black">
                        <div className="flex w-full h-full justify-center flex-col items-center">
                          <img
                            className="object-contain w-full"
                            src={item.image}
                            alt={item.name}
                          />

                          <div className="mt-4 text-center">
                            <h4 className="font-semibold text-lg md:text-xl">
                              {item.name}
                            </h4>
                            <p className="text-sm md:text-base text-gray-600">
                              {item.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;