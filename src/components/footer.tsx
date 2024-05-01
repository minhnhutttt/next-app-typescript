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
                    <a href="https://kanmi.ippuku.store/" target="_blank" className="relative w-full md:max-w-[590px] max-w-[360px] h-16 md:h-[114px] bg-[#FF0E0E] flex justify-center items-center font-hiragino font-semibold md:text-[28px] text-[16px] text-white duration-300 hover:opacity-75">
                        <svg className="absolute left-4 max-md:w-5 md:left-7" xmlns="http://www.w3.org/2000/svg" width="33" height="41" viewBox="0 0 33 41" fill="none">
                            <path d="M33 20.5L0.75 40.8516V0.148403L33 20.5Z" fill="white"/>
                        </svg>
                        <span>まるごと干し林檎を購入する</span>
                    </a>
                </div>
            </div>
            <p className="md:text-[20px] text-[12px] text-white text-right">©︎ 2024 Copy Rights ippuku All Reserve.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
