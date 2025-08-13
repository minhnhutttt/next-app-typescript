'use client'
import UnderlineText from '@/components/underlineText'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const data = [
  {
    image: '/assets/images/promises-img-01.png',
    title: (
      <>
        実際の来店、購入、
        <br className="max-md:hidden" />
        契約の増加に<UnderlineText>フォーカス</UnderlineText>!!
      </>
    ),
    text: 'SEIKAI広告エージェントは実際に売上を生み出したコンバージョンの増加にフォーカスします。それ以外に何か必要ですか？鳴り止まない電話への対応を準備をしてください！',
  },
  {
    image: '/assets/images/promises-img-02.png',
    title: (
      <>
        24時間365日休まず<UnderlineText>自動改善</UnderlineText>!!
      </>
    ),
    text: 'SEIKAI広告エージェントは人間のように休むことなく働きます。あなたがソファの上でくつろいでいる時も、眠っている時も、重要な仕事中でも、代わりに自動で改善し続けます。',
  },
  {
    image: '/assets/images/promises-img-03.png',
    title: (
      <>
        専門知識・手数料<UnderlineText>不要</UnderlineText>!!
      </>
    ),
    text: 'SEIKAI広告エージェントの利用には専門知識も、広告代理店のような手数料も一切不要です。AIの限界維持費用だけ必要ですが、それでも月間広告費の3.99%で日本一安いです。',
  },
]

const Promises = () => {
  const ref = useScrollAnimations()

  return (
    <section
      ref={ref}
      className="relative px-5 pb-[100px] pt-24 md:pb-[200px] md:pt-[160px]"
    >
      <div className="mx-auto w-full max-w-[400px] md:max-w-[980px]">
        <div className="flex justify-center">
          <div>
            <h3 className="fade-up relative text-[22px] font-black leading-[1.3] tracking-[-0.018em] md:text-[42px]">
              嘘の成果にサヨ👋ナラ、あなたとの
              <br className="lg:hidden" />
              <UnderlineText>お約🤝束</UnderlineText>
            </h3>
            <p className="fade-up mt-2 text-[16px] font-bold md:text-[23px]">
              掲げたメリットは、人間よりも真面目に、地道で、コツコツと、
              <br className="max-md:hidden" />
              毎秒単位で対応してまいります。
            </p>
          </div>
        </div>
        <div className="mt-16 space-y-10 md:mt-[114px] md:space-y-[50px]">
          {data.map((item, index) => (
            <div
              className="fade-up flex items-start gap-5 max-md:flex-col max-md:items-center md:[&:nth-of-type(2)]:ml-[40px] lg:[&:nth-of-type(2)]:ml-[120px] md:[&:nth-of-type(3)]:ml-[80px] lg:[&:nth-of-type(3)]:ml-[250px]"
              key={index}
            >
              <span className="max-md:w-full max-md:max-w-full">
                <img
                  className="max-md:w-full max-md:max-w-full"
                  src={item.image}
                  alt=""
                />
              </span>
              <div className="flex-1">
                <p className="mb-2 text-[16px] font-bold leading-[1.3] md:text-[32px]">
                  {item.title}
                </p>
                <p className="max-w-[447px] text-[13px] font-medium md:text-[19px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Promises
