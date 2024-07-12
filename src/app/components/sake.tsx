"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Sake = () => {
  const ref = useScrollAnimations();
  return (
    <section
    id="concept"
      ref={ref}
      className="bg-[url('/assets/images/bg-sake.png')] bg-cover bg-right-bottom"
    >
      <div className="md:px-5 relative max-md:flex max-md:flex-col-reverse">
        <div className="w-full md:max-w-[1310px] max-w-[480px] mx-auto py-10 md:py-16 max-md:px-5">
          <div className="text-[#F3F3F3]">
            <h3 className="fade-up font-serif lg:text-[23px] md:text-[18px] text-[16px] font-extrabold">
              日本全国のSAKEを探し続け、今飲むべき旬の酒を世界へ
            </h3>
            <div className="fade-up w-full max-w-[1118px] mx-auto pt-10 md:pt-16 max-xl:pl-5">
              <div className="lg:text-[17px] md:text-[14px] text-[13px] font-medium leading-[2.2] md:space-y-6 space-y-3">
                <p>
                  銘酒とは、その土地の豊かな土壌、澄んだ空気、厳選された素材、
                  <br className="max-md:hidden" />
                  そして清らかな水から生まれる味わい深いお酒です。
                </p>
                <p>
                  口に含んだ瞬間に感じる喉越しや余韻は、過去の記憶を呼び起こし、
                  <br className="max-md:hidden" />
                  未体験の未来を創造させます。
                </p>
                <p>
                  まるで魔物か神様か何かが宿っているような不思議な魅力を持つお酒、
                  <br className="max-md:hidden" />
                  それが銘酒ではないでしょうか。
                </p>
              </div>
              <div className="lg:text-[17px] md:text-[14px] text-[13px] font-medium leading-[2.2] md:space-y-6 space-y-3 md:mt-20 mt-8">
                <p>
                  私たちは、そんな銘酒を世界へ、地球をも飛び出る勢いで届けたい。
                </p>
                <p>
                  ぜひ、この特別なお酒を体験し、
                  <br className="max-md:hidden" />
                  私たちと一緒に日本の素晴らしさを発見してください。
                </p>
              </div>
            </div>
          </div>
        </div>
        <figure className="md:absolute right-0 top-0 md:-mt-[5.972vw] xl:-mt-[86px] max-xl:w-[36%] max-md:w-4/5 max-md:max-w-[400px] max-md:ml-auto -mt-5">
          <img src="/assets/images/img-sake.png" alt="" />
        </figure>
      </div>
      <div className="fade-up flex justify-end py-7 px-5">
        <p className="md:text-[16px] text-[13px] font-medium text-white/65 md:tracking-[1.25em] tracking-[0.4em]">
          FROM THE NATURE OF JAPAN
        </p>
      </div>
    </section>
  );
};

export default Sake;
