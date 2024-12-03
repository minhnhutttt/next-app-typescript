"use client";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const imagesTop = [
  "/assets/images/project-01.png",
  "/assets/images/project-02.png",
  "/assets/images/project-03.jpg",
];
const imagesBottom = [
  "/assets/images/project-04.jpg",
  "/assets/images/project-05.jpg",
  "/assets/images/project-06.png",
  "/assets/images/project-07.png",
];
const Project = () => {
    useEffect(() => {
        const marquiseLeft = document.querySelector(".marquise-left");
        const marquiseRight = document.querySelector(".marquise-right");
        let ctx = gsap.context(() => {
            gsap
            .timeline({
              scrollTrigger: {
                trigger: marquiseLeft,
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'play pause reverse pause',
                scrub: true,
              },
            })
            .to(marquiseLeft, {
              xPercent: 10,
              duration: 1,
              ease: 'linear',
            })
            gsap
            .timeline({
              scrollTrigger: {
                trigger: marquiseRight,
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'play pause reverse pause',
                scrub: true,
              },
            })
            .to(marquiseRight, {
              xPercent: -10,
              duration: 1,
              ease: 'linear',
            })
        });
    
        return () => ctx.revert();
      }, []);
  return (
    <section className="md:pt-[9em] pt-[5em]">
      <div className="md:px-[2em] px-[1em]">
        <div className="mx-auto max-w-[80em] w-full leading-[1.3]">
          <div className="text-[1em] font-medium uppercase">Made with love</div>
          <div className="md:mb-[4em] mb-[1em]">
            <h2 className="uppercase text-[1.6em] md:text-[4.5em] font-bold">our projects</h2>
          </div>
        </div>
      </div>
      <div className="md:pt-[4em] pt-[2em] cursor-none overflow-hidden relative">
        <div className="flex gap-[1em] md:gap-[2.5em] items-center justify-center marquise-left ml-[-10%]">
          {imagesTop.map((image, index) => (
            <div className="flex-none" key={index}>
              <a
                href="#"
                className="rounded-[.5em] overflow-hidden flex items-center justify-center border-[4px] border-white hover:border-black"
              >
                <img
                  src={image}
                  alt=""
                  className="object-contain flex-none md:min-w-[10em] max-w-none h-full md:max-h-[25em] max-h-[25vh] duration-150"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="flex gap-[1em] md:gap-[2.5em] items-center justify-center marquise-right  ml-[25%] mt-[2.5em] mb-[4em]">
          {imagesBottom.map((image, index) => (
            <div className="flex-none" key={index}>
              <a
                href="#"
                className="rounded-[.5em] overflow-hidden flex items-center justify-center border-[4px] border-white hover:border-black"
              >
                <img
                  src={image}
                  alt=""
                  className="object-contain  flex-none md:min-w-[10em] max-w-none h-full md:max-h-[25em] max-h-[25vh] duration-150"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
