"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
const IntroImage = ({image, text}: {image:string, text:string}) => (
    <div data-scroll className="xl:w-[363px] lg:w-[300px] md:w-[200px] w-full">
        <div className="px-3 md:px-5 fade-up"><img src={image} alt={text} /></div>
        <div data-splitting className="ani-text ani-bg u-perspective bg-[linear-gradient(180deg,transparent_0%,_#fff_0)] relative h-[50px] md:h-[68px] flex items-center justify-center md:text-[32px] text-[20px] md:-mt-[34px] -mt-[25px] tracking-[0.2em]">
            {text}
        </div>
    </div>
)

const Introduction = () => {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="relative px-5"
    >
      <div className="w-full max-w-[1220px] mx-auto relative">
        <div className="flex items-start justify-between gap-5 max-md:flex-wrap max-md:mt-10">
            <div className="md:mt-40 max-md:w-[45%]">
                <IntroImage image="/assets/images/introduction-img-01.png" text="Nails" />
            </div>
            <p className="fade-up max-w-[377px] md:text-[18px] text-[15px] leading-loose mt-6 md:mt-32 tracking-wider max-md:order-3">
                    BYT Coin (Beauty Coin) is a token system originating from the beauty industry built on DIVER Chain. We will go beyond the framework of a simple point program and create a chain-recycling platform that seamlessly connects beauty, nails, fashion, and various related industries. <br />
                    <br />
                    <br />
                    We support the realization of a richer lifestyle by not limiting the user's aesthetic experience to one closed environment, but by naturally linking it to a variety of related services and products.
            </p>
            <div className="md:mt-2 mt-10 max-md:order-2 max-md:w-[45%]">
                <IntroImage image="/assets/images/introduction-img-02.png" text="Beauty" />
            </div>
        </div>
        <div className="flex justify-center md:gap-16 gap-5 max-md:mt-4">
        <div className="mt-11 max-md:w-[45%]">
                <IntroImage image="/assets/images/introduction-img-03.png" text="Hair" />
            </div>
            <div className="lg:-mt-6 max-md:w-[45%]">
                <IntroImage image="/assets/images/introduction-img-04.png" text="Fashion" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
