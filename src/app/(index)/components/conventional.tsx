'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'


const Conventional = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative pt-12 md:pt-[70px]">
      <div className="w-full max-w-[1440px] mx-auto px-5">
        <p className="text-center md:text-[24px] text-[18px] font-bold">
            このような「AIが持つポテンシャル」を使いこなせる社員の育成には、<br />
            数ヶ月、1年といった長期間の研修が必要だと思っていませんか？
        </p>
        <h3 className="show md:text-[64px] text-[30px] font-bold text-center mt-6 md:mt-10">その<span className="text-[#FF9242]">常識</span>を覆します。</h3>
        <p className="show text-center md:text-[20px] text-[16px] font-bold mt-6 md:mt-10">私たちのAI eラーニングは、</p>
        <p className="show text-center md:text-[28px] text-[20px] font-bold"><span className="text-[#FF9242]">短期集中型</span>で効率的な<span className="text-[#FF9242]">スキル習得</span><span className="md:text-[24px] text-[18px]">を実現。</span></p>
        <p className="show text-center md:text-[20px] text-[16px] font-bold mt-9 md:mt-14">わずか12時間で、貴社の社員が</p>
        <p className="show text-center md:text-[28px] text-[20px] font-bold">AIを<span className="text-[#FF9242]">実践的に活用し始める</span>未来</p>
        <p className="show text-center md:text-[20px] text-[16px] font-bold mt-3 md:mt-5">を手に入れられます。</p>
      </div>
    </section>
  )
}

export default Conventional
