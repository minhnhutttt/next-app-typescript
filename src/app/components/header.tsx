export default function Header() {
    return (
      <header className="absolute top-0 inset-x-0 bg-black pb-2 md:pb-4 z-50">
        <div className=" flex items-center justify-between border-b border-white px-6 py-4 md:py-6">
        <a href="/" className="block">
          <img src="/images/logo.png" alt="" />
        </a>
        <a href="https://lin.ee/VhROyxa" target="_blank" className="md:text-[17px] font-bold text-white px-4">
        お問い合わせ
        </a>
        </div>
      </header>
    );
  }
  