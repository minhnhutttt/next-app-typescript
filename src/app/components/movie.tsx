"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Movie = () => {
  const ref = useScrollAnimations();
  let mm = gsap.matchMedia();

  useEffect(() => {
    const element = document.querySelector(".fixed-video");

    if (element) {
      mm.add("(min-width: 768px)", () => {
        
      gsap.to(element.querySelector(".fixed-video-content"), {
        duration: 0.5,
        width: "48%",
        transformOrigin: "top left",
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "top -100%",
          scrub: true,
        },
      });
      });
    }
  });
  return (
    <section ref={ref} className="md:py-[104px] py-[60px] px-5 bg-[#101010]">
      <div className="fixed-video">
        <div className="w-full max-w-[1320px] mx-auto gap-16 md:gap-20 relative">
          <div className="fixed-video-content w-full overflow-hidden md:sticky top-[120px] left-0">
            <div className="w-full">
              <div className="title font-light md:text-[16px] text-[14px] text-center mb-5 md:mb-[30px] text-[#D9D9D9] tracking-[0.4em]">
                動画で体験！DIVER Biz
              </div>
              <video muted loop controls className="aspect-[31/20]" poster="">
                <source src="/videos/fv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="flex md:pt-[100%] pt-12">
            <div className="w-full md:w-[48%] ml-auto">
              <div className="font-light md:text-[16px] text-[14px] text-center mb-5 md:mb-[30px] text-[#D9D9D9] tracking-[0.4em]">
                すぐに作れる！NFT名刺制作ガイド
              </div>
              <video muted loop controls className="aspect-[31/20]" poster="">
                <source src="/videos/fv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
