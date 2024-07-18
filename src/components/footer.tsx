"use client"

const Footer = () => {
  return (
    <footer className="px-5 md:px-10 bg-[#252525] md:pt-[170px] pt-16 pb-5">
        <div className="w-full max-w-[864px] mx-auto md:mb-[120px] mb-20">
            <div className="flex justify-between max-md:flex-col max-md:items-center gap-10 md:gap-5">
                <a href="/" className="hover:opacity-75 duration-150">
                    <img className="max-lg:w-[200px]" src="/assets/images/logo-footer.png" alt="" />
                </a>
                <ul className="flex flex-col font-extrabold text-[16px] text-white gap-[30px]">
                    <li>
                        <a href="/#faq" className="block duration-150 hover:opacity-75">FAQ</a>
                    </li>
                    <li>
                        <a href="/privacy-policy" className="block duration-150 hover:opacity-75">プライバシーポリシー</a>
                    </li>
                </ul>
                <div className="">
                  <a href="http://" target="_blank" rel="noopener noreferrer" className="block duration-150 hover:opacity-75"><img src="/assets/images/btn-line.png" alt="" /></a>
                </div>
            </div>
        </div>
        <p className="text-center text-[14px] text-white font-lato">Copyright © 次世代NFT</p>
    </footer>
  );
};

export default Footer;
