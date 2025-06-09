"use client";

const Header = () => {
  return (
    <header className="flex justify-between items-center md:h-[100px] h-20 px-5 md:px-10 z-[99] bg-black">
      <a href="/" className="block">
        <img
          className=" max-md:hidden"
          src="/assets/images/logo.svg"
          alt=""
        />
        <img
          className="max-md:w-[100px] md:hidden"
          src="/assets/images/logo3.svg"
          alt=""
        />
      </a>
      <div className="">
        <a
          href="/"
          className="flex items-center justify-center relative text-[15px] md:text-[20px] px-5 text-white tracking-widest md:w-[280px] h-12 md:h-[60px] bg-[linear-gradient(49deg,_#012200_2.87%,_#00320D_24.24%,_#003F18_46.58%,_#004914_52.41%,_#00650C_71.83%,_#007606_87.37%,_#007C05_100%)]"
        >
          <span>メッセージを作る</span>
          <img src="/assets/images/ic_arrow-right.svg" alt="" className="absolute right-0.5 max-md:w-4" />
        </a>
      </div>
    </header>
  );
};

export default Header;
