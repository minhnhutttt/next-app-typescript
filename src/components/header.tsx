const Header = () => {

  return (
    <header className="flex items-center absolute z-[99] left-3 md:left-8 top-5 md:top-12 gap-8">
      <a href="/" className="block hover:opacity-75 duration-150">
        <img className="max-md:w-[23px]" src="/assets/images/logo.svg" alt="" />
      </a>
    </header>
  );
};

export default Header;
