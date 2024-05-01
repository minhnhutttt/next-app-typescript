'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Voice = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="bg-[#E0DDCF] md:pt-[134px] pt-[70px] px-5">
        <div className="w-full max-w-[1183px] mx-auto bg-white md:px-[70px] px-5 pt-10 md:pt-[68px] md:pb-[120px] pb-[80px] rounded-[99px] border-[3px] border-[#B1B155]">
            <h3 className="text-center md:text-[42px] text-[21px] font-hiragino font-semibold border-b border-black md:pb-7 pb-4">
                お客様の声
            </h3>
            <div className="w-full max-w-[980px] mx-auto mt-12 md:mt-[130px] md:space-y-16 space-y-6">
                <div className="flex max-md:flex-col items-center md:gap-9">
                    <figure>
                        <img src="/assets/images/img-voice-01.png" alt="" />
                    </figure>
                    <div className="bg-[#FBF5BD] border border-[#708713] md:rounded-[54px] rounded-[32px] max-w-[644px] px-5 py-7 md:px-9 md:py-12 flex-1">
                        <p className="md:text-[28px] text-[14px] font-semibold">30代　りょう様　塗装業</p>
                        <p className="md:text-[21px] text-[12px] md:mt-5 mt-3">
                        率直に、甘くて美味しいです。何が入ってるのかな？って思ったけど糖分とか何も加えられてないみたいでびっくりしました。現場仕事で疲れるとふとした時に甘いモノ食べたくなっちゃうんで、これなら手もべたついたりしないしサクッと食べれていいです！
                        </p>
                    </div>
                </div>
                <div className="flex max-md:flex-col md:flex-row-reverse md:justify-start items-center md:gap-9">
                    <figure>
                        <img src="/assets/images/img-voice-02.png" alt="" />
                    </figure>
                    <div className="bg-[#FBF5BD] border border-[#708713] md:rounded-[54px] rounded-[32px] max-w-[644px] px-5 py-7 md:px-9 md:py-12 flex-1">
                        <p className="md:text-[28px] text-[14px] font-semibold">30代　E・K 様　歯科助手</p>
                        <p className="md:text-[21px] text-[12px] md:mt-5 mt-3">
                            栄養満点で食べやすいし今までの間食をこれに変えれたらいい食制限になりそうなので職場で勧めて皆でこれ食べてます(笑)<br />
                            美味しいのもそうだけど、一番は持ち歩けていつでも間食できる事だと思いました！
                        </p>
                    </div>
                </div>
                <div className="flex max-md:flex-col items-center md:gap-9">
                    <figure>
                        <img src="/assets/images/img-voice-03.png" alt="" />
                    </figure>
                    <div className="bg-[#FBF5BD] border border-[#708713] md:rounded-[54px] rounded-[32px] max-w-[644px] px-5 py-7 md:px-9 md:py-12 flex-1">
                        <p className="md:text-[28px] text-[14px] font-semibold">30代　T・F様　スポーツインストラクター</p>
                        <p className="md:text-[21px] text-[12px] md:mt-5 mt-3">
                            味がしつこくなく、栄養価みた瞬間にすぐ色んな人に勧めようと思いました。お腹に溜まってしまう事なく栄養価を接種できるので、運動前に最適です。<br />
                            疲弊した身体も栄養が必要なので、運動後にも勧めれそうです。日頃から愛用する事になりそう。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Voice
