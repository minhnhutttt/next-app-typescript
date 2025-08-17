const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 flex items-center justify-between md:px-10 px-5 z-20 h-20 md:h-[130px]">
      <a href="/" className="">
        <img className="max-md:w-[150px]" src="/assets/images/logo.svg" alt="" />
      </a>
      <div className="">
        <a
          href="/assets/pdf/TEX Coin (TEXC) Whitepaper.pdf"
          target="_blank"
          className="md:text-[18px] text-[14px] flex items-center justify-center w-[160px] md:w-[220px] h-[50px] rounded-[10px] u-gradient-01 p-px"
        >
          <span className="w-full h-full bg-[#010101] rounded-[10px] flex items-center justify-center tracking-widest">
          WHITEPAPER
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
