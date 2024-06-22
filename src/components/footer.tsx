export default function Footer() {
  return (
    <>
      <div className="overflow-hidden" translate="no">
        <div className="font-anton text-[calc(18px_+_15vw)] max-md:text-[calc(18px_+_12vw)] p-[8px] text-center uppercase leading-[1.25] whitespace-nowrap">
          <img src="/assets/images/digital-agency.svg" alt="" />
        </div>
      </div>
      <footer className="border-t border-solid border-t-[rgba(172,172,172,0.3)]">
        <div className="container">
          <div className="pt-[128px] max-md:pt-[64px]">
            <div className="pb-[92px] max-md:pb-[48px] grid grid-cols-[0.5fr_0.45fr_0.5fr] max-lg:grid-cols-[1fr_1fr] max-md:block max-lg:grid-rows-[1fr] gap-[16px]">
              <div className="max-lg:col-start-1 max-lg:col-end-3 max-lg:row-start-1 max-lg:row-end-2 max-md:mb-[24px]">
                <a
                  className="font-anton text-[calc(21px_+_1vw)]"
                  translate="no"
                  href="/"
                >
                  The First Confidence
                </a>
              </div>
              <div className="max-md:mb-[24px]">
                <nav className="grid grid-cols-[0.45fr_0.55fr] gap-[16px]">
                  <ul>
                    <li className="py-[8px]">
                      <a className="hover-underline" href="/solutions/">
                        Solutions
                      </a>
                    </li>
                    <li className="py-[8px]">
                      <a className="hover-underline" href="/web-design/">
                        Web Design
                      </a>
                    </li>
                    <li className="py-[8px]">
                      <a className="hover-underline" href="/development/">
                        Development
                      </a>
                    </li>
                    <li className="py-[8px]">
                      <a className="hover-underline" href="/digital-marketing/">
                        Digital marketing
                      </a>
                    </li>
                    <li className="py-[8px]">
                      <a className="hover-underline" href="/hosting/">
                        Hosting
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li className="py-[8px]">
                      <a className="hover-underline" href="/about/">
                        About us
                      </a>
                    </li>
                    <li className="py-[8px]">
                      <a className="hover-underline" href="/tech-stack/">
                        Our Tech Stack
                      </a>
                    </li>
                    <li className="py-[8px]">
                      <a className="hover-underline" href="/sitemap/">
                        Sitemap
                      </a>
                    </li>
                    <li className="py-[8px]">
                      <a
                        className="hover-underline"
                        href="mailto:info@1stcon.co"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="text-right max-md:text-left">
                <div className="font-anton text-[calc(21px_+_1vw)] mb-[16px]">
                  Contact us
                </div>
                <div className="flex flex-col gap-[16px]">
                  <div>
                    <a href="mailto:info@1stcon.co">info@1stcon.co</a>
                  </div>
                  <div>
                    Rm. 5, 13F., No. 288, Nanjing W. Rd., Datong Dist., Taipei
                    City&nbsp;103005&nbsp;, Taiwan (R.O.C.)
                    <br />
                    <a
                      href="https://1stcon.co"
                      className="font-anton text-[18px] text-[#ddd] uppercase"
                    >
                      Google Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-solid border-t-[rgba(172,172,172,0.3)]">
              <div className="text-[14px] flex justify-between py-[32px] max-md:flex-col-reverse">
                <div translate="no">© 2023 The First Confidence Co., Ltd.</div>
                <div className="flex gap-[16px]">
                  <a
                    className="hover-underline uppercase"
                    href="/privacy-policy/"
                  >
                    Privacy Policy
                  </a>
                  <a
                    className="hover-underline uppercase"
                    href="/cookie-policy/"
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
