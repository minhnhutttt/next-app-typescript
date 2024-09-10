"use client";

const FV = () => {
  return (
    <section className="relative md:bg-[url('/assets/images/fv-img.png')] bg-[url('/assets/images/fv-img-sp.png')] bg-cover bg-center h-[600px] flex max-md:items-end md:items-center max-md:justify-center">
        <div className="px-5 md:px-20 lg:px-[240px] w-full max-md:py-10">
          <div className="w-full max-md:max-w-[350px] md:w-[520px] md:space-y-6 space-y-4 max-md:mx-auto">
            <h1 className="u-text-gradient bg-[linear-gradient(90deg,_#D9748F_0%,#0059BA_100%)] text-[30px] md:text-[48px] font-bold leading-[1.2] md:leading-none">
            Join the <br className="max-md:hidden" />
            Future of <br className="md:hidden" />Medicine <br className="max-md:hidden" />
            with iPS DAO
            </h1>
            <p className="text-[#3F3F46] text-[16px]">
            Empowering regenerative medicine, <br className="md:hidden" />environmental protection, <br />
            and personalized medicine through EXO DAO and EXO tokens
            </p>
            <div className="fade-up flex max-md:justify-center">
            <a href="/" className="flex items-center justify-center px-[18px] md:px-[22px] md:py-[14px] py-3 gap-2 rounded-xl bg-[#D9748F] text-white text-[16px] md:text-[18px] font-semibold">
                    <span><img src="/assets/images/plus.svg" alt="" /></span>
                    <span>Join Now</span>
                </a>
            </div>
          </div>
        </div>
    </section>
  );
};

export default FV;
