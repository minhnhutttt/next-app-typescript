
const Header = () => {
  return (
    <header className="absolute top-0 inset-x-0 w-full flex items-center px-5 md:px-10 z-50">
      <div className="w-full flex items-center justify-between h-20 md:h-[120px] gap-5">
        <div className="flex items-center">
          <a href="/" className="block relative duration-150 hover:opacity-75">
            <img className="max-md:w-[200px]" src="/assets/images/logo.svg" alt="BGT Coin" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
