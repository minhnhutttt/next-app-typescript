'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'


const Introduction = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative px-5 pt-10 md:pb-[300px] pb-[140px]">
      <div className="relative z-10 w-full md:max-w-[762px] max-w-[400px] mx-auto border-[3px] border-[#FFABEC]/[80] md:rounded-[220px] rounded-[80px] pb-3 max-md:px-4 max-md:py-6">
        <p className="text-center md:text-[24px] text-[14px] font-bold">国が<span className="md:text-[32px] text-[17px]">1兆円投資中</span>の今が<span className="text-[17px] md:text-[32px]">チャンス</span>です！</p>
        <div className="flex justify-center max-md:mt-2">
            <img className='max-md:w-[300px]' src="/assets/images/reasons.png" alt="" />
        </div>
        <div className="flex justify-center">
            <a href="/#contact" className="md:w-[300px] w-[200px] h-12 md:h-20 flex items-center justify-center bg-[#03BA0B] rounded-[40px] md:text-[28px] font-black gap-4 text-white">
            <span>導入を相談する</span>
            <span>＞</span>
            </a>
        </div>
      </div>
      <div className="relative z-20">
        <div className="relative md:pb-28 pb-16">
            <div className="md:w-[552px] w-[320px] mx-auto flex mt-6">
                <span className="bg-[linear-gradient(180deg,_rgba(128,128,128,1)_0%,_rgba(255,255,255,1)_100%)] w-px h-[280px] md:h-[369px]"></span>
                <p className="flex-1 px-5 md:text-[21px] text-[16px] font-bold text-[#5B5B5B] text-center leading-[1.7]">
                    AIを活用できない企業は<br />
                    すでに成長の道が閉ざされました。<br />
                    <br />
                    AIは企業競争力の源泉です。<br />
                    他社よりも早く、AIを企業の中心に。<br />
                    <br />
                    その力を最大限に引き出すお手伝いを<br />
                    いつでも喜んでさせていただきます。
                </p>
                <span className="bg-[linear-gradient(180deg,_rgba(128,128,128,1)_0%,_rgba(255,255,255,1)_100%)] w-px h-[280px] md:h-[369px]"></span>
            </div>
            <div className="absolute left-0 bottom-0">
                <img src="/assets/images/bg-01.png" alt="" />
            </div>
        </div>
        <div className="px-5 text-center md:-mt-14 -mt-8">
            <p className="md:text-[28px] text-[18px] font-bold leading-[1.85]">
                <span className="show">生成AIは<span className="md:text-[38px] text-[24px] text-[#FF9242]">アイデア</span>をひねりだす。<br />
                人間の発想の10倍のスピードで。</span><br />
                <br />
                <span className="show">生成AIは<span className="md:text-[38px] text-[24px] text-[#FF9242]">あらゆる領域</span>で<br className="md:hidden" /><span className="md:text-[38px] text-[24px] text-[#FF9242]">変化<span className="md:text-[30px] text-[20px]">を</span>起こす。</span><br />
                人間がAIを使いこなすことで。</span><br />
                <br />
                <span className="show">その両方を<span className="md:text-[38px] text-[24px] text-[#FF9242]">1<span className="md:text-[30px] text-[20px]">ヶ</span>月<span className="md:text-[30px] text-[20px]">で</span>実現</span>する。<br />
                私たちのeラーニングで。</span>
            </p>
            <div className="text-center font-bold md:mt-28 mt-16">
                <p className="show md:text-[42px] text-[24px]">
                    あなたのために、<br />
                    社員のために、<br />
                    会社の未来のために。<br />
                </p>
                <p className="show md:text-[36px] text-[20px] mt-20">
                    質の高い仕事を、最高効率に。
                </p>
            </div>
        </div>
      </div>
      <div className="absolute right-0 top-[340px] md:top-[-120px]">
        <img className='max-md:w-[160px]' src="/assets/images/bg-02.png" alt="" />
      </div>
      <div className="absolute left-0 md:top-[700px] top-[760px]">
        <img className='max-md:w-[280px]' src="/assets/images/bg-03.png" alt="" />
      </div>
    </section>
  )
}

export default Introduction
