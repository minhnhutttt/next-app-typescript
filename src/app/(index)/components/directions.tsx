"use client";

import HoverFill from "@/components/hoverFill";
import { useRef } from "react";
import { gsap } from 'gsap';
import MouseDirectionDiv from "@/components/hoverFill";

const Directions = () => {
    const pathRef = useRef<SVGPathElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseY = e.clientY;
    const isFromTop = mouseY < rect.top + rect.height / 2;

    if (isFromTop && pathRef.current) {
      gsap.to(pathRef.current, {
        attr: { d: "M 0 100 V 100 Q 50 125 100 100 V 0 H 0 z" },
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseY = e.clientY;
    const isExitingFromTop = mouseY < rect.top + rect.height / 2;

    if (isExitingFromTop && pathRef.current) {
      gsap.to(pathRef.current, {
        attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };
  return (
    <section className="relative overflow-hidden">
      <div className="w-full mx-auto max-w-[1260px]">
        <h4 className="md:text-[64px] text-[32px] text-center font-bold">
          Future Directions and Conclusion
        </h4>
        <div className="flex justify-between md:mt-[140px] mt-20">
          <div className="relative">
            <div className="w-[626px] h-[591px] mix-blend-color-dodge">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover object-center"
              >
                <source src="/assets/videos/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-[430px] mt-11 divide-y border border-white ">

      <MouseDirectionDiv>
      <div className="px-6 pt-10 pb-5 h-[600px] flex flex-col justify-between ">
                <div>
                  <p className="md:text-[32px] text-[24px] font-bold">
                    Future Prospects
                  </p>
                  <p className="md:text-[20px] text-[16px] mt-4 tracking-wider">
                    HGF technology has the potential to play an important role
                    in the areas of regenerative medicine, tissue repair, and
                    anticancer medicine. <br />
                    <br />
                    It is expected that commercialization and widespread use of
                    HGF will increase in the future as the technology matures
                    and clinical applications advance.
                  </p>
                </div>
                <div className="flex justify-end mt-8 md:mt-14">
                  <a
                    href="/"
                    className="flex items-center gap-2 md:text-[20px] text-[16px] font-bold"
                  >
                    <span>Learn more</span>
                    <span>
                      <img src="/assets/images/arrow.svg" alt="" />
                    </span>
                  </a>
                </div>
              </div> 
      </MouseDirectionDiv>
            
              
              <div className="px-6 pt-10 pb-5 h-[600px] flex flex-col justify-between">
                <div>
                  <p className="md:text-[32px] text-[24px] font-bold">
                    Future Prospects
                  </p>
                  <p className="md:text-[20px] text-[16px] mt-4 tracking-wider">
                    HGF technology has the potential to play an important role
                    in the areas of regenerative medicine, tissue repair, and
                    anticancer medicine. <br />
                    <br />
                    It is expected that commercialization and widespread use of
                    HGF will increase in the future as the technology matures
                    and clinical applications advance.
                  </p>
                </div>
                <div className="flex justify-end mt-8 md:mt-14">
                  <a
                    href="/"
                    className="flex items-center gap-2 md:text-[20px] text-[16px] font-bold"
                  >
                    <span>Learn more</span>
                    <span>
                      <img src="/assets/images/arrow.svg" alt="" />
                    </span>
                  </a>
                </div>
              </div> 

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directions;
