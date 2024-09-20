const Footer = () => {
  return (
    <>
      <div className="overflow-hidden" translate="no">
        <div className="whitespace-nowrap p-[8px] text-center font-anton text-[calc(9.5vw)] uppercase leading-[1.25]">
        Innovate. Create. Elevate.
        </div>
      </div>
      <footer className="border-t border-solid border-t-[rgba(172,172,172,0.3)]">
        <div className="container">
          <div className="pt-[128px] max-md:pt-[64px]">
            <div className="grid grid-cols-[0.5fr_0.45fr_0.5fr] gap-[16px] pb-[92px] max-lg:grid-cols-[1fr_1fr] max-lg:grid-rows-[1fr] max-md:block max-md:pb-[48px]">
              <div className="max-lg:col-start-1 max-lg:col-end-3 max-lg:row-start-1 max-lg:row-end-2 max-md:mb-[24px]">
                <a
                  className="font-anton text-[calc(21px_+_1vw)]"
                  translate="no"
                  href="/"
                >
                  <img className='max-w-[180px]' src="/assets/images/logo.svg" alt="Yumeaci inc." />
                </a>
              </div>
              <div className="max-md:mb-[24px]">
                <nav className="grid grid-cols-[0.45fr_0.55fr] gap-[16px]">
                  <ul>
                    <li className="py-[8px]">
                      <a className="hover-underline" href="/solutions">
                        Solutions
                      </a>
                    </li>
                    <li className="py-[8px]">
                      <a className="hover-underline" href="/web-development">
                        Web  Development
                      </a>
                    </li>
                    <li className="py-[8px]">
                      <a className="hover-underline" href="/system-development">
                        System Development
                      </a>
                    </li>
                    <li className="py-[8px]">
                      <a className="hover-underline" href="/apparel">
                        Apparel and Novelty Goods
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li className="py-[8px]">
                      <a className="hover-underline" href="/about">
                        About us
                      </a>
                    </li>
                    <li className="py-[8px]">
                      <a className="hover-underline" href="/sitemap">
                        Sitemap
                      </a>
                    </li>
                    <li className="py-[8px]">
                      <a
                        className="hover-underline"
                        href="mailto:info@yumeaci.co.jp"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="text-right max-md:text-left">
                <div className="mb-[16px] font-anton text-[calc(21px_+_1vw)]">
                  Contact us
                </div>
                <div className="flex flex-col gap-[16px]">
                  <div>
                    <a href="mailto:info@yumeaci.co.jp">info@yumeaci.co.jp</a>
                  </div>
                  <div>
                    <span>〒125-0002 東京都葛飾区西亀有4-19-5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-solid border-t-[rgba(172,172,172,0.3)]">
              <div className="flex justify-between py-[32px] text-[14px] max-md:flex-col-reverse">
                <div translate="no">© 2024 Yumeaci inc.</div>
                <div className="flex gap-[16px]">
                  <a
                    className="hover-underline uppercase"
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
