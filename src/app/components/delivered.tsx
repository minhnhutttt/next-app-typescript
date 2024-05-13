'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Delivered = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="bg-[url('/assets/images/bg-delivered.png')] bg-cover px-5 border-y border-[#5F520F] pt-10 pb-14 md:pt-[50px] md:pb-[75px]">
        <div className="w-full md:max-w-[1080px] max-w-[480px] mx-auto">
            <h3 className="fade-up text-center md:text-[42px] text-[21px] font-hiragino font-semibold">
                健康に良い栄養素<span className="md:text-[32px] text-[16px]">を</span> <br />
                <span className="md:text-[40px] text-[20px]">何も足さず、何も引かず</span><span className="md:text-[36px] text-[18px]">に</span><span className="md:text-[40px] text-[20px]">お届けする</span><br />
                一福のこだわりです。
            </h3>
            <div className="fade-up flex justify-center mt-10 md:mb-14 mb-10 md:mt-20">
                <img className="max-md:w-[250px]" src="/assets/images/img-delivered.png" alt="" />
            </div>
            <div className="fade-up bg-white border-[6px] border-[#88B450] rounded-[32px] py-4 px-5 md:px-[44px]">
                <div className="fade-up text-center md:text-[45px] text-[22px] font-hiragino font-semibold">
                    <span className="md:text-[36px] text-[18px]">果肉だけでは手に入らない、</span><br className="min-[1080px]:hidden" />まるごとドライキウイ <br /><span className="md:text-[36px] text-[18px]">なら、</span>
                    こんなに栄養価が高い！
                </div>
                <div className="fade-up grid md:grid-cols-3 font-hiragino font-semibold text-white gap-2 md:gap-8 w-full max-md:max-w-[340px] max-md:mx-auto max-md:mt-4">
                    <div className="bg-[#74B83E] border-[8px] border-white rounded-[32px] pt-3 px-3">
                        <p className="xl:text-[36px] md:text-[2.813vw] text-[20px] leading-tight">
                            ・葉酸 <br />
                            ・ビタミンE
                        </p>
                        <p className="text-right xl:text-[72px] md:text-[5.625vw] text-[36px] pr-5 leading-none py-4">30<span className="xl:text-[46px] md:text-[3.594vw] text-[23px]">％増</span></p>
                    </div>
                    <div className="bg-[#74B83E] border-[8px] border-white rounded-[32px] pt-3 px-3">
                        <p className="xl:text-[36px] md:text-[2.813vw] text-[20px] leading-tight">
                            ・食物繊維の <br />
                              摂取量が
                        </p>
                        <p className="max-md:text-right xl:text-[72px] md:text-[5.625vw] text-[36px] text-center leading-none py-4"><span className="xl:text-[40px] md:text-[3.125vw] text-[20px] relative md:-top-6 -top-3">約</span>2<span className="xl:text-[42px] md:text-[3.281vw] text-[21px]">倍</span></p>
                    </div>
                    <div className="bg-[#74B83E] border-[8px] border-white rounded-[32px] pt-3 px-3">
                        <p className="xl:text-[36px] md:text-[2.813vw] text-[20px] leading-tight">
                            ポリフェノール <br />
                            <span className="md:text-[28px] text-[14px]">の</span>30％<span className="md:text-[28px] text-[14px]">は</span>、
                        </p>
                        <p className="max-md:text-right xl:text-[26px] md:text-[2.031vw] text-[15px] text-center leading-none py-4"><span className="xl:text-[60px] md:text-[4.688vw] text-[30px]">皮</span>に<span className="xl:text-[45px] md:text-[3.516vw] text-[22px]">含</span>まれている</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Delivered
