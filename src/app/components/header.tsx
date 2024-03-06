export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 px-8 md:px-[66px] z-10 pt-3.5 md:pt-[28px]">
      <div>
          <a href="/" className="block">
            <img className="max-md:w-[101px]" src="/images/logo.png" alt="ARDOREX" />
          </a>
        </div>
    </header>
  );
}
