'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Conventional = () => {
  const ref = useScrollAnimations()
  return (
    <section ref={ref} className="relative pt-12 md:pt-[70px]">
      <div className="mx-auto w-full max-w-[1440px] px-5">
        <p className="text-center text-[18px] font-bold md:text-[24px]">
          このような「AIが持つポテンシャル」を使いこなせる社員の育成には、
          <br />
          数ヶ月、1年といった長期間の研修が必要だと思っていませんか？
        </p>
        <h3 className="show mt-6 text-center text-[30px] font-bold md:mt-10 md:text-[64px]">
          その<span className="text-[#FF9242]">常識</span>を覆します。
        </h3>
        <p className="show mt-6 text-center text-[16px] font-bold md:mt-10 md:text-[20px]">
          私たちのAI eラーニングは、
        </p>
        <p className="show text-center text-[20px] font-bold md:text-[28px]">
          <span className="text-[#FF9242]">短期集中型</span>で効率的な
          <span className="text-[#FF9242]">スキル習得</span>
          <span className="text-[18px] md:text-[24px]">を実現。</span>
        </p>
        <p className="show mt-9 text-center text-[16px] font-bold md:mt-14 md:text-[20px]">
          わずか12時間で、貴社の社員が
        </p>
        <p className="show text-center text-[20px] font-bold md:text-[28px]">
          AIを<span className="text-[#FF9242]">実践的に活用し始める</span>未来
        </p>
        <p className="show mt-3 text-center text-[16px] font-bold md:mt-5 md:text-[20px]">
          を手に入れられます。
        </p>
      </div>
    </section>
  )
}

export default Conventional
