'use client';

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-40 flex h-25 w-full items-center justify-between gap-5 overflow-hidden px-5 md:h-[120px] md:px-10">
      <a href="/" className="block">
        <img className="max-md:max-w-[140px]" src="/assets/images/logo.svg" alt="" />
      </a>

      <div className="">
        <button className="cybr-btn font-tomorrow flex h-12 w-[160px] items-center justify-center gap-1 text-[15px] font-semibold text-black md:h-16 md:w-[248px] md:text-[18px] md:tracking-[0.2em]">
          Official LINE{' '}
          <span className="">
            <img src="/assets/images/ic-arrow.svg" alt="" />
          </span>
          <span className="cybr-btn__glitch flex items-center justify-center">Official LINE</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
