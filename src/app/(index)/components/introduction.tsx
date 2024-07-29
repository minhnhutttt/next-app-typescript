'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Introduction = () => {
  const ref = useScrollAnimations()
  return (
    <section ref={ref} className="relative px-5 pb-[140px] pt-10 md:pb-[300px]">
      <div className="relative z-10 mx-auto w-full max-w-[400px] rounded-[80px] border-[3px] border-[#FFABEC]/[80] pb-3 max-md:px-4 max-md:py-6 md:max-w-[762px] md:rounded-[220px]">
        <p className="text-center text-[14px] font-bold md:text-[24px]">
          国が<span className="text-[17px] md:text-[32px]">1兆円投資中</span>
          の今が<span className="text-[17px] md:text-[32px]">チャンス</span>
          です！
        </p>
        <div className="flex justify-center max-md:mt-2">
          <img
            className="max-md:w-[300px]"
            src="/assets/images/reasons.png"
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <a
            href="/#contact"
            className="flex h-12 w-[200px] items-center justify-center gap-4 rounded-[40px] bg-[#03BA0B] font-black text-white md:h-20 md:w-[300px] md:text-[28px]"
          >
            <span>導入を相談する</span>
            <span>＞</span>
          </a>
        </div>
      </div>
      <div className="relative z-20">
        <div className="relative pb-16 md:pb-28">
          <div className="mx-auto mt-6 flex w-[320px] md:w-[552px]">
            <span className="h-[280px] w-px bg-[linear-gradient(180deg,_rgba(128,128,128,1)_0%,_rgba(255,255,255,1)_100%)] md:h-[369px]"></span>
            <p className="flex-1 px-5 text-center text-[16px] font-bold leading-[1.7] text-[#5B5B5B] md:text-[21px]">
              AIを活用できない企業は
              <br />
              すでに成長の道が閉ざされました。
              <br />
              <br />
              AIは企業競争力の源泉です。
              <br />
              他社よりも早く、AIを企業の中心に。
              <br />
              <br />
              その力を最大限に引き出すお手伝いを
              <br />
              いつでも喜んでさせていただきます。
            </p>
            <span className="h-[280px] w-px bg-[linear-gradient(180deg,_rgba(128,128,128,1)_0%,_rgba(255,255,255,1)_100%)] md:h-[369px]"></span>
          </div>
          <div className="absolute bottom-0 left-0 -z-[1]">
            <img src="/assets/images/bg-01.png" alt="" />
          </div>
        </div>
        <div className="-mt-8 px-5 text-center md:-mt-14">
          <p className="text-[18px] font-bold leading-[1.85] md:text-[28px]">
            <span className="show">
              生成AIは
              <span className="text-[24px] text-[#FF9242] md:text-[38px]">
                アイデア
              </span>
              をひねりだす。
              <br />
              人間の発想の10倍のスピードで。
            </span>
            <br />
            <br />
            <span className="show">
              生成AIは
              <span className="text-[24px] text-[#FF9242] md:text-[38px]">
                あらゆる領域
              </span>
              で<br className="md:hidden" />
              <span className="text-[24px] text-[#FF9242] md:text-[38px]">
                変化<span className="text-[20px] md:text-[30px]">を</span>
                起こす。
              </span>
              <br />
              人間がAIを使いこなすことで。
            </span>
            <br />
            <br />
            <span className="show">
              その両方を
              <span className="text-[24px] text-[#FF9242] md:text-[38px]">
                1<span className="text-[20px] md:text-[30px]">ヶ</span>月
                <span className="text-[20px] md:text-[30px]">で</span>実現
              </span>
              する。
              <br />
              私たちのeラーニングで。
            </span>
          </p>
          <div className="mt-16 text-center font-bold md:mt-28">
            <p className="show text-[24px] md:text-[42px]">
              あなたのために、
              <br />
              社員のために、
              <br />
              会社の未来のために。
              <br />
            </p>
            <p className="show mt-20 text-[20px] md:text-[36px]">
              質の高い仕事を、最高効率に。
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-[340px] md:top-[-120px]">
        <img
          className="max-md:w-[160px]"
          src="/assets/images/bg-02.png"
          alt=""
        />
      </div>
      <div className="absolute left-0 top-[760px] md:top-[700px]">
        <img
          className="max-md:w-[280px]"
          src="/assets/images/bg-03.png"
          alt=""
        />
      </div>
    </section>
  )
}

export default Introduction
