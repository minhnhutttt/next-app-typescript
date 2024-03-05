"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function FV() {
  const animateRefs = useScrollAnimation("zoom");
  const animateRightRefs = useScrollAnimation("slideRight");
  return (
    <section className="md:bg-[url('/images/fv-bg.png')] bg-[url('/images/fv-bg-sp.png')] bg-no-repeat min-[1440px]:bg-[length:742px_auto] md:bg-[length:51.5%_auto] bg-[length:80%_auto] bg-right-bottom md:bg-right-top">
      <div className="flex max-md:flex-col w-full  mx-auto gap-8 pt-[90px] pb-20 md:pb-[114px] md:pt-[65px]">
        <div
          ref={animateRefs}
          className="opacity-0 flex-1 flex flex-col items-center md:pt-[100px] md:pl-[60px]"
        >
          <h3 className="">
            <img
              className="md:w-[46.944vw] w-[80vw] min-[1440px]:w-auto"
              src="/images/fv-text.png"
              alt=""
            />
          </h3>
          <div className="text-center font-bold tracking-[0.65em] leading-[1.3] mt-5">
            <p className="text-[11.5vw] md:text-[7.431vw] min-[1440px]:text-[107px]">
              <span className="text-[11.2vw] md:text-[7.292vw] min-[1440px]:text-[105px]">
                と
              </span>
              貼るだけ
            </p>
            <p className="text-[14.5vw] md:text-[9.097vw] min-[1440px]:text-[131px]">
              簡単証明
            </p>
          </div>
        </div>
        <div ref={animateRightRefs} className="opacity-0 md:pt-9 max-md:w-full">
          <figure className="min-[1440px]:w-auto md:w-[42.014vw] w-[66vw] max-md:ml-auto">
            <img src="/images/fv-image.png" alt="RWA Tag" />
          </figure>
        </div>
      </div>
    </section>
  );
}
