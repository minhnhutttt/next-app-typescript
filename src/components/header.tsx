'use client'

const Header = () => {
  return (
    <header className="absolute z-50 flex w-full items-center border-b border-[#777] bg-white/20">
      <div className="flex h-20 w-full items-center justify-between pr-5">
        <div className="flex items-center">
          <a href="/" className="relative block duration-150 hover:opacity-75">
            <img
              className="max-md:w-[210px]"
              src="/assets/images/logo.svg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a
            href="/whitepaper"
            className="text-[16px] font-semibold leading-none tracking-wide md:text-[18px]"
          >
            WHITEPAPER
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
