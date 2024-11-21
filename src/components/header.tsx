const Header = () => {
  return (
    <header className="w-full flex items-center bg-[#000A23] px-10 z-50">
      <div className="w-full flex items-center justify-between h-[90px]">
        <div className="flex items-center">
          <a href="/" className="block relative duration-150 hover:opacity-75">
            <img className="max-md:w-[170px]" src="/assets/images/logo.svg" alt="" />
          </a>
        </div>
        <div className="">
          <a href="/" className="w-[193px] h-11 flex items-center justify-center rounded-[5px] md:text-[16px] text-[14px] font-bold leading-none tracking-wide bg-[#FFCD00]">WHITEPAPER</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
