"use client";

import useScrollAnimations from "@/app/hooks/useScrollAnimations";

const Fv = () => {
  const ref = useScrollAnimations();
  return (
    <div ref={ref} className="relative pt-[88px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.00)_0%,_rgba(255,_255,_255,_0.00)_40%,_#EC9DBC_100%)]">
      <span className="absolute top-5 left-8">
        <img src="/assets/images/fv-img-01.png" alt="" />
      </span>
      <span className="absolute top-[250px] right-1">
        <img src="/assets/images/fv-img-02.png" alt="" />
      </span>
      <span className="absolute top-[460px] left-2">
        <img src="/assets/images/fv-img-03.png" alt="" />
      </span>
      <div className="relative z-20 ">
      <h2 className="text-center leading-[1.3] [text-shadow:0px_4px_10px_#FFF4F2] tracking-[0.3em]">
        <p className="md:text-[40px] text-[24px] font-medium">あなたの</p>
        <p className=" flex justify-center items-center">
          <span className="md:text-[48px] text-[32px] font-bold bg-[#F6D4E2]">
            投稿
          </span>
          <span className="md:text-[40px] text-[24px] font-medium">も</span>
          <span className="md:text-[48px] text-[32px] font-bold bg-[#F6D4E2]">
            いいね
          </span>
          <span className="md:text-[40px] text-[24px] font-medium">も</span>
        </p>
        <p>
          <span className="md:text-[48px] text-[32px] font-bold">"</span>
          <span className="md:text-[64px] text-[36px] font-bold text-[#DA5A85]">
            資産
          </span>
          <span className="md:text-[48px] text-[32px] font-bold">"</span>
          <span className="md:text-[40px] text-[24px] font-medium">になる</span>
        </p>
      </h2>
      <h4 className="[text-shadow:0px_4px_10px_#FFF4F2] text-center leading-[1.3] md:mt-10 mt-6 tracking-[0.3em]">
        <p className="flex items-center justify-center tracking-[0.3em]">
          <span className="md:text-[40px] text-[24px] font-medium">あなたの</span>
          <span className="md:text-[48px] text-[32px] font-bold bg-[#E3F1FB]">
          想い
          </span>
          <span className="md:text-[40px] text-[24px] font-medium">が</span>
        </p>
        <p>
          <span className="md:text-[48px] text-[32px] font-bold">"</span>
          <span className="md:text-[64px] text-[36px] font-bold text-[#229CD6]">
          価値
          </span>
          <span className="md:text-[48px] text-[32px] font-bold">"</span>
          <span className="md:text-[40px] text-[24px] font-medium">に変わる</span>
        </p>
      </h4>
      <div className="flex justify-center items-center w-full max-w-[291px] mx-auto gap-2.5 md:mt-4 mt-3 mb-2">
        <span className="bg-[#21012D] flex-1 h-px"></span>
        <span className="md:text-[20px] text-[16px] font-medium">新感覚SNS</span>
        <span className="bg-[#21012D] flex-1 h-px"></span>
      </div>
      <div className="flex justify-center items-center">
        <p className="relative">
          <img src="/assets/images/of.svg" alt="" />
          <span className="absolute md:text-[17px] text-[15px] font-medium bottom-0 right-0">オープンフェーヴ</span>
        </p>
      </div>
      <p className="text-center w-full max-w-[450px] mx-auto underline decoration-[#DA5A85] md:text-[20px] text-[16px] md:mt-[70px] mt-10 md:mb-[55px]">
      「いいね」を超えて、あなたの共感や応援が直接価値ある資産に変わる <br />
      「<span className="font-bold">消費されないSNS</span>」それがOPEN FAVE
      </p>
      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute bottom-[20px] w-[149px] left-[calc(100%-50px)]">
            <img className="animate-[fuwafuwa_3s_ease-in-out_infinite_alternate]" src="/assets/images/bubble.png" alt="" />
          </div>
          <a href="/" className="w-[420px] h-[70px] rounded-[80px] flex items-center justify-center bg-[#21012D] md:text-[24px] text-[20px] font-medium text-white gap-[15px]">
            <img src="/assets/images/ic-btn.svg" alt="" />
            <span>新規アカウント登録</span>
            <img src="/assets/images/ic-btn.svg" alt="" />
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Fv;
