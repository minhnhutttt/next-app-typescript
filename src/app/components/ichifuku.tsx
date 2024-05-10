'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Ichifuku = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="bg-[url('/assets/images/bg-ichifuku.png')] bg-[length:100%_auto] bg-bottom bg-no-repeat bg-[#76A406] md:pb-[84px] pb-10 border-b-2 border-white">
        <div className="w-full">
            <img className='w-full' src="/assets/images/wave.png" alt="" />
        </div>
        <div className="w-full max-w-[912px] mx-auto mt-6 md:mt-10 px-5">
            <h3 className="fade-up text-center font-hiragino text-white font-semibold md:text-[48px] text-[18px]">
                「一福」<span className="md:text-[36px] text-[16px]">は</span><span className="md:text-[52px] text-[25px]">皮</span><span className="md:text-[40px] text-[23px]">も</span><span className="md:text-[52px] text-[25px]">実</span><span className="md:text-[40px] text-[23px]">も</span> <br />
                <span className="md:text-[52px] text-[25px]">まる</span>ごとドライキウイ<span className="md:text-[46px] text-[19px]">にします</span>
            </h3>
            <div className="fade-up md:text-[22px] text-[14px] font-semibold text-white bg-[#337223] border-2 border-white rounded-[44px] md:px-[52px] md:py-[30px] px-5 py-4 md:mt-12 mt-6 leading-[1.75]">
            他社とは一線を画す一福のドライキウイ。皮つきのまま提供する事で、皮に多く含まれる栄養素（葉酸や食物繊維、ビタミン類など）を、丸ごとお届けできます。通常、キウイの皮は苦味や硬さがあるため剥いて食べられることが多いですが、一福のドライキウイは、果肉のみのものよりはるかに多くの栄養を摂取でき、さらに「クセになるほど」美味しく食べられる商品となっています。「自然そのものを美味しく」をモットーにしているからこそ安心です。
            </div>
            <div className="fade-up flex justify-center items-center gap-8 mt-7 md:mt-10">
                <figure>
                    <img src="/assets/images/img-ichifuku-01.png" alt="" />
                </figure>
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="78" viewBox="0 0 49 78" fill="none">
                    <path d="M49 39L0.25 77.1051L0.25 0.894882L49 39Z" fill="white"/>
                </svg>
                <figure>
                    <img src="/assets/images/img-ichifuku-02.png" alt="" />
                </figure>
            </div>
            <div className="fade-up text-center text-white md:text-[34px] text-[17px] font-hiragino mt-8 md:mt-12">
                一福<span className="md:text-[30px] text-[15px]">では、</span>「まるごと製法」<span className="md:text-[36px] text-[18px]">にこだわり、</span><br />
                「果物そのもの」<span className="md:text-[28px] text-[14px]">の</span>甘味<span className="md:text-[28px] text-[14px]">と</span>健康に良い栄養分<span className="md:text-[30px] text-[15px]">が</span><span className="md:text-[36px] text-[18px]">詰まった</span><br />
                ドライキウイ<span className="md:text-[28px] text-[14px]">を</span>作り上げました。
            </div>
            <div className="fade-up flex justify-center md:mt-[52px] mt-6">
                <img className='max-md:w-[200px]' src="/assets/images/package-kiwi-02.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Ichifuku
