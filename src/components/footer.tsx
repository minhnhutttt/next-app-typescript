"use client"

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(90deg,_rgba(255,_117,_195,_1)_0%,_rgba(255,_166,_71,_1)_20%,_rgba(255,_232,_63,_1)_40%,_rgba(159,_255,_91,_1)_60%,_rgba(112,_226,_255,_1)_80%,_rgba(205,_147,_255,_1)_100%)] pt-5">
        <div className="bg-[#181818] md:pt-[103px] pt-20 pb-5">
        <div className="w-full max-w-[864px] mx-auto md:mb-[60px] mb-16">
            <div className="flex justify-center max-md:flex-col items-center gap-10 md:gap-[60px]">
                <a href="/" className="hover:opacity-75 duration-150">
                    <img className="max-lg:w-[140px]" src="/assets/images/logo.png" alt="" />
                </a>
                <ul className="flex flex-col font-extrabold text-[16px] text-white gap-[30px]">
                    <li>
                        <a href="/#faq" className="block duration-150 hover:opacity-75">FAQ</a>
                    </li>
                    <li>
                        <a href="/company" className="block duration-150 hover:opacity-75">運営会社</a>
                    </li>
                    <li>
                        <a href="/privacy-policy" className="block duration-150 hover:opacity-75">プライバシーポリシー</a>
                    </li>
                </ul>
            </div>
        </div>
        <p className="text-center text-[14px] text-white font-normal">Copyright © アイドルクエスト</p>
        </div>
    </footer>
  );
};

export default Footer;
