"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const AboutRoadMap = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative md:py-[100px] py-16 z-10 px-5">
      <div className="w-full max-w-[1300px] mx-auto overflow-hidden bg-black/50 md:rounded-[60px] rounded-[30px] md:pt-[108px] pt-16 px-5 md:pb-[88px] pb-12">
        <h4 className="fade-up text-center md:text-[48px] text-[28px] font-bold tracking-wide">Roadmap and Future Release Plans</h4>
        <div className="fade-up flex justify-center md:mt-10 mt-7">
            <p className="w-full max-w-[735px] mx-auto md:text-[18px] text-[16px] font-medium tracking-wide">
            DIVER is focused on the continuous development of innovative features and products. Our roadmap outlines specific plans to maximize the value we provide to our users. <br /><br />
            You can check DIVER's latest roadmap at the following link:
            </p>
        </div>
        <div className="w-full max-w-[596px] mx-auto bg-black rounded-[10px] p-5 md:p-[30px] mt-7 md:mt-[40px]">
            <p className="fade-up text-center md:text-[20px] text-[16px] font-bold leading-none text-[#53A1D8] tracking-wide">On this roadmap, you can see information such as</p>
            <div className="fade-up flex justify-center md:mt-5 mt-4">
                <ul className="list-disc md:text-[16px] text-[14px] text-[#53A1D8] tracking-widest">
                    <li>Timeline of already released products</li>
                    <li>Timeline of new products scheduled for release soon</li>
                    <li>Timeline of major product updates</li>
                </ul>
            </div>
        </div>
        <div className="fade-up flex justify-center md:mt-[56px] mt-8">
            <a href="/" className="md:text-[20px] text-[16px] font-semibold leading-none md:w-[320px] w-[280px] h-[60px] md:h-[70px] flex justify-center items-center [text-shadow:1px_1px_1px_rgba(0,_0,_0,_0.25)] bg-white text-[#005FD7] [box-shadow:-3px_-4px_20px_0px_rgba(255,_255,_255,_0.15)_inset,_4px_10px_30px_0px_rgba(24,_83,_158,_0.50)] rounded-[80px] tracking-widest">View roadmap</a>
          </div>
      </div>
    </section>
  );
};

export default AboutRoadMap;
