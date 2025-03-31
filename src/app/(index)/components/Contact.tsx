"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Contact = () => {
  const bgLineRef = useRef<HTMLDivElement>(null);
  const applyRef = useRef<HTMLElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {

    if (bgLineRef.current) {
      gsap.set(bgLineRef.current, {
        height: 0,
        opacity: 1
      });
    }

    if (applyRef.current) {
      gsap.set(applyRef.current, {
        opacity: 0,
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactSectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });

    tl.to(bgLineRef.current, {
      height: "100%",
      duration: 1.5,
      ease: "power2.out",
    });

    tl.to(applyRef.current, {
      opacity: 1,
      duration: 2,
      ease: "power2.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section 
        ref={contactSectionRef}
        className="relative md:pt-[150px] pt-[100px] "
      >
        <div className=" overflow-hidden bg-[#FAE2D7] md:rounded-t-[100px] rounded-t-[40px] px-5 md:pb-[130px] pb-20">
        <div className="relative md:pt-[130px] pt-[60px]">
          <div 
            ref={bgLineRef}
            className="absolute overflow-hidden top-0 inset-x-0 bg-[url(/assets/images/line.svg)] bg-no-repeat bg-top max-md:bg-[size:auto_200px] md:bg-[position:top_40px_center]"
          ></div>
          <h3 className="md:text-[64px] xl:text-[128px] text-[clamp(20px,7.5vw,60px)] leading-[1.2] font-semibold text-center overflow-hidden tracking-widest">
            <span>CONTACT</span>
          </h3>
          <p className="md:text-[32px] text-[20px] font-semibold text-center tracking-widest mt-6 md:mt-10">
            For Investors & Media 
          </p>
          <p className="md:w-[640px] md:text-[18px] text-[15px] mx-auto mt-7">
            Interested in learning more about investment opportunities or media inquiries? Our team is ready to assist you. 
          </p>
          <div className="flex justify-center md:mt-[72px] mt-[50px]">
            <a 
              href="#" 
              className="md:w-[340px] w-[300px] h-20 md:h-[110px] flex items-center justify-center bg-[#F34927] rounded-full md:text-[30px] text-[20px] text-[#FAE2D7]"
            >
              CONTACT US
            </a>
          </div>
          </div>
        </div>
      </section>
      <section 
        id="apply" 
        ref={applyRef}
        className="relative overflow-hidden bg-[url(/assets/images/apply-bg.png)] bg-cover flex items-center justify-center px-5 py-[100px] md:py-[178px]"
      >
        <div className="">
          <p className="md:text-[32px] text-[24px] text-center text-white font-semibold tracking-widest">
            Aspiring Artists & Performers
          </p>
          <div className="flex justify-center md:mt-[60px] mt-[30px]">
            <a 
              href="#" 
              className="md:w-[340px] w-[300px] h-20 md:h-[110px] flex items-center justify-center bg-white rounded-full md:text-[30px] text-[20px] text-[#F34927]"
            >
              Apply as Artist
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;