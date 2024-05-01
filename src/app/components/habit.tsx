'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Habit = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="bg-[#E0DDCF] md:pt-[134px] pt-[70px] px-5 md:pb-[90px] pb-[50px]">
        <div className="fade-up w-full max-w-[1080px] mx-auto bg-white/50 md:px-[50px] px-5 pt-10 md:pt-[68px] md:pb-[252px] pb-[70px]">
            <h3 className="fade-up text-center md:text-[38px] text-[19px] font-hiragino font-semibold border-b border-black md:pb-7 pb-4">
                一福のドライキウイで <br />
                毎日の健康習慣、始めませんか？
            </h3>
            <div className="w-full max-w-[850px] mx-auto mt-12 md:mt-[100px] md:space-y-24 space-y-12">
                <div className="fade-up flex max-md:flex-col max-md:items-center justify-center gap-5 md:gap-20">
                    <figure>
                        <img src="/assets/images/img-habit-01.png" alt="" />
                    </figure>
                    <p className="md:text-[20px] text-[14px] font-light max-w-[345px]">
                    キウイの皮に含まれている栄養素について知ったものの、丸ごと食べる人は少ないです。綺麗に洗って食べれる状態にしても、どうしても慣れない食感に違和感を感じてしまいます。一福の丸ごとキウイは、そんなアナタにきっと「これだ！」と実感していただけるでしょう。
                    </p>
                </div>
                <div className="fade-up flex max-md:flex-col max-md:items-center justify-center md:flex-row-reverse gap-5 md:gap-20">
                    <figure>
                        <img src="/assets/images/img-habit-02.png" alt="" />
                    </figure>
                    <p className="md:text-[19px] text-[14px] font-light max-w-[315px]">
                    一福のドライフルーツは「素材のみ」の旨味、甘味を重視しております。何かを加える事無く自然の味を楽しめるという事が結果的に一番の健康に繋がるという部分に着目し、それすなわち「老若男女が安心して美味しく食べられる」製品として確立する事を目指しています。
                    </p>
                </div>
                <div className="fade-up flex max-md:flex-col max-md:items-center justify-center gap-5 md:gap-20">
                    <figure>
                        <img src="/assets/images/img-habit-03.png" alt="" />
                    </figure>
                    <p className="md:text-[20px] text-[14px] font-medium max-w-[345px]">
                    キウイの皮に含まれている栄養素について知ったものの、丸ごと食べる人は少ないです。綺麗に洗って食べれる状態にしても、どうしても慣れない食感に違和感を感じてしまいます。一福の丸ごとキウイは、そんなアナタにきっと「これだ！」と実感していただけるでしょう。
                    </p>
                </div>
            </div>
            <div className="w-full max-w-[805px] mx-auto mt-16 md:mt-[110px]">
                <div className="fade-up bg-[#8BAB2D] md:rounded-[72px] rounded-[32px] md:text-[21px] text-[16px] font-hiragino font-semibold text-white md:p-8 p-8 xl:p-16 leading-loose">
                気だるい朝に活力を与える為...仕事の合間に栄養補給をする為...どんなシーンにも食べる事ができ、食べ残しも後でまた食べる...など、「アナタの日常生活で欠かせない食のアイテム」になれたら幸いです。特にビタミンは成人に必要な一日の摂取量の約70％も入っています。丸ごと食べる事でそれ以外の成分も果肉のみの状態より余す事なく充分に摂取できることも魅力的です！
                </div>
            </div>
        </div>
    </section>
  )
}

export default Habit
