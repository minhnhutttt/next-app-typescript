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
                            <a href="https://kanmi.ippuku.store/collections/shikounohosiimo" className="block duration-200 hover:opacity-70" target="_blank">至福の干し芋</a>
                        </li>
                        <li>
                            <a href="https://kanmi.ippuku.store/collections/%E6%9F%BF%E3%81%AE%E8%91%89%E8%8C%B6/%E6%9F%BF%E3%81%AE%E8%91%89%E8%8C%B6" className="block duration-200 hover:opacity-70" target="_blank">柿の葉茶</a>
                        </li>
                        <li>
                            <a href="https://kanmi.ippuku.store/collections/%E3%81%BE%E3%82%8B%E3%81%94%E3%81%A8%E5%B9%B2%E3%81%97%E6%9E%9C%E5%AE%9F" className="block duration-200 hover:opacity-70" target="_blank">まるごと干し林檎</a>
                        </li>
                        <li>
                            <a href="https://kanmi.ippuku.store/collections/%E3%81%BE%E3%82%8B%E3%81%94%E3%81%A8%E5%B9%B2%E3%81%97%E6%9E%9C%E5%AE%9F" className="block duration-200 hover:opacity-70" target="_blank">まるごとドライキウイ</a>
                        </li>
                        <li>
                            <a href="https://kanmi.ippuku.store/collections/%E4%B8%80%E7%A6%8F%E7%B1%B3" className="block duration-200 hover:opacity-70" target="_blank">一福米</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="border-t border-white max-md:py-10 md:h-[370px] flex items-end justify-center md:pb-[51px] pb-8 px-5">
            <div className="w-full max-w-[1280px] flex justify-between items-center gap-5 max-md:flex-col text-white">
                <a href="https://kanmi.ippuku.store/pages/%E7%89%B9%E5%AE%9A%E5%95%86%E5%93%81%E5%8F%96%E5%BC%95%E6%B3%95%E3%81%AB%E3%82%88%E3%82%8B%E8%A1%A8%E8%A8%98" className="font-['Inter'] md:text-[20px] text-[14px] duration-200 hover:opacity-70" target="_blank">特定商取引法に基づく表記</a>
                <a href="https://kanmi.ippuku.store/pages/%E3%83%97%E3%83%A9%E3%82%A4%E3%83%90%E3%82%B7%E3%83%BC%E3%83%9D%E3%83%AA%E3%82%B7%E3%83%BC" className="font-['Inter'] md:text-[20px] text-[14px] duration-200 hover:opacity-70" target="_blank">プライバシーポリシー</a>
                <p className="font-['Inter'] md:text-[20px] text-[14px]">©︎ 2024 Copy Rights ippuku All Reserve.</p>
            </div>
        </div>
      </footer>
    );
  }
  