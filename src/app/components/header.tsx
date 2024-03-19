import Link from "next/link";

export default function Header() {
  return (
    <header className="px-5 md:px-14">
      <div className="mx-auto flex h-20 w-full items-center justify-between md:h-[100px]">
        <Link href="/" className="duration-150 hover:opacity-75">
          <p className="font-dela text-[24px] md:text-[38px] tracking-[0.2em]">
            次世代証明書
          </p>
        </Link>
        <div className="flex items-center justify-end">
          <a
            href="https://lin.ee/e8GHxTR"
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
