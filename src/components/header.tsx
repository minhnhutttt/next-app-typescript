export default function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-50 py-2 md:py-10 md:px-[60px] px-5 flex items-center justify-between">
      <a href="/" className="">
        <img className="max-md:w-[120px]" src="/images/logo.png" alt="Logo" />
      </a>
      <div className="">
        <a
          className="flex items-center justify-center md:w-[280px] w-[160px] h-[36px] md:h-[60px] rounded-[50px] bg-[#101010] md:text-[18px] text-[11px] font-black text-[#7FFF00] outline-1 outline outline-[#7FFF00] md:outline-offset-[-5px] outline-offset-[-3px] [box-shadow:0px_0px_30px_0px_rgba(127,_255,_0,_0.30)] gap-2 tracking-[0.15em] md:tracking-[0.3em] duration-300 hover:opacity-75 duration-300 hover:opacity-75"
          href="/form"
        >
          <span>NFT名刺を作る</span>
          <img className="max-md:w-5 md:w-8" src="/images/arrow.svg" alt="" />
        </a>
      </div>
    </header>
  );
}
