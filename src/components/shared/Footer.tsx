import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#353535] px-5 pt-10 pb-20 text-white md:pt-[62px] md:pb-36">
      <div className="mx-auto w-full max-w-[1240px]">
        <div>
          <Link href="/" className="text-[28px] font-bold text-white md:text-[48px]">
            AIS Japan
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 gap-y-10 md:mt-16 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          <div>
            <p className="mb-6 text-[24px] font-semibold md:mb-9 md:text-[32px]">企業情報</p>
            <ul className="space-y-2 text-[14px] font-semibold md:space-y-3 md:text-[20px]">
              <li>
                <Link href="/">会社概要</Link>
              </li>
              <li>
                <Link href="/">コーポレートメッセージ</Link>
              </li>
              <li>
                <Link href="/">ミッション・ビジョン</Link>
              </li>
              <li>
                <Link href="/">AIS Holdings Group</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-6 text-[24px] font-semibold md:mb-9 md:text-[32px]">事業内容</p>
            <ul className="space-y-2 text-[14px] font-semibold md:space-y-3 md:text-[20px]">
              <li>
                <Link href="/">事業概要</Link>
              </li>
              <li>
                <Link href="/">SEIKAI</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-6 text-[24px] font-semibold md:mb-9 md:text-[32px]">プロダクト</p>
            <ul className="space-y-2 text-[14px] font-semibold md:space-y-3 md:text-[20px]">
              <li>
                <Link href="/">サービス概要</Link>
              </li>
              <li>
                <Link href="/">対応プラットフォーム</Link>
              </li>
              <li>
                <Link href="/">特長・強み</Link>
              </li>
              <li>
                <Link href="/">導入事例</Link>
              </li>
              <li>
                <Link href="/">料金・導入の流れ</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-6 text-[24px] font-semibold md:mb-9 md:text-[32px]">お問い合わせ</p>
            <ul className="space-y-2 text-[14px] font-semibold md:space-y-3 md:text-[20px]">
              <li>
                <Link href="/">SEIKAI導入相談</Link>
              </li>
              <li>
                <Link href="/">一般問い合わせ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 md:mt-35">
          <ul className="space-y-2 text-[14px] font-semibold md:space-y-3 md:text-[20px]">
            <li>
              <Link href="/">プライバシーポリシー</Link>
            </li>
            <li>
              <Link href="/">利用規約</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
