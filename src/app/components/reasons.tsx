"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";
import Title from "@/components/title";

export default function Reasons() {
  const ref = useScrollAnimations();
    return (
      <section ref={ref} className="px-5 max-md:mt-10 bg-[url('/assets/images/reason-bg.png')] bg-no-repeat bg-left-top md:mb-16 mb-7">
        <div className="w-full max-w-[1260px] mx-auto bg-[#FCEECA] md:rounded-[97px] rounded-[50px] xl:p-[38px] p-5 max-xl:px-[10vw] relative">
          <div className="absolute max-xl:w-[6vw] md:right-5 right-2 md:top-[250px] top-[20vw]">
            <img className="fade-up" src="/assets/images/reason-text.png" alt="" />
          </div>
            <div className="w-full max-w-[950px] mx-auto">
                <Title>一福米を選ぶ5つの理由</Title>
                <div className="divide-y divide-black divide-dashed">
                    <div className="fade-up xl:pl-[80px] max-xl:justify-center flex md:py-[60px] py-[30px] md:gap-10 max-md:flex-col gap-5 items-center">
                      <figure>
                        <img src="/assets/images/reason-01.png" alt="" />
                      </figure>
                      <div className="max-w-[372px]">
                        <h5 className="font-mincho font-semibold md:text-[23px] text-[18px]">低カロリー低糖質！糖質34％オフ</h5>
                        <p className="font-gothic md:text-[19px] text-[14px] max-w-[325px] md:mt-7 mt-4">
                        独自の配合と製法で栄養価が保持され、同量のお米に比べ、<span className="text-[#FF0000] font-semibold">糖質を34％カット！ダイエットにオススメです！</span>
                        </p>
                      </div>
                    </div>
                    <div className="fade-up flex md:flex-row-reverse justify-center md:py-[60px] py-[30px] md:gap-10 max-md:flex-col gap-5 items-center">
                      <figure>
                        <img src="/assets/images/reason-02.png" alt="" />
                      </figure>
                      <div className="max-w-[372px]">
                        <h5 className="font-mincho font-semibold md:text-[23px] text-[18px]">糖質制限食にも！</h5>
                        <p className="font-gothic md:text-[19px] text-[14px] max-w-[332px] md:mt-7 mt-4">
                        糖尿病などの糖質制限食や介護食にも適しています。<span className="font-semibold">ポッコリお腹、健康管理が目的の方</span>にもピッタリ。
                        </p>
                      </div>
                    </div>
                    <div className="fade-up xl:pl-[80px] max-xl:justify-center flex md:py-[60px] py-[30px] md:gap-10 max-md:flex-col gap-5 items-center">
                      <figure>
                        <img src="/assets/images/reason-03.png" alt="" />
                      </figure>
                      <div className="max-w-[372px]">
                        <h5 className="font-mincho font-semibold md:text-[23px] text-[18px]">簡単・美味しい・栄養満点！</h5>
                        <p className="font-gothic md:text-[19px] text-[14px] max-w-[332px] md:mt-7 mt-4">
                        お湯を注いで<span className="font-semibold">15分！</span>放置している間に完成！味や食感も<span className="text-[#FF0000] font-semibold">まるで炊きたてのご飯</span>のようです。
                        </p>
                      </div>
                    </div>
                    <div className="fade-up flex md:flex-row-reverse justify-center md:py-[60px] py-[30px] md:gap-10 max-md:flex-col gap-5 items-center">
                      <figure>
                        <img src="/assets/images/reason-04.png" alt="" />
                      </figure>
                      <div className="max-w-[372px]">
                        <h5 className="font-mincho font-semibold md:text-[23px] text-[18px]">アレルギー特定原材料 <br />28品目不使用</h5>
                        <p className="font-gothic md:text-[19px] text-[14px] max-w-[332px] md:mt-7 mt-4">
                        <span className="font-semibold">乳幼児や妊婦さん</span>にも安心してお召し上がり頂けます。また<span className="font-semibold">介護食</span>にも対応しています。
                        </p>
                      </div>
                    </div>
                    <div className="fade-up xl:pl-[80px] max-xl:justify-center flex md:py-[60px] py-[30px] md:gap-10 max-md:flex-col gap-5 items-center">
                      <figure>
                        <img src="/assets/images/reason-05.png" alt="" />
                      </figure>
                      <div className="max-w-[372px]">
                        <h5 className="font-mincho font-semibold md:text-[23px] text-[18px]">長期保存可能</h5>
                        <p className="font-gothic md:text-[19px] text-[14px] max-w-[332px] md:mt-7 mt-4">
                          賞味期限はなんと<span className="text-[#FF0000] font-semibold">5年。</span>
                          保存食、非常食として最適です。常温保存で保管いただけます。
                        </p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  }
  