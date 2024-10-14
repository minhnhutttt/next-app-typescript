
const Footer = () => {
    return (
      <footer className="relative px-5 md:px-10 bg-[#111111] md:py-5 py-8 z-10">
          <div className="w-full max-w-[1440px] mx-auto">
            <a href="/" className="flex">
              <img className="max-md:w-[60%]" src="/assets/images/logo-footer.png" alt="" />
            </a>
            <div className="md:text-[22px] text-[15px] text-white/80 md:ml-[70px] mt-4">
            <p>雪だるま式に積み上がる広告費とデータ。</p>
              <p className="ml-5">広告を正解にするのは売上。</p>
                    <p className="ml-10 md:ml-14">売上のそばにあるデータから改善しよう。</p>
            </div>
            <div className="flex items-end md:justify-between md:ml-[70px] mt-28 md:mt-[165px] gap-10 max-md:flex-col-reverse">
              <ul className="md:text-[19px] text-[15px] font-medium text-white/80 flex gap-10">
                <li><a href="/" className="block p-4">利用規約</a></li>
                <li><a href="/" className="block p-4">プライバシーポリシー</a></li>
              </ul>
              <div className="flex-1 max-md:flex max-md:justify-end">
                <img className="max-md:w-[50%]" src="/assets/images/seikai-footer.svg" alt="" />
              </div>
            </div>
          </div>
      </footer>
    );
  };
  
  export default Footer;
  