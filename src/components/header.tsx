export default function Header() {
  return (
    <header className="p-5 md:p-[30px] flex items-center justify-between bg-[#0D0A8E] gap-5">
      <a href="/" className="">
        <img src="/assets/images/logo.png" alt="デジタルドキュメント生産ロボ" />
      </a>
      <a href="/" className="">
        <img src="/assets/images/btn-line.png" alt="LINEでお問い合わせ" />
      </a>
    </header>
  );
}
