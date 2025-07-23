const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 flex items-center justify-between md:p-12 p-8 z-20">
      <div className="text-[#fff] flex items-center gap-8 max-md:flex-col max-md:items-start max-md:gap-4">
        <a href="/">
          <img src="/assets/img/logo.svg" alt="p2p bonus" />
        </a>
        <h1>隠れた価値を発見。</h1>
      </div>
      <a
        href="/"
        className="bg-[#f63c4c] text-[#fff] flex items-center gap-4 rounded-[10rem] px-12 py-[1.3rem] text-[2rem] tracking-wider relative max-md:hidden"
      >
        <img className="w-12" src="/assets/img/ico_line.svg" alt="line" />
        <p>お問い合わせ</p>
        <img className="w-4 ml-6" src="/assets/img/arw-1.svg" alt="arrow" />
      </a>
    </header>
  );
};

export default Header;
