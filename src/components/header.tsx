const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-[99] flex h-[86px] items-center justify-between gap-2 bg-white px-4 py-2 max-md:flex-wrap md:h-[66px] md:gap-4">
      <div className="flex-1">
        <a href="/" className="duration-150 hover:opacity-75">
          <img
            className="max-md:w-[120px]"
            src="/assets/images/logo.png"
            alt="MARKK"
          />
        </a>
      </div>
      <p className="text-center text-[12px] max-md:order-3 max-md:w-full max-md:pb-1 md:text-[1.389vw] dt:text-[20px]">
        当ページの文章全体の70％は、AIを活用して作成されています
      </p>
      <div className="flex flex-1 items-end justify-end gap-2 max-md:flex-col-reverse md:items-center md:gap-10">
        <div className="">
          <a
            href="/#contact"
            className="flex h-10 w-[170px] items-center justify-center rounded-[25px] bg-[url('/assets/images/bg-btn.png')] text-[13px] font-bold text-white md:h-[51px] md:w-[224px] md:text-[17px]"
          >
            資料請求・お問い合わせ
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
