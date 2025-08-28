const StepItem = ({
  step,
  image,
  title,
  text,
  bg,
  buttons,
}: {
  step: string;
  image: string;
  title: string;
  text: React.ReactNode;
  bg: string;
  buttons?: boolean;
}) => (
  <div className="group fade-up flex items-start max-md:flex-col md:even:flex-row-reverse">
    <div
      className="relative flex w-full flex-col bg-cover bg-no-repeat px-5 text-black max-md:min-h-[400px] max-md:py-22 md:aspect-square md:w-[520px] xl:px-15"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-x-0 top-0 flex justify-center">
        <div className="relative">
          <img className="max-md:h-18" src="/assets/images/step-number.png" alt="" />
          <div className="absolute inset-0 flex items-center justify-center pb-3 text-center">
            <p className="text-[18px] font-semibold text-[#01FFAA] italic md:text-[24px]">
              STEP<span className="ml-1 text-[32px] md:text-[40px]">{step}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center md:py-30">
        <h5 className="mb-4 text-center text-[24px] font-black md:text-[32px]">{title}</h5>
        <p className="text-[15px] md:text-[18px]">{text}</p>
        {buttons && (
          <div className="mt-6 flex flex-col items-center justify-center gap-2.5 md:mt-10">
            <a
              href="https://apps.apple.com/jp/app/diver-wallet-pro/id6739527739"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="max-md:w-[220px]" src="/assets/images/btn-apple.png" alt="" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.bigant.diver.limited.wallet.pro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="max-md:w-[220px]" src="/assets/images/btn-google.png" alt="" />
            </a>
          </div>
        )}
      </div>
    </div>
    <div className="relative md:w-[620px] md:pt-[120px] md:group-odd:-ml-5 md:group-even:-mr-5">
      <img src={image} alt="" />
    </div>
  </div>
);

export default function Step() {
  return (
    <section className="relative px-5 pt-12 md:pt-19">
      <div className="mx-auto w-full max-w-[1440px]">
        <h4 className="fade-up flex items-center justify-center">
          <span className="md:-ml-12">
            <img src="/assets/images/step-title.png" alt="3ステップで今すぐスタート！" />
          </span>
        </h4>
        <div className="mx-auto w-full max-w-[440px] space-y-20 max-md:mt-7 md:max-w-[1120px] md:space-y-[160px]">
          <StepItem
            step="1"
            title="アプリをダウンロード"
            text={
              <>
                DIVER Walletっていう無料アプリを入れるだけ！
                <br />
                iPhone でも Android でもOKだよ
              </>
            }
            image="/assets/images/step-img-01.png"
            bg="/assets/images/bg-img-1.png"
            buttons
          ></StepItem>
          <StepItem
            step="2"
            title="ウォレットを作る"
            text={
              <>
                アプリを開いて、ウォレット作成！
                <br />
                30秒もあれば完了しちゃいます
              </>
            }
            image="/assets/images/step-img-02.png"
            bg="/assets/images/bg-img-2.png"
          ></StepItem>
          <StepItem
            step="3"
            title="お店やサービスを利用"
            text={
              <>
                加盟店でQRコードをスキャン！
                <br />
                ウォレットがあれば誰でもDWUを簡単受け取り
                <br />
                準備はこれだけ！今すぐ始められますよ〜
              </>
            }
            image="/assets/images/step-img-03.png"
            bg="/assets/images/bg-img-3.png"
          ></StepItem>
        </div>
      </div>
    </section>
  );
}
