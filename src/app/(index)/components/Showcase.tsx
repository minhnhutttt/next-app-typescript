"use client";

const Showcase = () => {
  return (
    <section className="relative overflow-hidden md:mt-[235px] mt-[150px] px-5 md:pb-[100px] pb-[60px]">
      <div className="w-full max-w-[1300px] mx-auto">
        <div className="px-5 text-[#F34927] md:pb-16 pb-10">
          <h3
            data-scroll
            className="text--enter md:text-[64px] xl:text-[128px] text-[clamp(20px,7.5vw,60px)] leading-[1.2] font-semibold text-center overflow-hidden tracking-widest"
          >
            <span data-splitting>
              IP ASSETS <br />
              SHOWCASE
            </span>
          </h3>
        </div>
        <div className="border-t border-[#F34927] md:pt-12 pt-8">
            <p data-scroll className="ani-slide-bottom text-center md:text-[32px] text-[20px] tracking-widest font-semibold">Entertainment Categories</p>
            <div className="flex justify-center flex-wrap gap-10 md:gap-[120px] w-full max-w-[870px] mx-auto md:mt-24 mt-16">
              <div data-scroll className="ani-slide-bottom relative overflow-hidden w-[210px]">
                  <div className="relative overflow-hidden bg-[linear-gradient(45deg,_#FBB03B_6.65%,_#ED1E79_93.35%)] size-[210px] rounded-[44px] flex justify-center items-center">
                      <img className="absolute animate-[spin_2s_linear_infinite]"  src="/assets/images/case-01-star.png" alt="" />
                      <img src="/assets/images/case-01-play.png" alt="" />
                  </div>
                  <span className="block text-center md:text-[20px] text-[16px] tracking-wider md:mt-8 mt-5">
                  Anime & Animation
                  </span>
              </div>
              <div data-scroll className="ani-slide-bottom relative overflow-hidden w-[210px]">
                  <div className="relative overflow-hidden bg-[linear-gradient(45deg,_#FBB03B_6.65%,_#ED1E79_93.35%)] size-[210px] rounded-[44px] flex justify-center items-center">
                      <img className="animate-[speech-bubble-move_2s_ease-out_infinite] absolute " src="/assets/images/case-02.png" alt="" />
                  </div>
                  <span className="block text-center md:text-[20px] text-[16px] tracking-wider md:mt-8 mt-5">
                  Manga & Comics
                  </span>
              </div>
              <div data-scroll className="ani-slide-bottom relative overflow-hidden w-[210px]">
              <div className="relative overflow-hidden bg-[linear-gradient(45deg,_#FBB03B_6.65%,_#ED1E79_93.35%)] size-[210px] rounded-[44px] flex justify-center items-center">
                      <img className="animate-[musical-notes-bounce_2s_ease-out_infinite] absolute " src="/assets/images/case-03.png" alt="" />
                  </div>
                  <span className="block text-center md:text-[20px] text-[16px] tracking-wider md:mt-8 mt-5">
                  Music & Concerts
                  </span>
              </div>
              <div data-scroll className="ani-slide-bottom relative overflow-hidden w-[210px]">
              <div className="relative overflow-hidden bg-[linear-gradient(45deg,_#FBB03B_6.65%,_#ED1E79_93.35%)] size-[210px] rounded-[44px] flex justify-center items-center">
                      <img className="animate-[scale_2s_ease-out_infinite] absolute" src="/assets/images/case-04.png" alt="" />
                  </div>
                  <span className="block text-center md:text-[20px] text-[16px] tracking-wider md:mt-8 mt-5">
                  Film & Television
                  </span>
              </div>
              <div data-scroll className="ani-slide-bottom relative overflow-hidden w-[210px]">
              <div className="relative overflow-hidden bg-[linear-gradient(45deg,_#FBB03B_6.65%,_#ED1E79_93.35%)] size-[210px] rounded-[44px] flex justify-center items-center">
                      <img src="/assets/images/case-05.png" alt="" />
                      <img className="absolute animate-[appear-disappear_2.5s_linear_0s_infinite]" src="/assets/images/case-05-01.png" alt="" />
<img className="absolute animate-[appear-disappear_2.5s_linear_0.5s_infinite]" src="/assets/images/case-05-02.png" alt="" />
<img className="absolute animate-[appear-disappear_2.5s_linear_1s_infinite]" src="/assets/images/case-05-03.png" alt="" />
<img className="absolute animate-[appear-disappear_2.5s_linear_1.5s_infinite]" src="/assets/images/case-05-04.png" alt="" />
                  </div>
                  <span className="block text-center md:text-[20px] text-[16px] tracking-wider md:mt-8 mt-5">
                  Art & Design
                  </span>
              </div>
              <div data-scroll className="ani-slide-bottom relative overflow-hidden w-[210px]">
              <div className="relative overflow-hidden bg-[linear-gradient(45deg,_#FBB03B_6.65%,_#ED1E79_93.35%)] size-[210px] rounded-[44px] flex justify-center items-center">
                      <img className="animate-[bounce-left-right_2s_ease-out_infinite] absolute" src="/assets/images/case-06.png" alt="" />
                  </div>
                  <span className="block text-center md:text-[20px] text-[16px] tracking-wider md:mt-8 mt-5">
                  Games & Interactive
                  </span>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
