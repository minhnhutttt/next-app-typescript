const Header = () => {
  return (
    <header className="relative h-20 md:h-[100px] flex items-center justify-between">
      <div className="w-full mx-auto flex items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-1 md:gap-2.5 max-md:flex-col">
          <a href="/" className="max-md:w-[120px]">
            <img src="/assets/images/logo.png" alt="" />
          </a>
          <span className="text-black text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] inline-block">
            Unique Data Mining
          </span>
        </div>
        <a
          href="/"
          className="w-[160px] md:w-[280px] md:h-[60px] h-12 flex items-center justify-center bg-gradient-to-r from-[#10E188] to-[#05BAEA] text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105 gap-1.5 md;gap-2.5"
        >
          <img className="max-md:w-5" src="/assets/images/ic_line.svg" alt="" />
          <span className="text-[14px] md:text-[20px]">お問い合わせ</span>
          <img src="/assets/images/ic_arrow-right.svg" alt="" className="absolute right-[5px] max-md:w-5" />
        </a>
      </div>
    </header>
  );
};

export default Header;
