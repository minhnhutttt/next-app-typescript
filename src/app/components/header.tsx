export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 px-5 md:px-10">
      <div className="mx-auto flex h-20 w-full items-center justify-between md:h-[120px]">
        <a href="/" className="duration-150 hover:opacity-75">
          <p className="font-dela text-white text-[32px] md:text-[42px]">次世代名刺</p>
        </a>
        <div className="flex items-center justify-end">
            
        <a
              href="https://lin.ee/6PgmBNE"
              target="_blank"
              className="flex items-center justify-center w-[240px] h-[59px] rounded-[60px] border-2 border-black bg-[#FF66CC] font-bold duration-150 [box-shadow:0px_5px_0px_0px_#000] hover:opacity-75 "
            >
              LINEでお問い合わせ
            </a>
        </div>
      </div>
    </header>
  );
}
