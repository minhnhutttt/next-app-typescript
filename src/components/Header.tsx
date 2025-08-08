'use client'

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 flex items-center justify-between h-20 md:h-[110px] md:px-[60px] px-5 z-50">
      <a href="/">
        <img className="w-[168px]" src="/assets/images/logo.svg" alt="Storage Coin" />
      </a>
    </header>
  )
}

export default Header;