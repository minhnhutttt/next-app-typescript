const Header = () => {

  return (
    <header className="px-4 bg-white flex items-center justify-between md:h-[66px] h-[86px] py-2 md:gap-4 gap-2 max-md:flex-wrap sticky inset-x-0 top-0 z-[99]">
      <div className="flex-1">
        <a href="/" className="duration-150 hover:opacity-75">
          <img className="max-md:w-[120px]" src="/assets/images/logo.png" alt="MARKK" />
        </a>
      </div>
      <p className="dt:text-[20px] md:text-[1.389vw] text-[12px] text-center max-md:order-3 max-md:w-full max-md:pb-1">当ページの文章全体の70％は、AIを活用して作成されています</p>
      <div className="flex items-end md:items-center justify-end gap-2 md:gap-10 max-md:flex-col-reverse flex-1">
          <div className="">
            <a href="/" className="w-[170px] md:w-[224px] h-10 md:h-[51px] flex items-center justify-center rounded-[25px] bg-[url('/assets/images/bg-btn.png')] text-white md:text-[17px] text-[13px] font-bold">
              資料請求・お問い合わせ
            </a>
          </div>
        </div>
    </header>
  )
}

export default Header
