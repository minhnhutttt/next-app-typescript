import useScrollAnimations from "@/hooks/useScrollAnimations";

const Ready = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="bg-[#1E1E1E] md:py-[135px] py-[80px] px-5">
      <div className="w-full max-w-[1320px] mx-auto">
        <h4 className="fade-up text-white text-center md:text-[80px] text-[40px] font-bold md:tracking-[0.4em]">
          さぁ、準備しよう
        </h4>
        <p className="fade-up text-white text-center md:text-[24px] text-[14px] font-bold tracking-widest mt-2">
          NFT名刺作成に必要な材料を用意
        </p>
        <div className="fade-up grid max-md:max-w-[400px] max-md:mx-auto md:grid-cols-3 mt-10 md:mt-28 gap-5 md:gap-[30px]">
          <div className="bg-white rounded-[40px] lg:p-10 p-5">
            <figure>
              <img
                className="max-md:w-[90px]"
                src="/images/ready-01.png"
                alt=""
              />
            </figure>
            <h6 className="lg:text-[32px] md:text-[22px] text-[18px] font-bold mt-2 md:mt-3">
              デジタル素材
            </h6>
            <p className="md:text-[18px] text-[13px] font-medium leading-[1.4] tracking-[0.2em] md:mt-3 mt-2">
              NFT名刺の顔とも言える場所に設定する素材です。既存の名刺に使用しているデザインをそのまま利用するユーザーが多いです。
            </p>
            <p className="md:text-[16px] text-[12px] text-[#999999] md:mt-4 mt-3 tracking-[0.2em]">
              ※画像は200x200px以上(容量10Mまで)のjpg、pngが登録可能です。
            </p>
          </div>
          <div className="bg-white rounded-[40px] lg:p-10 p-5">
            <figure>
              <img
                className="max-md:w-[90px]"
                src="/images/ready-02.png"
                alt=""
              />
            </figure>
            <h6 className="lg:text-[32px] md:text-[22px] text-[18px] font-bold mt-2 md:mt-3">
              アプリ「DIVER Biz （ダイバービズ）」のNFT名刺受取アドレス
            </h6>
            <p className="md:text-[16px] text-[12px] text-[#999999] md:mt-4 mt-3 tracking-[0.2em]">
              ※アプリの初期設定が完了後に最初に表示されます。
            </p>
          </div>
          <div className="bg-white rounded-[40px] lg:p-10 p-5">
            <figure>
              <img
                className="max-md:w-[90px]"
                src="/images/ready-03.png"
                alt=""
              />
            </figure>
            <h6 className="lg:text-[32px] md:text-[22px] text-[18px] font-bold mt-2 md:mt-3">
              名刺情報
            </h6>
            <p className="md:text-[18px] text-[13px] font-medium leading-[1.4] tracking-[0.2em] md:mt-3 mt-2">
              名前/名前のふりがな/会社名/部署・役職/郵便番号/住所/電話番号/携帯番号/メールアドレス/営業時間/ウェブサイトリンク/SNSリンク/事業内容/業務内容/その他
            </p>
            <p className="md:text-[16px] text-[12px] text-[#999999] md:mt-4 mt-3 tracking-[0.2em]">
              ※任意の情報もすべて入力されることを推奨しています。
            </p>
          </div>
        </div>
        <div className="fade-up flex justify-center mt-10 md:mt-14">
          <a
            className="flex items-center justify-center md:w-[360px] w-[200px] h-[44px] md:h-[80px] rounded-[50px] bg-[#7FFF00] md:text-[24px] text-[15px] font-black text-[#000] outline-1 outline outline-[#000] md:outline-offset-[-5px] outline-offset-[-3px] [box-shadow:0px_0px_30px_0px_rgba(127,_255,_0,_0.30)] gap-2 tracking-[0.15em] md:tracking-[0.3em] duration-300 hover:opacity-75"
            href="/form"
          >
            <span>今すぐGET</span>
            <svg
              className="max-md:w-5"
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="12"
              viewBox="0 0 37 12"
              fill="none"
            >
              <path
                d="M1 10.1543H35.7254M28 1.84563L35.9791 9.82522"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ready;
