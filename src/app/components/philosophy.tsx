"use client";
import Button from "@/components/button";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Philosophy = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden md:pb-[310px] pb-[120px]"
    >
        <div className="w-full md:max-w-[1440px] max-w-[440px] mx-auto pt-16 md:pt-[150px]">
            <div className="flex gap-8 md:gap-14 lg:gap-[86px] max-md:flex-col md:mb-[210px] mb-[120px]">
                <div data-scroll="out" className="relative max-md:w-auto max-dt:w-1/2">
                    <div className="absolute left-9 top-2 z-10">
                        <Title rect="lg:text-[128px] md:text-[110px] text-[50px] text-black dark:text-white leading-none whitespace-nowrap">Our Philosophy</Title>
                    </div>
                    <figure className="fadein relative">
                        <img src="/assets/images/img-philosophy-01.png" alt="" />
                    </figure>
                    <div className="fadein max-md:hidden lg:pl-10 pl-5 pt-7 md:pt-10">
                        <Button href="/about">ABOUT</Button>
                    </div>
                </div>
                <div data-scroll="out" className="font-lato flex-1 max-w-[598px] lg:pt-[270px] md:pt-[200px] max-md:px-5 md:pr-10 dark:text-white">
                    <h3 className="fadein md:text-[32px] text-[20px] font-black leading-[1.4]">
                    Preserving the value of rare assets for generations
                    </h3>
                    <p className="fadein md:text-[18px] text-[14px] font-medium mt-5 leading-[1.3]">
                    At our company, we are dedicated to preserving the value of rare and precious assets for generations to come. Our investment philosophy is rooted in a long-term perspective, unswayed by short-term market fluctuations. <br /><br />Through meticulous research and analysis, we identify assets with the highest investment value, focusing on factors such as rarity, authenticity, and preservation. We then construct a well-diversified portfolio to mitigate risk and ensure stable value appreciation.<br /><br />Our goal is to nurture and protect the intrinsic value of these assets, not to chase fleeting trends or quick profits. By safeguarding these timeless treasures, we aim to contribute to society by passing on their value to future generations.<br /><br />This philosophy guides our every decision and drives our unwavering commitment to preserving the worth of rare assets.
                    </p>
                </div>
                <div className="fadein md:hidden px-5">
                    <Button href="/about">ABOUT</Button>
                </div>
            </div>
            <div className="flex flex-row-reverse gap-8 md:gap-14 lg:gap-[76px] max-md:flex-col">
                <div data-scroll="out" className="relative max-md:w-auto max-dt:w-1/2">
                    <div className="absolute right-9 top-2 z-10">
                        <Title rect="lg:text-[128px] md:text-[110px] text-[50px] text-white leading-none whitespace-nowrap">Featured RWAs</Title>
                    </div>
                    <figure className="fadein relative">
                        <img src="/assets/images/img-philosophy-02.png" alt="" />
                    </figure>
                </div>
                <div data-scroll="out" className="font-lato flex-1 max-w-[610px] lg:pt-[295px] md:pt-[200px] max-md:px-5 md:pl-10 text-white ">
                    <h3 className="fadein md:text-[32px] text-[20px] font-black leading-[1.4]">
                    Discover the world&apos;s most sought-after real world assets
                    </h3>
                    <p className="fadein md:text-[18px] text-[14px] font-medium mt-5 leading-[1.3]">
                    Real world assets (RWAs) have captured the attention of discerning collectors worldwide. These tangible assets, including rare whiskeys, trading cards, art, and fine wines, offer a compelling combination of scarcity, historical significance, and potential for long-term value appreciation.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Philosophy;
