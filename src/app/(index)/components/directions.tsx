"use client";

import HoverFill from "@/components/hoverFill";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Directions = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative overflow-hidden px-5 md:pb-[280px] pb-[140px]">
      <div className="w-full mx-auto max-w-[1260px]">
        <h4 className="fade-up md:text-[64px] text-[32px] text-center font-bold">
          Future Directions and Conclusion
        </h4>
        <div className="flex max-xl:flex-col max-xl:justify-center max-xl:items-center xl:justify-between md:mt-[140px] mt-20">
          <div className=" relative">
            <div className="md:w-[626px] w-[350px] h-[330px] md:h-[591px] mix-blend-color-dodge">
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
          <div className="fade-up flex-1 flex flex-col items-center">
            <div className="max-xl:flex max-md:flex-col xl:w-[430px] mt-11 xl:divide-y max-md:divide-y max-md:divide-x-0 max-xl:divide-x border border-white ">
              <HoverFill>
                <div id="prospects" className="px-6 md:pt-10 pt-7 pb-5 md:h-[600px] flex flex-col justify-between ">
                  <div>
                    <p className="md:text-[32px] text-[24px] font-bold">
                      Future Prospects
                    </p>
                    <p className="md:text-[20px] text-[16px] mt-4 tracking-wider">
                      HGF technology has the potential to play an important role
                      in the areas of regenerative medicine, tissue repair, and
                      anticancer medicine. <br />
                      <br />
                      It is expected that commercialization and widespread use
                      of HGF will increase in the future as the technology
                      matures and clinical applications advance.
                    </p>
                  </div>
                  <div className="flex justify-end mt-8 md:mt-14">
                    <a
                      href="/"
                      className="flex items-center gap-2 md:text-[20px] text-[16px] font-bold duration-150 hover:opacity-75"
                    >
                      <span>Learn more</span>
                      <span>
                        <img src="/assets/images/arrow.svg" alt="" />
                      </span>
                    </a>
                  </div>
                </div>
              </HoverFill>
              <HoverFill>
                <div id="general" className="px-6 md:pt-10 pt-7 pb-5 md:h-[600px] flex flex-col justify-between ">
                  <div>
                    <p className="md:text-[32px] text-[24px] font-bold">
                      General summary
                    </p>
                    <p className="md:text-[20px] text-[16px] mt-4 tracking-wider">
                      Accelerating innovation and promoting the global diffusion
                      of HGF technology through the HGF DAO will help improve
                      our health and well-being.
                      <br />
                      <br />
                      This white paper will serve as a guidepost to clarify the
                      current status and challenges of HGF technology, and to
                      help you envision its future.
                    </p>
                  </div>
                  <div className="flex justify-end mt-8 md:mt-14">
                    <a
                      href="/"
                      className="flex items-center gap-2 md:text-[20px] text-[16px] font-bold duration-150 hover:opacity-75"
                    >
                      <span>Learn more</span>
                      <span>
                        <img src="/assets/images/arrow.svg" alt="" />
                      </span>
                    </a>
                  </div>
                </div>
              </HoverFill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directions;
