"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";
const Introduction = () => {
  const ref = useScrollAnimations();
  return <section ref={ref} className="px-5 pt-10 md:pt-[52px]">
    <div className="fade-up flex justify-center">
        <a href="https://17.live/ja/profile/u/0cf05a87-e8fc-49b8-8d9b-6aec50f22be0?af_c_id=profilepage&pid=InappShare&deep_link_value=media17%3A%2F%2Fv2%2Fstreamer_profile%2F0cf05a87-e8fc-49b8-8d9b-6aec50f22be0&af_force_deeplink=true" target="_blank" className="relative w-full max-w-[315px] h-[95px] [box-shadow:0px_4px_40px_0px_rgba(255,_125,_211,_0.20)] rounded-[10px] overflow-hidden flex items-center justify-center flex-col p-0.5 hover:opacity-80 duration-150">
            <span className="absolute animate-[border-animation_5s_linear_infinite] rounded-[10px] overflow-hidden bg-[conic-gradient(_transparent_0%12.5%,_transparent_12.5%25%,_#FF7DD3_25%37.5%,_#FF7DD3_37.5%50%,_transparent_50%62.5%,_transparent_62.5%75%,_#3CE8FF_75%87.5%,_#3CE8FF_87.5%100%_)] w-[500px] h-[500px]"></span>
            <div className="p-px w-full h-full relative bg-white rounded-[10px] overflow-hidden bg-[linear-gradient(90deg,_rgba(255,125,211,1)_0%,_rgba(60,232,255,1)_100%)]">
                <div className="bg-white w-full h-full  pt-4 relative">
                <h4 className="md:text-[24px] text-[20px] font-bold text-center tracking-widest">REiYAN</h4>
                <p className="md:text-[16px] text-[14px] font-black text-[#3CE8FF] text-center">プロフィールはこちら</p>
            </div>
            </div>
        </a>
    </div>
    <div className="md:py-[60px] py-10 font-bold leading-[1.2]">
        <h4 className="fade-up flex items-center justify-center">
            <img src="/assets/images/17live-logo.svg" alt="" />
        </h4>
        <p className="fade-up text-center md:text-[42px] text-[24px]">公認パートナー</p>
        <p className="fade-up text-center md:text-[32px] text-[20px] md:mt-7 mt-5 tracking-widest">
        所属ライバーが<br />累計3000人を突破 !!
        </p>
        <p className="fade-up text-center md:text-[32px] text-[20px] md:mt-14 mt-9 tracking-widest">
        ライバーになりたい方<br />随時募集中 !
        </p>
    </div>
    <div className="mt-4">
        <Title>Good Fellows とは</Title>
        <p className="fade-up w-full max-w-[425px] mx-auto md:text-[18px] text-[15px] py-5">
        17LIVEにおいてOfficial Business Partnerの最高ランクである【Gold Partner】及び【Silver Partner】に認定された実績を持ち、所属累計は3000名以上。育成実績日本一の実績を持つ17LIVEを代表するトップ事務所です。
        </p>
    </div>
  </section>;
};

export default Introduction;
