'use client'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const data = [
  {
    image: '/assets/images/img-intro-01.png',
    title: '豊富なフォレート（葉酸）',
    text: 'フォレート（葉酸）は細胞分裂や成長に重要であり、妊娠中の女性にとって特に重要です。果物で葉酸が入っているものは珍しく、キウイは葉酸が入っている貴重な食べ物と言えるでしょう。特に皮に豊富な為、そこまでもよくばり美味しく仕上げました。'
  },
  {
    image: '/assets/images/img-intro-02.png',
    title: 'ビタミンKは血液をサラサラに',
    text: 'キウイそのものが豊富なビタミンを持ちます。ビタミンCは抗酸化作用や免疫に不可欠であり、中でもビタミンKが豊富な事は大きなメリットです。ビタミンKは血液凝固に関与し、骨の健康をサポートします。'
  },
  {
    image: '/assets/images/img-intro-03.png',
    title: '低カロリーで栄養豊富',
    text: '人が健康に生活する上で必要と言われる栄養素「アンチオキシダント（抗酸化物質）やファイバー（食物繊維）」が豊富であり、尚且つ低カロリーなのは魅力的です。例えば、オレンジやバナナなどと比較しても、キウイはそれらの半分程のカロリーしかない事で知られています。'
  }
]

const Introduction = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="mt-[-19.531vw] xl:mt-[-250px] px-5 pb-[60px] md:pb-[100px]">
        <div className="flex justify-center">
            <h3 className="flex items-center justify-center text-center xl:text-[29px] md:text-[2.266vw] text-[18px] font-hiragino font-semibold bg-white border border-black min-h-[7.109vw] md:min-h-[91px] px-5 md:px-[50px] max-md:p-5">一福の「ドライキウイ」には<br className="md:hidden" />こんな効果が期待できます</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-10 md:gap-5 w-full md:max-w-[1400px] max-w-[360px] mx-auto md:mt-10 mt-6">
          {data.map((item, index) => {
            return (
              <div className="flex flex-col items-center" key={index}>
                <figure className="xl:h-[319px] md:h-[24.922vw] flex items-end">
                  <img src={item.image} alt="" />
                </figure>
                <div className="max-w-[360px] mt-6 md:mt-8">
                  <h5 className="lg:text-[26px] md:text-[20px] text-[16px] font-hiragino font-semibold">{item.title}</h5>
                  <p className="lg:text-[19px] md:text-[16px] text-[14px] font-light mt-5 md:mt-12 leading-[1.75]">{item.text}</p>
                </div>
              </div>
            )
          })}
        </div>
    </section>
  )
}

export default Introduction
