'use client'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const Introduction = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="mt-[-250px]">
        <div className="flex justify-center">
            <h3 className="flex items-center justify-center md:text-[29px] text-[16px] font-hiragino font-semibold bg-white border border-black min-h-[91px] px-5 md:px-[50px]">一福の「ドライキウイ」にはこんな効果が期待できます</h3>
        </div>
    </section>
  )
}

export default Introduction
