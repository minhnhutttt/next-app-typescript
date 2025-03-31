"use client";

const BoardMember = () => {
 
  return (
    <section className="relative overflow-hidden md:mt-8 mt-4 px-5 md:pb-[272px] pb-[180px]">
      <div className="px-5 text-[#F34927]">
        <h3 data-scroll className="text--enter md:text-[64px] xl:text-[128px] text-[clamp(20px,7.5vw,60px)] font-semibold text-center overflow-hidden tracking-widest">
          <span data-splitting>BOARD MEMBERS</span>
        </h3>
        <p data-scroll className="ani-slide-bottom md:text-[24px] text-[16px] leading-[1.8] w-full max-w-[910px] mx-auto tracking-widest max-md:mt-5">
          Meet our visionary leadership team bringing together decades of
          experience in global entertainment markets.
        </p>
      </div>
      <div className="w-full max-w-[440px] md:max-w-[1090px] mx-auto flex justify-between items-center md:mt-[240px] mt-[100px] xl:gap-[100px] gap-8 max-md:flex-col-reverse">
        <div className="flex-1">
          <div data-scroll className="ani-slide-bottom flex items-center relative">
            <div className="w-px md:h-[200px] h-[160px] bg-[#F34927] rotate-[30deg] origin-bottom"></div>
            <div className="leading-[1.2] md:pl-[88px] pl-[66px] md:pt-16 pt-12">
              <p className="text-[clamp(15px,4vw,20px)] md:text-[18px] mb-1">CEO & Founder</p>
              <p className="md:text-[36px] lg:text-[48px] text-[clamp(24px,10vw,44px)] font-['Inspiration'] font-normal tracking-widest">Nariyuki Terada</p>
            </div>
          </div>
          <p data-scroll className="ani-slide-bottom md:text-[18px] text-[15px] leading-[1.8] md:mt-20 mt-12 tracking-widest">
            Meet the exceptional minds behind our vision. <br />
            From leading global entertainment companies to launching international icons, our board brings unmatched expertise and proven success. <br />
            Discover how each member is shaping the future.
          </p>
          <div data-scroll className="ani-slide-bottom flex justify-end md:mt-12 mt-8">
            <a href="/members" className="flex items-center md:text-[32px] text-[20px] font-semibold tracking-widest gap-2 border-b border-[#F34927] px-4">
              <span className="md:text-[21px] text-[17px] text-[#F34927]">★</span><span>LEARN MORE</span>
            </a>
          </div>
        </div>
        <div data-scroll className="ani-slide-bottom rounded-[20px] relative overflow-hidden max-md:w-full max-lg:w-1/2">
          <img src="/assets/images/member.png" alt="" />
          <span className="absolute md:bottom-10 left-4 bottom-7">
            <span className="block text-[12px] text-[#111111]/[0.7]">CEO & Founder</span>
            <span className="block text-[15px] font-bold">Nariyuki Terada</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default BoardMember;
