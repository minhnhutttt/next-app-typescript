"use client";

import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  'Area-limited NFTs linked with GPS',
  'NFT display on maps and direct NFT acquisition from maps',
  'Direct NFT distribution via websites or SNS using deep links',
  'Confidential information and business card NFTs through encrypted NFTs',
  'Country-independent remittance and reception',
  'Realization of micropayments without sacrifices, thanks to free fees',
  'Storage system utilizing nodes distributed worldwide',
  'RWA tags linking real items with NFTs',
  'NFT mint system enabling NFT projects without developer skills',
  'Project fundraising utilizing DRC20'
]

const About = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative md:pb-[238px] pb-[120px]">
      <div className="fade-up w-full md:max-w-[1440px] mx-auto pt-16 md:pt-[110px] pl-[5.208vw] dt:pl-[75px]">
        <h3 className="text-[12.5vw] dt:text-[180px] font-light leading-none">
        Surprising use <br />cases pioneered <br />
        <span className="w-full flex items-center justify-between gap-[2.778vw] dt:gap-10"><span className="flex items-center gap-[2.778vw] dt:gap-10">by <img className="drop-shadow-[0_0px_60px_#0044D2] max-dt:w-[32.431vw]" src="/assets/images/diver.svg" alt="" /></span>
        <img className="max-dt:w-[42.569vw] mt-[1.667vw] dt:mt-6 " src="/assets/images/about-line.png" alt="" /></span>
        </h3>
      </div>
      <div className="w-full max-w-[1440px] mx-auto mt-12 md:mt-[190px]">
        <div className="fade-up flex items-end max-md:flex-col">
          <div className="max-w-[900px] pb-5 md:pb-[80px]">
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover object-left aspect-[900/600]"
              >
                <source src="/assets/videos/about.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </div>
          <div className="lg:text-[40px] md:text-[32px] text-[24px] font-light md:ml-[-18.056vw] dt:ml-[-260px] max-md:px-5 pr-5">
            DIVER is fusing the real and digital worlds, creating unprecedented business models and social systems.
          </div>
        </div>
        <div className="px-5 md:mt-[84px] mt-14">
          <div className="w-full max-w-[1260px] mx-auto border-y-2 border-white divide-y-2 divide-white">
            {data.map((text, index) => (
              <div className="fade-up md:text-[36px] text-[20px] font-medium md:py-[30px] py-5 md:px-5 px-3 leading-[1.2]" key={index}>
                {text}
              </div>
            ))}
          </div>
          <div className="fade-up flex justify-center md:mt-[78px] mt-10">
            <Button href="/usecase" rect="relative md:text-[20px] text-[16px] font-semibold leading-none md:w-[320px] w-[280px] h-[60px] md:h-[70px] flex justify-center items-center [text-shadow:1px_1px_1px_rgba(0,_0,_0,_0.25)] bg-[#005FD7] [box-shadow:-3px_-4px_20px_0px_rgba(255,_255,_255,_0.15)_inset,_4px_10px_30px_0px_rgba(24,_83,_158,_0.50)] rounded-[80px] tracking-widest overflow-hidden">
            See amazing use cases
        </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
