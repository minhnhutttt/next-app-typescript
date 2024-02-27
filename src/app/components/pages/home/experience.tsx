"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function Experience() {
  const animateRefs = useScrollAnimation("zoom");
  return (
    <section className="mt-16 md:mt-[120px] px-5">
        <div className="w-full max-w-[1320px] mx-auto">
            <div ref={animateRefs} className="opacity-0 flex justify-center items-center relative z-10">
                <h3 className="tracking-[0.25em] text-center">
                    <span className="text-[5.556vw] min-[1440px]:text-[80px] font-black leading-tight">これ自分の物なのに…<br />こんな経験ありませんか？</span>
                </h3>
            </div>
            <div ref={animateRefs} className="opacity-0 w-full max-w-[1180px] mx-auto md:mt-[-20px] relative">
                <div className="absolute bg-[url('/images/bg-experienced.png')] inset-0 bg-[length:100%_100%] "></div>
                <div className="flex justify-center md:justify-end w-full max-w-[1161px] relative pt-10 md:pt-[105px] pl-4 max-md:pr-3 md:pl-10">
                    <div className="flex items-center md:items-end gap-5 max-md:flex-col">
                        <div className="md:text-[20px] text-[16px] font-black max-md:max-w-[440px] md:w-[610px] md:flex-1 space-y-5 md:pb-[70px]">
                            <div>
                                <p><span className="md:text-[24px] text-[18px]">● </span>遺失物の証明</p>
                                <p className="md:mt-4 mt-3 md:pl-6 pl-4 leading-snug"> 遺失物が自分のものであることを証明しようとしたが、<span className="bg-[linear-gradient(to_top,_#FEBB08_40%,_transparent_40%)]">証拠がなくて時間がかかった…</span></p>
                            </div>
                            <div>
                                <p><span className="md:text-[24px] text-[18px]">● </span>購入の証明</p>
                                <p className="md:mt-4 mt-3 md:pl-6 pl-4 leading-snug"> 保証期間内に家電が故障したので修理に出したいが、<span className="bg-[linear-gradient(to_top,_#FEBB08_40%,_transparent_40%)]">購入証明書をなくしてしまった…</span></p>
                            </div>
                            <div>
                                <p><span className="md:text-[24px] text-[18px]">● </span>取り置き商品の証明</p>
                                <p className="md:mt-4 mt-3 md:pl-6 pl-4 leading-snug"> 友人が紹介したお店に実際に足を運んでくれたので、<span className="bg-[linear-gradient(to_top,_#FEBB08_40%,_transparent_40%)]">キープワインを楽しんでもらおうと思ったが、</span>お店の厳格な管理のため、それが<span className="bg-[linear-gradient(to_top,_#FEBB08_40%,_transparent_40%)]">叶わなかった…</span></p>
                            </div>
                        </div>
                        <div className="md:bottom-[-32px] max-md:w-full max-md:flex max-md:justify-end relative">
                            <img className="max-md:w-[50vw] max-md:max-w-[240px]" src="/images/img-experienced.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
