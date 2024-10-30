"use client";

const Footer = () => {
  return (
    <footer className="bg-black md:pt-[138px] pt-[60px] pb-[23px]">
      <div className="max-w-[800px] w-full md:pl-[13px] md:pr-[40px] gap-20 px-3 mx-auto text-white md:flex justify-between items-center mb-[40px] md:mb-[101px] max-md:text-center">
        <a href="/" className="md:text-[32px] text-[24px] font-extrabold tracking-widest whitespace-nowrap">
          福利厚生クエスト
        </a>
        <ul className="flex items-center max-md:justify-between max-md:mt-3 flex-wrap gap-8">
          <li className="">
            <a href="/#faq" className="md:text-[18px] text-[16px]">
              よくある質問
            </a>
          </li>
          <li className="">
            <a
              href="https://lin.ee/9TgYyex"
              target="_blank"
              className="md:text-[18px] text-[16px] flex justify-center items-center"
            >
              <span>
                <img src="/assets/images/ic-line-green.png" alt="" />
              </span>
              お問い合わせ
            </a>
          </li>
          
          <li className="md:mr-[46px] mr-[0px]">
            <a href="/company" className="md:text-[18px] text-[16px]">
              運営会社 
            </a>
          </li>
          <li className="md:mr-[46px] mr-[0px]">
            <a href="/privacy-policy" className="md:text-[18px] text-[16px]">
            プライバシーポリシー 
            </a>
          </li>
        </ul>
      </div>
      <p className="md:text-[14px] text-[12px] text-white font-notoSerif text-center font-light">
        Copyright © 福利厚生クエスト
      </p>
    </footer>
  );
};

export default Footer;
