'use client'

import Title from '@/components/title'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const data = [
  {
    id: '1',
    title: 'お問い合わせ',
    text: 'まずは公式LINEでお問い合わせでご相談ください',
  },
  {
    id: '2',
    title: '必要事項を提出',
    text: 'お名前、生年月日、17LIVEアカウントなどを必要事項に沿ってLINEで送っていただきます。',
  },
  {
    id: '3',
    title: '審査',
    text: 'ご提出の内容により簡潔な書類審査を行い、結果をご連絡いたします。',
  },
  {
    id: '4',
    title: '概要説明と登録',
    text: 'ライバー報酬や概要説明などを説明後にライバー登録をしていただきます。',
  },
  {
    id: '5',
    title: '契約',
    text: '17LIVE、GoodFellowsとの契約を締結しライバーデビューとなります。',
  },
]

const Process = () => {
  const ref = useScrollAnimations()

  return (
    <div ref={ref} className="relative pt-[10px]">
      <div className="mt-8 md:mt-16">
        <div className="px-5">
          <Title>所属までの流れ</Title>
        </div>
        <div className="mt-8 px-5 md:mt-12">
          <div className="relative mx-auto w-full max-w-[470px] space-y-10 ">
            <span className="fade-up absolute bottom-[15px] left-[20px] top-[15px] w-2.5 bg-[#D2D3E0] md:left-[26px]"></span>
            {data.map((item, index) => (
              <div
                className="fade-up relative flex items-center gap-5"
                key={index}
              >
                <div className="flex aspect-square w-[50px] items-center justify-center rounded-full bg-[linear-gradient(90deg,_#FF7DD3_0%,_#3CE8FF_100%)] text-[20px] font-semibold text-white md:w-[60px] md:text-[32px]">
                  {item.id}
                </div>
                <div className="flex-1">
                  <p className="text-[16px] font-semibold text-[#6E69FC] md:text-[20px]">
                    {item.title}
                  </p>
                  <p className="text-[13px] md:text-[16px]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="fade-up flex justify-center pt-10">
            <img src="/assets/images/img-process.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
