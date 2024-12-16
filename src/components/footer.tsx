import ButtonLine from "./buttonLine";

const Footer = () => {
    return (
      <footer className="relative px-5 md:px-10 bg-[#060607] md:pt-[152px] pt-20 pb-5">
          <div className="flex items-center justify-center lg:gap-[200px] md:gap-[100px] max-md:flex-col gap-10 md:mb-[105px] mb-16">
            <a href="/" className="flex"><img className="max-md:w-[200px]" src="/assets/images/logo-footer.svg" alt="" /></a>
            <div className="max-md:flex max-md:flex-col max-md:items-center">
              <ButtonLine />
              <ul className="flex md:text-[18px] text-[14px] md:gap-[46px] gap-7 md:mt-10 mt-7 text-white font-bold max-lg:flex-col max-md:flex-row">
                <li>
                  <a href="/company">運営会社</a>
                </li>
                <li>
                  <a href="/terms-of-service">利用規約</a>
                </li>
                <li>
                  <a href="/privacy-policy">プライバシーポリシー</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-[13px] text-white font-medium">Copyright © 2024 COIN TOGETHER.</p>
      </footer>
    );
  };
  
  export default Footer;
  