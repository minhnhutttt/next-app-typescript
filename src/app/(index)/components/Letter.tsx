"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Letter = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative bg-[url(/assets/images/letter-bg.png)] bg-cover bg-right px-5 md:py-[90px] py-[50px]"
    >
      <div className="w-full max-w-[1000px] mx-auto flex">
       <div className="fade-up w-[417px] p-px u-gradient flex rounded-[30px]">
        <div className="bg-white bg-[url(/assets/images/wing.png)] bg-no-repeat bg-center bg-[size:276px_auto] w-full h-full rounded-[30px] px-7 md:py-[56px] py-8 md:px-11 md:text-[20px] text-[16px] leading-loose tracking-wider">
        BYT Coin goes beyond a simple point token and aims to become a platform for chain value exchange starting from beauty experiences. Like the chain of connections that the word blockchain represents, it seamlessly connects various aesthetic experiences and value exchange, contributing to the realization of a richer lifestyle. <br />
        Through this innovative platform, we will provide new value not only to the beauty industry but to all related industries and users.
        </div>
       </div>
      </div>
    </section>
  );
};

export default Letter;
