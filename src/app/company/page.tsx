"use client";
import PageTitle from "@/components/pageTitle";
import useScrollAnimations from "@/hooks/useScrollAnimations";
export default function Company() {
  const ref = useScrollAnimations();
  return (
    <section className="bg-[#FFFEEA]">
      <div className="px-5 md:pb-[120px] pb-20">
        <div className="md:pb-16 pb-12"><PageTitle>運営会社</PageTitle></div>
          <div className="mx-auto w-full max-w-[1350px] bg-black max-md:bg-[length:140%_auto] bg-no-repeat bg-right bg-cover px-5 py-12 md:py-16">
          <div className="flex justify-center">
            <img
              className="max-md:w-[130px]"
              src="/assets/images/logo-zexaverse.png"
              alt="ZEXAVERSE"
            />
          </div>
          <div className="font-zenkaku mx-auto mb-2 mt-8 w-full max-w-[506px] space-y-7 text-[14px] text-white md:mt-12 md:text-[16px]">
            <div className="flex gap-3 py-2 border-b border-white md:gap-8">
              <p className="w-[60px] px-2 md:w-[70px]">会社名</p>
              <p className="flex-1">株式会社ZEXAVERSE（ゼクサバース）</p>
            </div>
            <div className="flex gap-3 py-2 border-b border-white md:gap-8">
              <p className="w-[60px] px-2 md:w-[70px]">所在地</p>
              <p className="flex-1">
              東京都千代田区麹町3−5−2 ビュレックス麹町205
              </p>
            </div>
            <div className="flex gap-3 py-2 border-b border-white md:gap-8">
              <p className="w-[60px] px-2 md:w-[70px]">代表者</p>
              <p className="flex-1">上瀧 良平</p>
            </div>
            <div className="flex gap-3 py-2 border-b border-white md:gap-8">
              <p className="w-[60px] px-2 md:w-[70px]">Website</p>
              <p className="flex-1">
                <a
                  href="https://zexaverse.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://zexaverse.co.jp/
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
