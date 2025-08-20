'use client';
import { Button } from '@/components/ui/Button';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import useScrollAnimations from '@/hooks/useScrollAnimations';
import Link from 'next/link';

export default function Contact() {
  const ref = useScrollAnimations();
  useInfiniteScroll();
  return (
    <main ref={ref} className="overflow-hidden">
      <div className="pt-15 md:pt-20">
        <h3
          data-infinite-scroll="4:10s"
          className="font-arimo u-text-gradient-01 flex w-max text-[100px] font-bold whitespace-nowrap italic md:text-[250px]"
        >
          <span className="shrink-0">contact／</span>
        </h3>
        <div className="px-5">
          <div className="mx-auto w-full max-w-[1250px] pt-16 md:pt-24">
            <p className="text-left text-[20px] font-thin md:text-[32px]">
              {`<`} <span className="font-bold">Contact</span> {`>`}
            </p>
            <h5 className="fade-up text-center text-[32px] leading-snug font-bold md:text-[70px] lg:text-[80px] xl:text-[105px]">
              まずは無料相談から
            </h5>
            <p className="fade-up mt-10 text-center text-[20px] font-bold md:mt-20 md:text-[38px]">
              「本当に何もしなくていいの？」「うちの業界でも効果ある？」
              <br />
              そんな疑問にお答えします。
              <br />
              SEIKAIの自動化の仕組み、成約報告による改善効果など、
              <br />
              ご利用前の不明点解消にお役立てください。
            </p>
            <div className="fade-up mt-15 flex items-center justify-center gap-5 max-md:flex-col md:mt-24 md:gap-9">
              <Link
                href="/"
                className="flex h-16 w-[330px] items-center justify-center rounded-[45px] bg-[#E0E0E0] text-[28px] font-bold text-[#353535] md:h-[98px] md:w-[370px] md:rounded-[45px] md:text-[38px]"
              >
                相談フォーム
              </Link>
              <Link
                href="/"
                className="flex h-16 w-[330px] items-center justify-center rounded-[45px] bg-[#090920] text-[28px] font-bold text-white md:h-[98px] md:w-[370px] md:rounded-[45px] md:text-[38px]"
              >
                お問い合わせ
              </Link>
            </div>
            <div className="mx-auto mt-14 mb-[130px] w-full max-w-[800px] md:mt-[90px] md:mb-[260px]">
              <div className="space-y-7 text-[19px] md:space-y-11 md:text-[27px]">
                <div>
                  <label htmlFor="">
                    会社名<span className="text-[#EB4335]">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      className="h-14 w-full rounded-[10px] border-2 border-[#7D8398]/[0.3] p-4 md:h-20 md:p-6"
                      placeholder="例）AIS Japan株式会社"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="">
                    ご担当者名<span className="text-[#EB4335]">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      className="h-14 w-full rounded-[10px] border-2 border-[#7D8398]/[0.3] p-4 md:h-20 md:p-6"
                      placeholder="田中一郎"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="">
                    メールアドレス<span className="text-[#EB4335]">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      className="h-14 w-full rounded-[10px] border-2 border-[#7D8398]/[0.3] p-4 md:h-20 md:p-6"
                      placeholder="mail@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="">
                    電話番号<span className="text-[#EB4335]">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      className="h-14 w-full rounded-[10px] border-2 border-[#7D8398]/[0.3] p-4 md:h-20 md:p-6"
                      placeholder="123456789"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="">
                    現在の月間広告予算<span className="text-[#EB4335]">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      className="h-14 w-full rounded-[10px] border-2 border-[#7D8398]/[0.3] p-4 md:h-20 md:p-6"
                      placeholder="1000000"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="">
                    相談内容<span className="text-[#EB4335]">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      className="h-14 w-full rounded-[10px] border-2 border-[#7D8398]/[0.3] p-4 md:h-20 md:p-6"
                      placeholder="AIを使ったマーケティングを詳しく知りたい"
                    />
                  </div>
                </div>
                <div className="mt-10 md:mt-15">
                  <button className="flex h-20 w-full items-center justify-center rounded-[10px] bg-[#1E1E1E] text-center text-[24px] font-bold text-white md:h-[90px] md:text-[32px]">
                    送信内容を確認する
                  </button>
                </div>
              </div>
              <div className="mt-20 md:mt-36">
                <p className="text-center text-[28px] font-bold md:text-[40px]">関連情報リンク</p>
                <div className="fade-up mt-8 flex flex-wrap justify-center gap-x-10 gap-y-5 md:mt-12 md:gap-14">
                  <Button link="#">SEIKAIの詳細</Button>
                  <Button link="#">料金体系</Button>
                  <Button link="#">導入事例</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
