
const Footer = () => {
    return (
      <footer className="px-5 pb-5">
        <div className="w-full md:max-w-[1167px] max-w-[450px] max-md:px-6 mx-auto">
          <div className="flex max-md:justify-center">
            <a href="/" className="block">
              <img className="max-md:w-[143px]" src="/assets/images/logo.svg" alt="" />
            </a>
          </div>
          <div className="flex justify-between max-md:flex-wrap md:text-[20px] text-[18px] font-bold my-[35px] md:my-[60px] gap-[35px] md:gap-5 [&_a:hover]:opacity-70 [&_a]:duration-300">
            <ul className="space-y-5">
              <li><a href="/">AIコンシェルジュ</a></li>
              <li><a href="/">プロダクト検索</a></li>
              <li><a href="/">サービスについて</a></li>
              <li><a href="/">よくある質問</a></li>
              <li><a href="/inquiry">お問い合わせ</a></li>
            </ul>

            <ul className="space-y-5">
              <li><a href="/">メーカー様へ</a></li>
              <li><a href="/">メーカーログイン</a></li>
              <li><a href="/">バイヤー様へ</a></li>
              <li><a href="/">バイヤー会員登録</a></li>
              <li><a href="/">バイヤーログイン</a></li>
            </ul>

            <ul className="space-y-5">
              <li><a href="/">利用規約</a></li>
              <li><a href="/">プライバシーポリシー</a></li>
              <li><a href="/">運営会社</a></li>
              <li><a href="/">試食BAR アサクサ</a></li>
            </ul>
          </div>
          <p className="text-center md:text-[20px] text-[18px]">©2025　株式会社ジャポリス</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  