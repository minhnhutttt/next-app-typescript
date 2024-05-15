export default function Footer() {
    return (
      <footer className="bg-black">
        <div className=" px-5 bg-[url('/assets/images/bg-footer.png')] bg-cover">
            <div className="w-full max-w-[1200px] mx-auto flex py-6 md:py-[34px]">
                <div className="flex md:px-[54px] px-5 py-16">
                    <a href="/" className="">
                        <img className="max-md:max-w-[100px]" src="/assets/images/logo-footer.png" alt="Ippuku" />
                    </a>
                </div>
                <div className="border-l border-white/60 max-md:pl-8 md:px-[30px] md:h-[530px]">
                    <ul className="md:text-[18px] text-[14px] text-white/60 font-semibold flex flex-col md:gap-12 gap-8 py-10">
                        <li>
                            <a href="/" className="block">至福の干し芋</a>
                        </li>
                        <li>
                            <a href="/" className="block">柿の葉茶</a>
                        </li>
                        <li>
                            <a href="/" className="block">まるごと干し林檎</a>
                        </li>
                        <li>
                            <a href="/" className="block">まるごとドライキウイ</a>
                        </li>
                        <li>
                            <a href="/" className="block">まるごと干し柿</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="border-t border-white h-[120px] md:h-[370px] flex items-end justify-center md:pb-[51px] pb-8 px-5">
            <div className="w-full max-w-[1020px]"><p className="text-right font-['Inter'] md:text-[20px] text-[14px] text-white/60">©︎ 2024 Copy Rights ippuku All Reserve.</p></div>
        </div>
      </footer>
    );
  }
  