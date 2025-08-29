const StepItem = ({
  step,
  image,
  title,
  text,
}: {
  step: string;
  image: string;
  title: string;
  text: React.ReactNode;
}) => (
  <div className="relative flex min-h-[160px] items-center gap-5 rounded-3xl border border-[#0046B8] bg-white pr-5 pl-5 [box-shadow:4px_4px_4px_0_rgba(0,_0,_0,_0.25)] md:min-h-[180px] md:rounded-[40px] md:pl-15">
    <div className="absolute -top-8 -left-4 flex size-[64px] flex-col items-center justify-center rounded-full rounded-br-none bg-[#0046B8] text-center leading-none text-white md:-left-12 md:size-[93px]">
      <span className="text-[13px] font-medium md:text-[16px]">STEP</span>
      <span className="text-[32px] font-black md:text-[48px]">{step}</span>
    </div>
    <div className="max-md:w-20">
      <img src={image} alt="" />
    </div>
    <div className="flex-1">
      <h6 className="text-[20px] font-bold md:text-[36px]">{title}</h6>
      <h6 className="text-[15px] font-medium md:mt-2 md:text-[18px]">{text}</h6>
    </div>
  </div>
);

export default function Step() {
  return (
    <section className="relative bg-[url('/assets/images/bg-pattern01.png')] bg-cover px-5 py-25 md:py-[190px]">
      <div className="mx-auto flex w-full max-w-[670px] items-center gap-20 max-xl:flex-col md:gap-25 xl:max-w-[1280px]">
        <div className="">
          <p className="flex items-center max-md:justify-center">
            <span className="max-md:w-20">
              <img src="/assets/images/number-3.png" alt="" />
            </span>
            <span className="text-[32px] font-black text-[#0046B8] md:text-[48px]">ステップで</span>
          </p>
          <p className="text-[32px] font-black text-[#0046B8] max-md:text-center md:text-[48px]">
            簡単に始められる！
          </p>
          <div className="mt-8 flex justify-center md:mt-12">
            <a
              href="/"
              className="relative flex h-18 w-[280px] items-center justify-center rounded-full bg-[#0046B8] text-[18px] font-medium text-white md:w-[340px] md:text-[20px]"
            >
              導入について詳しく知る
              <span className="absolute right-3">
                <img src="/assets/images/arrow-right.png" alt="" />
              </span>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="space-y-10">
            <StepItem
              step="1"
              image="/assets/images/ic-wallet.png"
              title="ウォレット準備とドル調達"
              text={
                <>
                  DIVER Wallet Proで店舗ウォレットを作成
                  <br />
                  配布用のドル資金を準備
                </>
              }
            />
            <StepItem
              step="2"
              image="/assets/images/ic-qr.png"
              title="QRコード生成・配置"
              text={
                <>
                  QRリワードシステムで商品ごとのドル還元QRコードを生成スタッフ個別のウォレットQRコードを店内に設置
                </>
              }
            />
            <StepItem
              step="3"
              image="/assets/images/ic-start.png"
              title="運用開始"
              text={
                <>
                  スタッフ研修・お客様案内を経て、ドル活店として運用開始 お客様がドルを獲得、受け取ったドルをスタッフに送金可能
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
