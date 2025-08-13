const Header = () => {
  return (
      <header className="absolute left-7 top-3 flex items-start z-50">
            <a href="/" className="relative block duration-150 hover:opacity-75">
            <img
                className="max-md:w-[120px]"
                src="/assets/images/logo.svg"
                alt=""
            />
            </a>
        </header>
    )
}

export default Header
