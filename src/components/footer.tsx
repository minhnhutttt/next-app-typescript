const Footer = () => {

  return (
    <footer className="bg-[#E0DDCF]">
        <div className="bg-[#363636]/[0.5]">
            <div className="bg-[#363636]/[0.5] xl:px-[84px] px-5 pb-5">
            <div className="w-full max-w-[1100px] mx-auto flex max-lg:flex-col max-lg:items-center p-5 md:p-10">
                <div className="flex items-center">
                    <a href="/" className="duration-300 hover:opacity-75 max-md:w-[120px]">
                        <img src="/assets/images/logo.png" alt="" />
                    </a>
                    <div className="text-white md:text-[26px] text-[15px] font-hiragino font-semibold md:ml-[52px] ml-[24px]">
                        2個相当/1パック <br />
                        ¥1,180〜
                    </div>
                </div>
                <div className="flex-1 max-lg:w-full max-lg:flex max-lg:justify-center max-lg:mt-10 md:ml-[38px]">
                    <a href="https://kanmi.ippuku.store/products/%E3%81%BE%E3%82%8B%E3%81%94%E3%81%A8%E3%83%89%E3%83%A9%E3%82%A4%E3%82%AD%E3%82%A6%E3%82%A4-2%E5%80%8B-%E2%9C%96-1%E8%A2%8B" target="_blank" className="relative w-full md:max-w-[590px] max-w-[360px] h-16 md:h-[114px] bg-[#FF0E0E] flex justify-center items-center font-hiragino font-semibold md:text-[28px] text-[16px] text-white duration-300 hover:opacity-75">
                        <svg className="absolute left-4 max-md:w-5 md:left-7" xmlns="http://www.w3.org/2000/svg" width="33" height="41" viewBox="0 0 33 41" fill="none">
                            <path d="M33 20.5L0.75 40.8516V0.148403L33 20.5Z" fill="white"/>
                        </svg>
                        <span>まるごとドライキウイを購入する</span>
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-end w-full max-w-[1334px] mx-auto md:gap-x-[12%] gap-x-10 gap-y-7 max-xl:flex-col max-md:mt-3">
                <div className="flex items-center justify-center md:justify-end xl:gap-x-[20%] gap-x-10 gap-y-7 flex-1 max-md:flex-wrap">
                    <a href="https://kanmi.ippuku.store/pages/%E7%89%B9%E5%AE%9A%E5%95%86%E5%93%81%E5%8F%96%E5%BC%95%E6%B3%95%E3%81%AB%E3%82%88%E3%82%8B%E8%A1%A8%E8%A8%98" target="_blank" className="md:text-[20px] text-[16px] text-white duration-300 hover:opacity-70">特定商取引法に基づく表記</a>
                    <a href="https://kanmi.ippuku.store/pages/%E3%83%97%E3%83%A9%E3%82%A4%E3%83%90%E3%82%B7%E3%83%BC%E3%83%9D%E3%83%AA%E3%82%B7%E3%83%BC" target="_blank" className="md:text-[20px] text-[16px] text-white duration-300 hover:opacity-70">プライバシーポリシー</a>
                </div>
                <p className="md:text-[20px] text-[12px] text-white text-right">©︎ 2024 Copy Rights ippuku All Reserve.</p>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
