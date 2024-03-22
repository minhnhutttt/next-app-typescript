import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 inset-x-0 px-5 md:px-14 z-20" id="top">
      <div className="mx-auto flex h-20 w-full items-center justify-center md:justify-between md:h-[100px]">
        <Link href="/" className="duration-150 hover:opacity-75">
          <p className="font-dela text-[6.933vw] md:text-[38px] text-white tracking-[0.2em] max-md:[text-shadow:3px_.52px_0_#000,_3px_2.5px_0_#000]">
          次世代ストレージ
          </p>
        </Link>
        <div className="hidden md:flex items-center justify-end">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              className="max-md:w-[140px]"
              src="/images/button-line.png"
              alt="LINE"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
