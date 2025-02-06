"use client";

const Footer = () => {
  return (
    <footer className="bg-[#DDDDDD] md:py-[136px] py-20 px-5">
      <div className="flex max-md:flex-col justify-center items-center w-full max-w-[1200px] mx-auto">
        <div className="py-5 xl:pr-20 md:pr-10">
          <a href="/" className="hover:opacity-75 duration-150 block">
            <img
              className="max-md:w-[200px]"
              src="/assets/images/logo.svg"
              alt=""
            />
          </a>
          <div className="flex md:text-[22px] text-[18px] font-inter font-bold gap-9 md:mt-[60px] mt-8 md:mb-9 mb-5">
            <a href="/" className="block hover:opacity-75 duration-150">CORPRATE SITE</a>
            <a href="/" className="block hover:opacity-75 duration-150">PRIVACY POLICY</a>
          </div>
          <p className="md:text-[16px] text-[14px] max-md:hidden">Copyright © ROGYX co,Ltd All Rights Reserved.</p>
        </div>
        <div className="flex justify-center flex-wrap flex-1 py-5 gap-5 md:border-l border-black">
          <div className="flex lg:flex-1 justify-center">
            <ul className="md:text-[25px] text-[20px] font-medium md:pr-9 space-y-1 px-4">
              <li>
                <a href="/#" className="block hover:opacity-75 duration-150">
                特徴
                </a>
              </li>
              <li>
                <a href="/#" className="block hover:opacity-75 duration-150">
                考え方
                </a>
              </li>
              <li>
                <a href="/#" className="block hover:opacity-75 duration-150">
                こんな会社
                </a>
              </li>
              <li>
                <a href="/#" className="block hover:opacity-75 duration-150">
                働き方
                </a>
              </li>
              <li>
                <a href="/#" className="block hover:opacity-75 duration-150">
                求める人材
                </a>
              </li>
            </ul>
          </div>
          <div className="md:space-y-8 space-y-5">
            <a href="/" className="md:w-[280px] md:h-[70px] w-[220px] h-[55px] md:text-[18px] text-[16px] flex items-center justify-center bg-[#00B900] rounded-[23px] text-white font-lalezar hover:opacity-75 duration-150">
            LINEで話す
            </a>
            <a href="/" className="md:w-[280px] md:h-[70px] w-[220px] h-[55px] md:text-[18px] text-[16px] flex items-center justify-center bg-[#00D4FF] rounded-[23px] text-white font-lalezar hover:opacity-75 duration-150">
            今すぐ応募する
            </a>
          </div>
        </div>
      </div>

      <p className="md:text-[16px] text-[14px] md:hidden text-center mt-5">Copyright © ROGYX co,Ltd All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
