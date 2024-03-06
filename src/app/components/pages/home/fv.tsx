"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function FV() {
  const animateRefs = useScrollAnimation("zoom");
  const animateRightRefs = useScrollAnimation("slideRight");
  return (
    <section className="bg-[url('/images/fv-bg.png')] bg-cover">
        <div className="flex max-md:flex-col w-full md:max-w-[90.278vw] min-[1440px]:max-w-[1300px] mx-auto gap-8 pt-[90px] md:pt-[105px]">
            <div ref={animateRefs} className="opacity-0 flex-1 md:pl-3 max-md:max-w-[80vw] max-md:flex max-md:items-center max-md:flex-col max-md:mx-auto">
                <h3 className="">
                    <img className="md:w-[44.375vw] w-[80vw] min-[1440px]:w-auto" src="/images/fv-text.png" alt="" />
                </h3>
                <div className="flex justify-end md:mt-[-2.778vw] min-[1440px]:mt-[-40px]">
                    <h1 className="text-white font-black text-[15vw] md:text-[8.681vw] min-[1440px]:text-[125px] leading-tight text-center whitespace-nowrap">
                        <span className="text-[14vw] md:text-[7.917vw] min-[1440px]:text-[114px] tracking-wide">と</span>貼るだけ<br />
                        <span className="tracking-[0.23em] mr-[-24px]">簡単証明</span>
                    </h1>
                </div>
            </div>
            <div ref={animateRightRefs} className="opacity-0 md:pt-9 max-md:w-full">
                <figure className="min-[1440px]:w-auto md:w-[35.486vw] w-[65vw] max-md:ml-auto">
                    <img src="/images/fv-img.png" alt="RWA Tag" />
                </figure>
            </div>
        </div>
    </section>
  );
}
