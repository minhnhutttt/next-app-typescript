"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Talk = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="px-5 relative font-lalezar overflow-hidden flex items-center justify-center h-[550px] md:h-[890px] bg-[url(/assets/images/fv-img.png)] bg-no-repeat bg-center bg-cover"
    >
        <div className="w-full max-w-[1000px] mx-auto md:pb-[200px] pb-[100px]">
        <p className="mb-10"><img className="md:w-[616px]" src="/assets/images/lets-talk.svg" alt="" />
        </p>
        <a href="" className="md:w-[428px] w-[300px] md:h-[110px] h-16 pt-2 font-lalezar md:text-[50px] text-[32px] flex justify-center items-center leading-none bg-[#00B900] rounded-[23px] text-white hover:opacity-75 duration-150">
        <span>LINE<span className="md:text-[40px] text-[24px]">で話す</span></span>
        </a>
     </div>
    </section>
  );
};

export default Talk;
