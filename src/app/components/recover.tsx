"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Recover = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="overflow-hidden md:pb-[88px] pb-12">
      <div className="md:bg-[url('/assets/images/bg-title-02.png')] md:bg-cover bg-no-repeat bg-center md:h-[197px] bg-[#FF8C5A] relative flex items-center justify-center max-md:px-5 max-md:flex-col max-md:py-10">
        <div className="w-full max-w-[520px]">
          <p className="font-serif text-white font-black md:text-[28px] text-[4.5vw]">
            『 おもいで 』が風化する前に…
          </p>
          <p className="pt-4 pl-20">
            <img src="/assets/images/recover-title.png" alt="" />
          </p>
        </div>
        <span className="md:absolute bottom-4 right-4 dt:right-28 max-md:w-full max-md:mt-5">
          <img
            className="dt:w-[361px] md:w-[25.069vw] w-[50vw] ml-auto"
            src="/assets/images/sign-title-01.png"
            alt=""
          />
        </span>
      </div>
      <div className="w-full max-w-[1440px] mx-auto mt-4 md:pl-7 pl-4">
        <div className="bg-[#FFE1C6] bg-[url('/assets/images/bg-fear.png')] bg-no-repeat bg-left-bottom pb-[50vw] max-md:bg-[length:100%_auto] md:pb-[537px]">
          <div className="w-full max-w-[1000px] py-8 border-b border-black/50 text-[#5F5F5F] md:text-[28px] text-[19px] font-semibold font-serif max-md:px-3 max-md:text-center md:pl-24">
          愛するペットとの絆を紡いでいく日常を、
            <br className="lg:hidden" />
            デジタルの力で復活
          </div>
          <div className="px-5 pt-8">
            <div className="w-full md:max-w-[1220px] max-w-[540px] mx-auto">
              <div className="fade-up flex md:items-end max-md:flex-col max-md:justify-center items-center">
                <figure className="pb-6 max-lg:w-1/2 max-md:w-auto">
                  <img src="/assets/images/img-recover-01.png" alt="" />
                </figure>
                <div className="flex-1">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="fade-up relative flex justify-center items-center md:mt-[88px] mt-12">
          <figure>
            <img
              className="max-md:w-[300px]"
              src="/assets/images/ic-triangle.png"
              alt=""
            />
          </figure>
          <div className="absolute inset-0 md:text-[22px] text-[16px] font-medium justify-center text-center md:pt-20 pt-10">
            <p>
              もしも愛するペットとの絆を永遠に紡ぐ方法があったら…
              <br />
              <span className="underline">
                そんな悲痛な想いに寄り添う、新しい供養のカタチがあります
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recover;
