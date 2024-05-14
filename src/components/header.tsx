export default function Header() {
    return (
      <header className="bg-black px-5 border-b border-white">
        <div className="w-full max-w-[1300px] mx-auto flex justify-end items-center md:h-[90px] h-[70px]">
        <div className="flex w-[50px] items-center justify-center md:w-[50px]">
          <button
            className="group relative block h-[28px] w-9 cursor-pointer border-[none] p-0 max-md:z-[99] md:w-[50px] max-md:[&.active]:absolute"
          >
            <span className="absolute left-0 top-0 block h-0.5 w-full bg-white transition-transform duration-[0.3s] ease-[ease] group-[.active]:top-[42%] group-[.active]:rotate-45"></span>
            <span className="absolute left-0 top-2/4 block h-0.5 w-full -translate-y-2/4 bg-white transition-transform duration-[0.3s] ease-[ease] group-[.active]:opacity-0"></span>
            <span className="absolute bottom-0 left-0 block h-0.5 w-full bg-white transition-transform duration-[0.3s] ease-[ease] group-[.active]:bottom-2/4 group-[.active]:-rotate-45"></span>
          </button>
        </div>
        </div>
      </header>
    );
  }
  