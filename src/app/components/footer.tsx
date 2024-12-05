export default function Footer() {
  return (
    <footer className="bg-black dark:bg-[#FFF7F0] text-white dark:text-black duration-150 pt-[5em] md:pt-[10em] md:px-[2em] px-[1em]">
      <div className="grid gap-x-[2em] gap-y-[4em] items-stretch border-b border-white pb-[5em]">
        <div className="flex items-start self-auto gap-[3vw] md:gap-[2em] max-md:flex-col max-md:items-center">
          <a href="/" className="block hover:opacity-75 duration-150 md:max-w-[250px] max-w-[200px]">
          <img
            className="block w-full"
            src="/assets/images/footer-logo.svg"
            alt=""
          />
          </a>
          <div className="flex h-full md:max-w-[38.75em] md:items-start items-center justify-between flex-col">
            <div className="flex-none mb-[1.5em] relative">
              <h4 className="md:text-[3em] text-[7vw] font-bold">
                <span className="inline-block">結局、</span>
                <span className="inline-block">話し合ったほうが早いです。</span>
              </h4>
            </div>
            <div>
              <a
                href="/contact"
                className="shake bg-black border flex items-center border-white dark:border-white leading-[1] justify-center uppercase text-[1em] h-[60px] w-[280px] px-[1em] rounded-full text-center text-white dark:text-black dark:bg-white font-bold"
              >
                無料相談を予約
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[2em] flex justify-end items-center gap-[4em]">
      <div className="block"><p className="footer_copyright-text text-[1em]">©<span id="current-year">2024</span>  <a href="/privacy-policy" className="underline">Privacy Policy</a></p> </div>
      </div>
    </footer>
  );
}
