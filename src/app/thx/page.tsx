import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'

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
    <main className="bg-[url('/assets/images/bg-thanks.png')] bg-cover">
      <div className="bg-[url('/assets/images/bg-inu.png')] bg-right-top max-dt:bg-[length:64.861vw_auto] max-md:bg-[length:50%_auto] bg-no-repeat">
        <div className="px-5">
          <div className="w-full max-w-[1062px] mx-auto md:pt-[294px] pt-[150px]">
            <h3 className="text-center md:text-[128px] text-[64px] font-black leading-none">ARIGATO!</h3>
            <p className="text-center md:text-[24px] text-[15px] font-serif font-bold py-12 md:py-20 leading-[1.7] md:mb-11 mb-5">
              『メタでペット供養』にお申し込みいただき、<br className="max-md:hidden" />
              心より感謝申し上げます。<br />
              <br />
              あなた様がペットとの新たな未来を紡いでいくお手伝い<br className="max-md:hidden" />
              ができることをスタッフ一同心より嬉しく思っております。<br />
              <br />
              あなた様のお気持ちに寄り添い、<br />
              心をこめてサービスを提供させていただきます。
            </p>
            <div className="bg-white/80 border-2 border-black rounded-[10px] px-5 pb-10">
              <div className="flex justify-center md:-mt-[45px] -mt-[35px]">
                <div className="md:w-[390px] w-[300px] h-[70px] md:h-[91px] flex items-center justify-center bg-[#FEEC82] border-black border-2 rounded-[10px] md:text-[48px] text-[28px] font-bold py-1 px-5">今後の流れ</div>
              </div>
              <div className="w-full max-w-[910px] mx-auto leading-[1.65] mt-5 md:space-y-12 space-y-8">
                <div>
                  <p className="md:text-[36px] text-[20px] font-bold">1. 自動返信メールのご確認</p>
                  <p className="md:text-[24px] text-[16px] font-medium">まもなく、ご登録いただいたメールアドレスに自動返信メールが届きます。</p>
                  <p className="md:text-[20px] text-[14px]">
                    ※送信元アドレス：pet@mp-inc.net <br />
                    ※件名：【メタでペット供養】お申し込み後の流れをお知らせいたします。<br />
                    ※自動返信メールが届かない方は以下の<span className="text-[#06C755]">「サポート用公式LINE」</span>にご登録ください。
                  </p>
                </div>
                <div>
                  <p className="md:text-[36px] text-[20px] font-bold">2. ご入金手続き</p>
                  <p className="md:text-[24px] text-[16px] font-medium">下記の<span className="text-[#FF3700]">「お支払いへ進む」</span>ボタンから、決済画面へお進みください。</p>
                  <p className="md:text-[20px] text-[14px]">
                  ※クレジットカード払い、銀行振込に対応しております。
                  </p>
                </div>
                <div>
                  <p className="md:text-[36px] text-[20px] font-bold">3. サービス開始のご案内</p>
                  <p className="md:text-[24px] text-[16px] font-medium">ご入金確認後、詳細な利用方法やアクセス情報をメールにてお送りいたします。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:mt-[62px] mt-8">
        <div className="w-full max-w-[1062px] mx-auto md:py-[42px] py-6">
          <span className="absolute h-full bg-white left-0 top-0 w-[90%] md:w-[80%]"></span>
          <p className="font-serif md:text-[2.778vw] xl:text-[40px] text-[20px] font-black relative leading-[1.7] px-5 max-md:pr-[14%]">
          お支払いを完了して、<br />
          あなた様とペットとの新たな物語を始めましょう。
          </p>
        </div>
        </div>
        <div className="px-5">
          <div className="w-full md:max-w-[890px] max-w-[400px] mx-auto md:mt-16 mt-8">
            <div className="w-full rounded-t-[10px] overflow-hidden bg-white border-black border">
              <p className="bg-black flex justify-center font-bold items-center text-center md:h-[50px] md:text-[24px] text-[18px] text-white font-serif px-5 py-2">ご希望のプラン名の右手ボタンからお支払いにお進みください</p>
              <div className="divide-y divide-black">
                <div className="flex items-center justify-between py-5 md:pt-8 md:pb-11 pl-2 pr-4 md:pr-[38px] gap-4 md:gap-2 max-md:flex-col">
                  <p className="md:text-[48px] text-[22px] font-bold leading-[1.1] text-center">
                  【先着50名限定 ! 40%オフ】<br />
                  メモリアルモニタープラン
                  </p>
                  <a href="https://anz-official.myshopify.com/products/%E3%83%A1%E3%83%A2%E3%83%AA%E3%82%A2%E3%83%AB%E3%83%A2%E3%83%8B%E3%82%BF%E3%83%BC%E3%83%97%E3%83%A9%E3%83%B3" target="_blank" className="flex justify-center items-center w-[197px] h-20 md:h-[121px] bg-[#F12929] border-2 border-white rounded-[10px] text-white md:text-[32px] text-[20px] font-bold text-center p-2 leading-[1.2] tracking-wider duration-150 hover:opacity-75">
                  お支払いへ進む
                  </a>
                </div>
                <div className="flex items-center justify-between py-5 md:pt-5 md:pb-4 md:pl-9 max-md:px-4 md:pr-[38px] gap-4 md:gap-2 max-md:flex-col">
                  <p className="md:text-[32px] text-[20px] font-bold leading-[1.1] text-center">
                  エントリープラン
                  </p>
                  <a href="https://anz-official.myshopify.com/products/%E3%82%A8%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC%E3%83%97%E3%83%A9%E3%83%B3" target="_blank" className="flex justify-center items-center w-[197px] h-[50px] bg-[#F12929] border-2 border-white rounded-[10px] text-white md:text-[20px] text-[16px] font-bold text-center p-2 leading-[1.2] tracking-wider duration-150 hover:opacity-75">
                  お支払いへ進む
                  </a>
                </div>
                <div className="flex items-center justify-between py-5 md:pt-5 md:pb-4 md:pl-9 max-md:px-4 md:pr-[38px] gap-4 md:gap-2 max-md:flex-col">
                  <p className="md:text-[32px] text-[20px] font-bold leading-[1.1] text-center">
                  スタンダードプラン
                  </p>
                  <a href="https://anz-official.myshopify.com/products/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%80%E3%83%BC%E3%83%89%E3%83%97%E3%83%A9%E3%83%B3" target="_blank" className="flex justify-center items-center w-[197px] h-[50px] bg-[#F12929] border-2 border-white rounded-[10px] text-white md:text-[20px] text-[16px] font-bold text-center p-2 leading-[1.2] tracking-wider duration-150 hover:opacity-75">
                  お支払いへ進む
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[800px] mx-auto md:text-[20px] text-[14px] md:mt-7 mt-4 leading-[1.4] space-y-3">
              <p>※「お支払いへ進む」ボタンの遷移先ページは、<span className="font-bold">株式会社メタロポリスが運営するメタバースショップ<span className="text-[#F12929]">「ANZショップ」</span></span>となります。<br /></p>
              <p>
              ※銀行振込の方も上記「お支払いへ進む」ボタンからお手続きを完了してください。<span className="font-bold">振込先銀行口座情報もそちらでご案内</span>しております。</p>
            </div>
          </div>
          <div className="md:mt-[143px] mt-20">
            <p className="text-center md:text-[48px] text-[28px] font-bold">自動返信メールが届かない場合</p>
            <div className="flex justify-center items-center mt-7 md:mt-10">
              <img className='max-md:max-w-[120px]' src="/assets/images/line-logo.png" alt="" />
            </div>
            <p className="text-center md:text-[32px] text-[20px] font-bold mt-3">サポート専用LINEのご案内</p>
            <div className="flex justify-center md:my-10 my-6">
              <a href="https://lin.ee/HuEEnvT" target='_blank' className="block duration-150 hover:opacity-75"><img src="/assets/images/line-btn.png" alt="" /></a>
            </div>
            <div className="w-full md:max-w-[750px] max-w-[350px] mx-auto bg-white border-2 border-[#06C755]">
              <p className="md:text-[24px] text-[18px] font-bold p-6 md:p-11 leading-[1.7]">
              迷惑メールフォルダをご確認ください。それでも見当たらない場合は、お手数ですが上記のサポート専用公式LINEアカウントまでご連絡ください。サービス提供前、提供後のサポート窓口として利用いたします。
              </p>
            </div>
            <p className="text-center md:text-[32px] text-[20px] font-serif font-bold md:my-16 my-10">
            今後とも『メタでペット供養』をよろしくお願いいたします。<br />
            ご不明な点がございましたら、いつでもお問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}