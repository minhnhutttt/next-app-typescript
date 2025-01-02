"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Vision = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative"
    >
        <div className="w-full max-w-[1440px] mx-auto md:mt-[163px] mt-[100px]">
            <p className="fade-up w-full max-w-[715px] mx-auto md:text-[18px] text-[15px] leading-loose px-5">
            This white paper proposes the establishment of EXO DAO and the issuance of EXO tokens to transform the world in the fields of regenerative medicine, environmental protection, and personalized medicine through the application of exosome technology. Exosomes are nano-sized vesicles that carry information between cells, and are attracting attention as a next-generation biotechnology due to their multifunctionality.
            </p>
            <div className="flex md:mt-[150px] mt-20 relative max-md:flex-col max-md:justify-center max-md:items-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><img className="fade-up max-md:w-[40px] max-xl:w-[80px]" src="/assets/images/ic.png" alt="" /></div>
                <div className="fade-up relative px-5 md:px-20 max-md:max-w-[500px] md:w-[820px] aspect-square flex items-center justify-center rounded-full border border-[#1F4FC0] bg-[#0C408C]/[0.2] xl:mr-[-100px] md:mr-[-50px] max-md:mb-[-30px]">
                    <div className="text-center w-full max-w-[350px]">
                        <h5 className="md:text-[40px] text-[32px] xl:text-[64px] tracking-[0.25em]">Vision</h5>
                        <p className="text-[13px] md:text-[15px] xl:text-[18px] leading-[1.6] lg:mt-10 md:mt-6 mt-2">
                        EXO DAO aims to popularize exosome technology on a global scale and provide new treatments and solutions in the fields of regenerative medicine, personalized medicine, and environmental protection. We pursue the health and happiness of all humankind by unlocking the infinite potential of exosomes and tackling diseases and environmental problems that have been considered incurable until now.
                        </p>
                    </div>

                </div>
                <div className="fade-up relative px-5 md:px-20 max-md:max-w-[500px] md:w-[820px] aspect-square flex items-center justify-center rounded-full border border-[#1F4FC0] bg-[#0C408C]/[0.2] xl:ml-[-100px] md:ml-[-50px] max-md:mt-[-30px]">
                    <div className="text-center w-full max-w-[350px]">
                        <h5 className="md:text-[40px] text-[32px] xl:text-[64px] tracking-[0.25em]">Mission</h5>
                        <p className="text-[13px] md:text-[15px] xl:text-[18px] leading-[1.6] lg:mt-10 md:mt-6 mt-2">
                        Our mission is to accelerate the research and development of exosome technology and provide the funding, knowledge, and partnerships necessary to achieve clinical application and commercialization. Through EXO tokens, we will form a global community and promote technological innovation and ethical governance.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
  );
};

export default Vision;
