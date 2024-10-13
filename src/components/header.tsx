"use client"

const Header = () => {
  return (
    <header className="bg-white border-b-black border-b-4 flex justify-between items-center pr-5 h-20 absolute top-0 left-0 right-0">
     <a href="/" className="block">
        <img className="md:w-auto w-2/3" src="/assets/images/logo.svg" alt="" />
     </a>
     <a href="/" className="flex items-center font-bold md:text-[18px] text-[14px] relative md:px-7 px-2 tracking-widest">
     <span className="w-[8px] h-full absolute left-0 top-0 border border-black border-r-0"></span>
     WHITEPAPER
     <span className="w-[8px] h-full absolute right-0 top-0 border border-black border-l-0"></span>
     </a>
    </header>
  );
};

export default Header;
