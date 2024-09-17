"use client";

const FV = () => {
  return (
    <section className="relative h-[600px] flex max-md:items-end md:items-center max-md:justify-center">
      <div className="absolute inset-0">
                <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover object-center">
                <source src="/assets/videos/fv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="px-2 md:px-20 lg:px-[240px] w-full max-md:py-10 relative flex max-md:justify-center">
          <div className="px-3 py-5 md:p-10 bg-[#EEEDED]/[0.8] max-md:w-full">
            <div className="w-full max-md:max-w-[350px] md:w-[496px] md:space-y-6 space-y-4 max-md:mx-auto">
              <h1 className="u-text-gradient bg-[linear-gradient(90deg,_#D9748F_0%,#0059BA_100%)] text-[30px] md:text-[48px] font-bold leading-[1.2] md:leading-none">
              Join the <br className="max-md:hidden" />
              Future of <br className="md:hidden" />Medicine <br className="max-md:hidden" />
              with iPS DAO
              </h1>
              <p className="text-[#3F3F46] text-[16px]">
              Empowering regenerative medicine, <br className="md:hidden" />environmental protection, <br />
              and personalized medicine through iPS DAO and iPS tokens
              </p>
              <div className="fade-up flex max-md:justify-center">
              <a href="/" className="fade-up flex items-center justify-center md:px-[22px] px-3 md:py-[14px] py-2 gap-2 rounded-xl bg-[#D9748F] text-white md:text-[18px] text-[14px] font-semibold">
                  <span><img className="max-md:w-5 md:w-6" src="/assets/images/icon-download.svg" alt="" /></span>
                  <span>White Paper</span>
              </a>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default FV;
