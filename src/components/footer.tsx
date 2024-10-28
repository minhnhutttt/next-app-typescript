import LineButton from "./lineButton";

const Footer = () => {
    return (
      <>
      <footer className="bg-black md:pt-[66px] pt-10 pb-[180px] xl:pb-6">
        <div className="flex justify-center gap-5 md:mb-14 mb-8">
            <a href="https://x.com/17_gold_partner" target="_blank"><img src="/assets/images/socical-x.png" alt="" /></a>
            <a href="https://line.me/R/ti/p/%40300kbcvu" target="_blank"><img src="/assets/images/socical-line.png" alt="" /></a>
            <a href="https://www.instagram.com/goodfellows_17/" target="_blank"><img src="/assets/images/socical-instagram.png" alt="" /></a>
        </div>
          <div className="flex justify-center">
              <a href="/" className="hover:opacity-75 duration-150">
                  <img src="/assets/images/logo-footer.svg" alt="" />
              </a>
          </div>
          <div className="flex justify-center md:text-[18px] text-[15px] text-white py-16 gap-10">
              <a href="/company" className="hover:opacity-75 duration-150">企業情報</a>
              <a href="/privacy-policy" className="hover:opacity-75 duration-150">プライバシーポリシー</a>
          </div>
          <p className="text-center md:text-[16px] text-[14px] text-white font-light">© 2024 Good Fellows Co. All rights reserved.</p>
      </footer>
      <div className="fixed bottom-0 left-0 w-full px-2 xl:hidden">
        <LineButton />
      </div>
      </>
    );
  };
  
  export default Footer;
  