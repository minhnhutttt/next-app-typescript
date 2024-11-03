'use client'

import Button from '@/components/button'
import { useModal } from '@/context/ModalContext'

const Banner = () => {
  const { openModal } = useModal()
  return (
    <div className="flex items-start justify-center">
    <div className="fade-up absolute left-2 top-[-40px]  z-10 md:relative md:-mt-7 md:mr-[-28px]">
      <img
        className="max-md:w-[100px]"
        src="/assets/images/circle.png"
        alt=""
      />
      <img
        className="absolute left-[-12%] top-[23%] w-[30.677%] animate-[fadeIn_1s_ease_infinite]"
        src="/assets/images/circle-c.png"
        alt=""
      />
    </div>
    <div className="fade-up w-full max-w-[440px] rounded-[32px] border-[3px] border-white bg-[url('/assets/images/bg-01.png')] bg-cover pb-5 md:max-w-[830px] md:rounded-[63px] md:border-[6px] md:pb-[24px] md:pl-8">
      <div className="flex gap-2 px-4 max-md:justify-center">
        <div className="flex-1 pt-3">
          <h3 className="flex max-md:pl-20 md:justify-center">
            <img
              className="max-md:hidden max-md:w-full max-md:max-w-[400px]"
              src="/assets/images/title.png"
              alt="メモリアルモニター受付中 !!"
            />
            <img
              className="max-md:w-full max-md:max-w-[240px] md:hidden"
              src="/assets/images/title-sp.png"
              alt="メモリアルモニター受付中 !!"
            />
          </h3>
          <p className="pt-2 font-zen text-[16px] font-black  max-md:pl-16 md:text-center md:text-[24px]">
            プランに含まれているものはこちら！
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-2 border-t border-black pt-2 text-[14px] font-extrabold tracking-tight md:gap-3 md:text-[22px]">
            <p className="flex gap-1">
              <span>入会金</span>
              <img
                className="max-md:w-5"
                src="/assets/images/ic-1.svg"
                alt=""
              />
            </p>
            <p className="flex gap-1">
              <span>動く2Dペット</span>
              <img
                className="max-md:w-5"
                src="/assets/images/ic-1.svg"
                alt=""
              />
            </p>
            <p className="flex gap-1">
              <span>メタバース共同墓地設置</span>
              <img
                className="max-md:w-5"
                src="/assets/images/ic-1.svg"
                alt=""
              />
            </p>
            <p className="flex gap-1">
              <span>24時間利用</span>
              <img
                className="max-md:w-5"
                src="/assets/images/ic-1.svg"
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-5 px-4 max-md:flex-col md:gap-8">
        <div className="h-[103px] rounded-[20px] border border-[#E96500] bg-[#FFF8D2]/[0.7] px-3 py-2">
          <div className="flex items-center h-full text-[16px] font-bold leading-[1.4] md:text-[22px]">
            <p className="whitespace-nowrap px-3">特典</p>
            <div className="border-l border-black px-3">
              <p>
                お線香無料
                <br />
                年間管理料初年度無料
              </p>
              <p className="text-[14px] font-normal md:text-[16px]">
                {' '}
                ※2年目以降月額1100円（税込）
              </p>
            </div>
          </div>
        </div>
        <Button
          onclick={openModal}
          rect="flex md:w-[310px] w-[280px] md:h-[83px] h-20 bg-[#094FDA] items-center justify-center rounded-[60px] border-2 border-white"
        >
          <span>
            <img
              className="max-md:w-14 md:w-[56px]"
              src="/assets/images/ic-btn-01.png"
              alt=""
            />
          </span>
          <span className="text-left text-[16px] font-extrabold md:text-[19px]">
            セール価格で <br />
            ベータ版に申し込む
          </span>
        </Button>
      </div>
    </div>
  </div>
  )
}

export default Banner
