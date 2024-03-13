import Anime from "./common/anime";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 px-8 md:px-[66px] z-10 pt-3.5 md:pt-[28px]">
      <div className="w-full flex items-center justify-between">
          <a href="/" className="block">
            <img className="max-md:w-[101px]" src="/images/logo.png" alt="ARDOREX" />
          </a>
          <a href="/" className="flex items-center w-[106px] h-8 rounded-[27.5px] bg-[linear-gradient(180deg,_#FF8719_0%,_rgba(255,_135,_25,_0.00)_100%)]">
          <div className="flex justify-center w-[44px] h-[44px] -ml-2 -mt-1">
            <Anime />
          </div>
          <p className="text-white md:text-[16px] text-[14px] pl-2">JP / EP</p>
          </a>
        </div>
    </header>
  );
}
