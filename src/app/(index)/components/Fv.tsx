"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Fv = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative font-lalezar overflow-hidden flex items-center justify-center h-[550px] md:h-[890px] bg-[url(/assets/images/fv-img.png)] bg-no-repeat bg-center bg-cover"
    >
     <h2 className="md:text-[50px] text-[30px]">we are ROGYX!!</h2>
     <a href="/" className="absolute max-md:left-1/2 max-md:-translate-x-1/2 md:right-20 bottom-10 md:bottom-20 text-white flex items-center justify-center w-[278px] h-[55px] md:h-[70px] bg-[#00D4FF] rounded-[23px] md:text-[18px] text-[15px]">
     今すぐ応募する
     </a>
    </section>
  );
};

export default Fv;
