const Header = () => {

  return (
    <header className="flex items-center absolute z-[99] left-5 md:left-14 top-5 md:top-12 gap-8">
      <a href="/" className="block">
        <img className="max-md:w-[140px]" src="/assets/images/logo.svg" alt="" />
      </a>
      <h1 className=""><img className="max-md:w-[110px]" src="/assets/images/recruiting-site.svg" alt="RECRUITING SITE" /></h1>
    </header>
  );
};

export default Header;
