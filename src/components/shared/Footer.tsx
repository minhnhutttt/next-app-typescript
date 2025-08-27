const Footer = () => {
  return (
    <footer className="bg-[#353535] px-5 pt-10 pb-20 text-white md:pt-[62px] md:pb-36">
      <div className="mx-auto w-full max-w-[1240px]">
        <div>
          <a href="/" className="text-[28px] font-bold text-white md:text-[48px]">
            AIS Japan
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 gap-y-10 md:mt-16 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          <div>
            <a
              href="/about"
              className="mb-6 block text-[24px] font-semibold md:mb-9 md:text-[32px]"
            >
              企業情報
            </a>
            <ul className="space-y-2 text-[14px] font-semibold md:space-y-3 md:text-[20px]">
              <li>
                <a href="/about/#company-profile">会社概要</a>
              </li>
              <li>
                <a href="/about/#corporate-message">コーポレートメッセージ</a>
              </li>
              <li>
                <a href="/about/#mission-vision">ミッション・ビジョン</a>
              </li>
              <li>
                <a href="/about/#about-ais-holdings-group">AIS Holdings Group inc.</a>
              </li>
            </ul>
          </div>
          <div>
            <a
              href="/business"
              className="mb-6 block text-[24px] font-semibold md:mb-9 md:text-[32px]"
            >
              事業内容
            </a>
            <ul className="space-y-2 text-[14px] font-semibold md:space-y-3 md:text-[20px]">
              <li>
                <a href="/business/#business">事業概要</a>
              </li>
              <li>
                <a href="/business/#ai">SEIKAI</a>
              </li>
            </ul>
          </div>
          <div>
            <a
              href="/product"
              className="mb-6 block text-[24px] font-semibold md:mb-9 md:text-[32px]"
            >
              プロダクト
            </a>
            <ul className="space-y-2 text-[14px] font-semibold md:space-y-3 md:text-[20px]">
              <li>
                <a href="/product">SEIKAI概要</a>
              </li>
              <li>
                <a href="/product/#platforms">対応プラットフォーム</a>
              </li>
              <li>
                <a href="/product/#features">特長・強み</a>
              </li>
              <li>
                <a href="/product/#case">導入事例</a>
              </li>
              <li>
                <a href="/product/#price">料金・導入の流れ</a>
              </li>
            </ul>
          </div>
          <div>
            <a
              href="/contact"
              className="mb-6 block text-[24px] font-semibold md:mb-9 md:text-[32px]"
            >
              お問い合わせ
            </a>
          </div>
        </div>
        <div className="mt-20 md:mt-35">
          <ul className="space-y-2 text-[14px] font-semibold md:space-y-3 md:text-[20px]">
            <li>
              <a href="/privacy-policy">プライバシーポリシー</a>
            </li>
            <li>
              <a href="/terms-of-service">利用規約</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
