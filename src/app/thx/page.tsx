import { Suspense } from 'react'

import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import A8SalesTracker from '@/components/a8SalesTracker'

export const metadata: Metadata = {
  title: '送信完了',
  openGraph: {
    ...OG,
    title: '送信完了',
    url: SITE_URL + '/thx/',
  },
  twitter: {
    ...TWITTER,
    title: '送信完了',
  },
  alternates: {
    canonical: SITE_URL + '/thx/',
  },
}

export default function Thankyou() {
  return (
    <Suspense>
      <main className="bg-[url('/assets/images/bg-thanks.png')] bg-cover">
        <div className="bg-[url('/assets/images/bg-inu.png')] bg-right-top bg-no-repeat max-dt:bg-[length:64.861vw_auto] max-md:bg-[length:50%_auto]">
          <div className="px-5">
            <div className="mx-auto w-full max-w-[1062px] pt-[150px] md:pt-[294px]">
              <h3 className="text-center text-[64px] font-black leading-none md:text-[128px]">
                ARIGATO!
              </h3>
              <p className="mb-5 py-12 text-center font-serif text-[15px] font-bold leading-[1.7] md:mb-11 md:py-20 md:text-[24px]">
                『メタでペット供養』にお申し込みいただき、
                <br className="max-md:hidden" />
                心より感謝申し上げます。
                <br />
                <br />
                あなた様がペットとの新たな未来を紡いでいくお手伝い
                <br className="max-md:hidden" />
                ができることをスタッフ一同心より嬉しく思っております。
                <br />
                <br />
                あなた様のお気持ちに寄り添い、
                <br />
                心をこめてサービスを提供させていただきます。
              </p>
              <div className="rounded-[10px] border-2 border-black bg-white/80 px-5 pb-10">
                <div className="-mt-[35px] flex justify-center md:-mt-[45px]">
                  <div className="flex h-[70px] w-[300px] items-center justify-center rounded-[10px] border-2 border-black bg-[#FEEC82] px-5 py-1 text-[28px] font-bold md:h-[91px] md:w-[390px] md:text-[48px]">
                    今後の流れ
                  </div>
                </div>
                <div className="mx-auto mt-5 w-full max-w-[910px] space-y-8 leading-[1.65] md:space-y-12">
                  <div>
                    <p className="text-[20px] font-bold md:text-[36px]">
                      1. 自動返信メールのご確認
                    </p>
                    <p className="text-[16px] font-medium md:text-[24px]">
                      まもなく、ご登録いただいたメールアドレスに自動返信メールが届きます。
                    </p>
                    <p className="text-[14px] md:text-[20px]">
                      ※送信元アドレス：pet@mp-inc.net <br />
                      ※件名：【メタでペット供養】お申し込み後の流れをお知らせいたします。
                      <br />
                      ※自動返信メールが届かない方は以下の
                      <span className="text-[#06C755]">
                        「サポート用公式LINE」
                      </span>
                      にご登録ください。
                    </p>
                  </div>
                  <div>
                    <p className="text-[20px] font-bold md:text-[36px]">
                    2. ご決済手続き
                    </p>
                    <p className="text-[16px] font-medium md:text-[24px]">
                      下記の
                      <span className="text-[#FF3700]">「お支払いを完了する」</span>
                      ボタンから、決済画面へお進みください。
                    </p>
                    <p className="text-[14px] md:text-[20px]">
                      ※クレジットカード払い、銀行振込に対応しております。
                    </p>
                  </div>
                  <div>
                    <p className="text-[20px] font-bold md:text-[36px]">
                      3. サービス開始のご案内
                    </p>
                    <p className="text-[16px] font-medium md:text-[24px]">
                      ご入金確認後、詳細な利用方法やアクセス情報をメールにてお送りいたします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-8 md:mt-[62px]">
            <div className="mx-auto w-full max-w-[1062px] py-6 md:py-[42px]">
              <span className="absolute left-0 top-0 h-full w-[90%] bg-white md:w-[80%]"></span>
              <p className="relative px-5 font-serif text-[20px] font-black leading-[1.7] max-md:pr-[14%] md:text-[2.778vw] xl:text-[40px]">
                お支払いを完了して、
                <br />
                あなた様とペットとの新たな物語を始めましょう。
              </p>
            </div>
          </div>
          <div className="px-5">
            <div className="mx-auto mt-8 w-full max-w-[400px] md:mt-16 md:max-w-[730px]">
              <div className="w-full overflow-hidden rounded-t-[10px] border border-black bg-white">
                <p className="flex items-center justify-center bg-black px-5 py-2 text-center font-serif text-[18px] font-bold text-white md:h-[50px] md:text-[24px]">
                  <span>
                    プラン名右手 の下部ボタンからお支払い画面にお進みください
                  </span>
                </p>
                <div className="divide-y divide-black">
                  <div className="flex items-center justify-between gap-4 py-5 pl-2 pr-4 max-md:flex-col md:gap-2 md:pb-11 md:pr-[38px] md:pt-8">
                    <p className="text-center text-[22px] font-bold leading-[1.1] md:text-[40px]  flex-1">
                      【今だけセール中】<br />メタでペット供養<br />β（ベータ）版
                    </p>
                    <a 
                      target="_blank"
                      href="https://anz-official.myshopify.com/products/pet-memorial" className="w-[210px] duration-150 hover:opacity-75 ">
                      <p className="text-center md:text-[21px] font-bold md:mb-3 mb-2 text-[#F12929]">＼ ここをクリック ／</p>
                    <div
                      className="flex h-20 w-[210px] items-center justify-center rounded-[10px] border-2 border-white bg-[#F12929] p-2 text-center text-[20px] font-bold leading-[1.2] tracking-wider text-white md:h-[121px] md:text-[32px]"
                    >
                      お支払いを完了する
                    </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-4 w-full max-w-[800px] space-y-3 text-[14px] leading-[1.4] md:mt-7 md:text-[20px]">
                <p>
                  ※「お支払いを完了する」ボタンの遷移先ページは、<span className="font-bold">株式会社メタロポリスが運営するメタバースショップ</span><span className="text-[#F12929]">「ANZショップ」</span>となります。
                  <br />
                </p>
                <p>
                  ※銀行振込の方も上記「お支払いを完了する」ボタンからお手続きを完了してください。<span className="font-bold">振込先銀行口座情報もそちらでご案内</span>しております。
                </p>
              </div>
            </div>
            <div className="mt-20 md:mt-[143px]">
              <p className="text-center text-[28px] font-bold md:text-[48px]">
                自動返信メールが届かない場合
              </p>
              <div className="mt-7 flex items-center justify-center md:mt-10">
                <img
                  className="max-md:max-w-[120px]"
                  src="/assets/images/line-logo.png"
                  alt=""
                />
              </div>
              <p className="mt-3 text-center text-[20px] font-bold md:text-[32px]">
                サポート専用LINEのご案内
              </p>
              <div className="my-6 flex justify-center md:my-10">
                <a
                  href="https://lin.ee/HuEEnvT"
                  target="_blank"
                  className="block duration-150 hover:opacity-75"
                >
                  <img src="/assets/images/line-btn.png" alt="" />
                </a>
              </div>
              <div className="mx-auto w-full max-w-[350px] border-2 border-[#06C755] bg-white md:max-w-[750px]">
                <p className="p-6 text-[18px] font-bold leading-[1.7] md:p-11 md:text-[24px]">
                  迷惑メールフォルダをご確認ください。それでも見当たらない場合は、お手数ですが上記のサポート専用公式LINEアカウントまでご連絡ください。サービス提供前、提供後のサポート窓口として利用いたします。
                </p>
              </div>
              <p className="my-10 text-center font-serif text-[20px] font-bold md:my-16 md:text-[32px]">
                今後とも『メタでペット供養』をよろしくお願いいたします。
                <br />
                ご不明な点がございましたら、いつでもお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* <A8SalesTracker /> */}
    </Suspense>
  )
}
