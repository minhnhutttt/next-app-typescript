'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'


const Introduction = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative px-5 pt-6">
      <div className="w-full md:max-w-[762px] max-w-[400px] mx-auto border-[3px] border-[#FFABEC]/[80] md:rounded-[220px] rounded-[80px] pb-3 max-md:px-4 max-md:py-6">
        <p className="text-center md:text-[24px] text-[14px] font-bold">国が<span className="md:text-[32px] text-[17px]">1兆円投資中</span>の今が<span className="text-[17px] md:text-[32px]">チャンス</span>です！</p>
        <div className="flex justify-center max-md:mt-2">
            <img className='max-md:w-[300px]' src="/assets/images/reasons.png" alt="" />
        </div>
        <div className="flex justify-center">
            <a href="" className="md:w-[300px] w-[200px] h-12 md:h-20 flex items-center justify-center bg-[#03BA0B] rounded-[40px] md:text-[28px] font-black gap-4 text-white">
            <span>導入を相談する</span>
            <span>＞</span>
            </a>
        </div>
      </div>
    </section>
  )
}

export default Introduction
