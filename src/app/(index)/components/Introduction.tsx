"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";


const Introduction = () => {
    const ref = useScrollAnimations()
  return (
    <section ref={ref} className="relative pt-[76px] pb-[127px] px-5 overflow-hidden">
        <div className="w-full max-w-[1440px] flex items-center justify-center mx-auto max-xl:flex-col max-xl:gap-20">
            <div data-scroll className="md:w-[877px] relative">
                <div className="flex gap-2.5">
                    <p className="scale-up md:w-[167px] w-[100px] !delay-100"><img src="/assets/images/card12.jpg" alt="" /></p>
                    <p className="scale-up md:w-[167px] w-[100px] !delay-300"><img src="/assets/images/card02.jpg" alt="" /></p>
                    <p className="scale-up md:w-[167px] w-[100px] !delay-200"><img src="/assets/images/card16.jpg" alt="" /></p>
                </div>
                <div className="flex gap-2.5 mt-4 -ml-5">
                    <p className="scale-up md:w-[230px] w-[130px] !delay-100"><img src="/assets/images/card03.jpg" alt="" /></p>
                    <p className="scale-up md:w-[230px] w-[130px] !delay-400"><img src="/assets/images/card13.jpg" alt="" /></p>
                </div>
                <div className="flex gap-2.5 mt-4 ml-[128px]">
                    <p className="scale-up md:w-[230px] w-[130px] !delay-200"><img src="/assets/images/card05.jpg" alt="" /></p>
                    <p className="scale-up md:w-[230px] w-[130px] !delay-75"><img src="/assets/images/card15.jpg" alt="" /></p>
                </div>
                <div className="flex gap-2.5 mt-4 ml-1">
                    <p className="scale-up md:w-[230px] w-[130px] !delay-300"><img src="/assets/images/card11.jpg" alt="" /></p>
                    <p className="scale-up md:w-[230px] w-[130px] !delay-200"><img src="/assets/images/card04.jpg" alt="" /></p>
                </div>
                <div className="flex gap-2.5 mt-4 md:ml-[128px]">
                    <p className="scale-up md:w-[230px] w-[130px] !delay-300"><img src="/assets/images/card07.jpg" alt="" /></p>
                    <p className="scale-up md:w-[230px] w-[130px] !delay-[.45s]"><img src="/assets/images/card10.jpg" alt="" /></p>
                    <p className="scale-up md:w-[230px] w-[130px] !delay-400"><img src="/assets/images/card08.jpg" alt="" /></p>
                    
                </div>
                <p className="scale-up md:w-[347px] w-[280px] absolute top-1/2 right-[10%] md:left-1/2 !delay-500"><img src="/assets/images/card06.jpg" alt="" /></p>
                <p className="scale-up md:w-[347px] w-[280px] absolute top-[16%] left-[5%] md:left-1/4 !delay-[.6s]"><img src="/assets/images/card01.jpg" alt="" /></p>
            </div>
            <div data-scroll className="flex-1">
                <p className="md:text-[48px] text-[24px] font-black text-white whitespace-nowrap">
                    <span className="scale-up !delay-[.7s]">LINEでは軽すぎる。</span><br />
                    <span className="scale-up !delay-[.8s]">メールでは味気ない。</span><br />
                    <br />
                    <span className="scale-up !delay-[.9s]"><span className="md:text-[68px] text-[32px]">本気</span>の想いを、</span><br />
                    <span className="scale-up !delay-[1s]">“贈る”という</span><br />
                    <span className="scale-up !delay-[1.1s]">体験で届けよう。</span>
                </p>
            </div>
        </div>
    </section>
  );
};

export default Introduction;
