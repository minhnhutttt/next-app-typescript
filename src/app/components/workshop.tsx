'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Workshop = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="bg-[#E0DDCF] md:pb-[250px] pb-[125px]">
        <figure className="fade-up w-full">
            <img className="w-full" src="/assets/images/workshop.png" alt="" />
        </figure>
        <div className="px-5 md:mt-[-100px] mt-[30px] relative">
            <div className="fade-up w-full max-w-[989px] mx-auto bg-[#EAEAEA] border border-[#585858] md:px-[46px] p-5 md:py-[45px] flex max-md:flex-col max-md:items-center md:gap-12 gap-8">
                <figure>
                    <img className='border border-black' src="/assets/images/workshop-logo.png" alt="" />
                </figure>
                <div className="flex-1">
                    <h4 className="md:text-[28px] text-[20px] font-hiragino font-semibold border-b border-black pb-2">菓子工房このみ</h4>
                    <p className="md:text-[19px] text-[15px] font-light pt-5 leading-[1.75]">
                    <span className="font-bold">皮にある栄養素の多さ、</span>健康的な食べ物であるという事実をより多くの方に知っていただきたいという想いもあり、洗浄から全て手洗い手作業での製造になります。丸ごとという特殊なものになりますので、均一した乾燥など機械作業でできない事も多く、<span className="font-bold">手間暇かけて丁寧に作っております。</span>
                    </p>
                </div>
            </div>
            <div className="w-full max-w-[480px] md:max-w-[1135px] mx-auto bg-white md:mt-[86px] mt-[44px] py-10 md:py-14 md:px-[82px] px-6 md:pb-[175px] pb-[100px]">
                <h3 className="fade-up text-center font-hiragino font-semibold md:text-[42px] text-[21px]">「まるごとドライキウイ」<span className="md:text-[30px] text-[15px]">の</span><br className="md:hidden" />こだわり</h3>
                <div className="md:mb-20 mb-10 max-md:mt-10">
                    <div className="fade-up border-b border-black md:mt-10 pb-4">
                        <h5 className="text-center md:text-[28px] text-[18px] font-hiragino font-semibold">手作り・手洗いの理由</h5>
                    </div>
                    <div className="fade-up flex max-md:flex-col max-md:items-center md:gap-9 gap-6 py-6 md:py-9 md:px-7 max-md:max-w-[480px] max-md:mx-auto">
                        <figure className="max-xl:w-2/5 max-md:w-full max-md:flex max-md:justify-center">
                            <img src="/assets/images/img-workshop-01.jpg" alt="" />
                        </figure>
                        <p className="md:text-[19px] text-[14px] font-medium flex-1 leading-[1.75] max-w-[480px]">
                        普段捨てる部分を美味しく食べるには、ただ手作業を行っていても実現はできません。ましてや美味しく仕上げる為に添加物や人工甘味料を加えれば本末転倒（残念ながら健康的な食べ物とは言えない）です。各課程でどんな味をしているか、自然の旨味や酸味を残せているのか、全て手作業で独自の製法だからこそ実現できました。
                        </p>
                    </div>
                </div>
                <div className="md:mb-12 mb-8">
                    <div className="fade-up border-b border-black md:mt-10 pb-4">
                        <h5 className="text-center md:text-[28px] text-[18px] font-hiragino font-semibold">ありのままの自然を届ける事。<br className="md:hidden" />これが大前提です。</h5>
                    </div>
                    <div className="fade-up flex max-md:flex-col-reverse max-md:items-center md:gap-9 gap-6 py-6 md:py-9 md:px-7 max-md:max-w-[480px] max-md:mx-auto">
                        <p className="md:text-[19px] text-[14px] font-medium flex-1 leading-[1.75] max-w-[480px]">
                        <span className="font-bold">有機肥料のみでの栽培</span>、除草剤も使用しない野菜の栽培の経験を活かし、<span className="font-bold">丸ごと1個そのまま食べれるドライフルーツを開発しました。</span>一般的なドライフルーツと言えば、砂糖を沢山混ぜ甘くお菓子のように甘いかも知れません。しかし一福のコンセプトは健康。<span className="font-bold">「何も加えないでもこんなに甘い...」健康的で美味しい丸ごとドライフルーツ</span>を自信もってオススメできます。
                        </p>
                        <figure className="max-xl:w-2/5 max-md:w-full max-md:flex max-md:justify-center">
                            <img src="/assets/images/img-workshop-02.jpg" alt="" />
                        </figure>
                    </div>
                </div>
                <div>
                    <div className="fade-up border-b border-black md:mt-10 pb-4">
                        <h5 className="text-center md:text-[28px] text-[17px] font-hiragino font-semibold">何も加えないのに甘い..？<br />「丸ごとを凝縮」だから…可能です。</h5>
                    </div>
                    <div className="fade-up flex max-md:flex-col max-md:items-center md:gap-9 gap-6 py-6 md:py-9 md:px-7 max-md:max-w-[480px] max-md:mx-auto">
                    <figure className="max-xl:w-2/5 max-md:w-full max-md:flex max-md:justify-center">
                            <img src="/assets/images/img-workshop-03.jpg" alt="" />
                        </figure>
                        <p className="md:text-[19px] text-[14px] font-medium flex-1 leading-[1.75] max-w-[480px]">
                        多くの方が果物を食べて気づく事として、とにかく水分が多いという事。そしてその垂れ流してしまう水分にこそ果物の栄養は豊富です。丸ごと製法により、果物の栄養を外へ逃がさない事、そして皮にある豊富な栄養まで採れる事。一福のドライフルーツは多くの良い特徴が重なり合い、非常に価値のある製品となっています
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Workshop
