import Link from "next/link";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <main className="bg-[url('/images/bg.png')] bg-top bg-cover relative">
      <div className="absolute left-3 md:left-5 bg-[linear-gradient(180deg,_#F44343_0%,_#FF8719_37.5%,_#FFE819_75%)] w-1 md:w-[5px] h-full top-0 bottom-0"></div>
      <div className="max-md:px-[28px] md:pl-[66px]">
        <div className="flex max-md:flex-col md:gap-[170px] pt-7 md:pt-[86px]">
          <div className="mt-3">
            <figure className="md:pb-5 pb-3 md:pr-6">
              <img className="w-full max-w-[558px]" src="/images/fv-text.png" alt="" />
            </figure>
            <span className="bg-[#FFC01D]/[0.5] h-px block max-md:hidden"></span>
            <figure className="pt-5 pr-6 max-md:hidden">
              <img src="/images/fv-deco.png" alt="" />
            </figure>
          </div>
          <div className="">
            <img className="max-md:max-w-[299px] max-md:w-full" src="/images/fv-main.png" alt="" />
          </div>
          <figure className="pt-2 pl-3 md:hidden">
              <img className="w-[224px]" src="/images/fv-deco-sp.png" alt="" />
            </figure>
        </div>
      </div>
      <div className="pl-8 pr-6 md:pl-[40px] md:pr-[30px] pt-4 md:pt-6">
        <div className="flex items-start">
          <Sidebar />
          <div className="flex flex-1 relative">
            <div className="flex justify-center w-[30px] mx-3 max-md:hidden sticky top-10">
              <figure className="absolute"><img src="/images/ic-circle.png" alt="" /></figure>
              <span className="h-full w-px bg-white/40"></span>
            </div>
            <div className="w-full">
              <div className="rounded-[23px] w-full md:min-h-[45px] min-h-[38px] flex items-center border border-[#B5B5B5]/[0.85] bg-[linear-gradient(90deg,_#0B0B0B_28.57%,_rgba(11,_11,_11,_0.46)_50%)] px-5 md:px-[38px] text-[15px] md:text-[23px] font-bold text-white/70">What is ARDOREX?</div>
              <div className="md:rounded-[20px] rounded-[16px] border border-[#C4C4C4]/[0.5] bg-[#101010]/[0.65] mt-3 md:mt-10 px-4 md:px-9 py-3 md:py-7 space-y-14 min-h-[1050px]">
                <div id="essence">
                  <div className="text-white font-bold text-[13px] md:text-[21px]">The Essence of ARDOREX</div>
                  <p className="text-white text-[13px] md:text-[17px] md:leading-[2.47] mt-5 md:pl-10">
                    ARDOREX is an innovative platform at the core of shaping the future of business through passion and transcendence. Our mission is to turn clients' ambitions into reality by harnessing the power of technology. We embrace new challenges without fear and step into uncharted territories.
                  </p>
                </div>
                <div id="fuelled">
                  <div className="text-white font-bold text-[13px] md:text-[21px]">Fuelled by Passion</div>
                  <p className="text-white text-[13px] md:text-[17px] md:leading-[2.47] mt-5 md:pl-10">
                    At ARDOREX, everything starts with passion. We spare no effort in exceeding limits to realize our clients' dreams, turning this passion into innovative ideas and solutions that lead to business success.
                  </p>
                </div>
                <div id="aiming">
                  <div className="text-white font-bold text-[13px] md:text-[21px]">Aiming for Transcendence</div>
                  <p className="text-white text-[13px] md:text-[17px] md:leading-[2.47] mt-5 md:pl-10">
                    Our goal is not just to meet expectations but to transcend them, achieving outcomes beyond what our clients could have imagined. Join us on this journey to shape the future with ARDOREX.
                  </p>
                </div>
                <div id="adapting">
                  <div className="text-white font-bold text-[13px] md:text-[21px]">Adapting to Modern Business Complexities</div>
                  <p className="text-white text-[13px] md:text-[17px] md:leading-[2.47] mt-5 md:pl-10">
                    The modern business environment is evolving at an unprecedented pace, expanding its scope. To address this complexity, we have successfully dismantled traditional business scopes while integrating synergistic fields to maximize our clients' success through a unified strategy.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-[30px] mx-3 max-md:hidden sticky top-10">
              <figure className="absolute"><img src="/images/ic-circle.png" alt="" /></figure>
              <span className="h-full w-px bg-white/40"></span>
            </div>
          </div>
          <div className="w-[260px] max-xl:hidden sticky top-10">
            <a href="/" className="block duration-150 hover:opacity-75">
              <img src="/images/btn.png" alt="ARDOREX BLOG" />
            </a>
            <div className="md:mt-10 mt-7 space-y-7">
              <ul className="space-y-5">
                <li><Link href="/#essence" className="md:text-[20px] text-[16px] font-bold">The Essence of ARDOREX</Link></li>
                <li><Link href="/#fuelled" className="md:text-[20px] text-[16px] font-bold">Fuelled by Passion</Link></li>
                <li><Link href="/#aiming" className="md:text-[20px] text-[16px] font-bold">Aiming for Transcendence</Link></li>
              </ul>
              <ul className="space-y-1.5">
                <li><Link href="/#adapting" className="md:text-[20px] text-[16px] font-bold">Adapting to Modern <br /> Business Complexities</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-[60px]">
        <div className="w-[90%] border-t border-r rounded-tr-[102px] border-white/50 pl-14 lg:pl-[360px]">
          <div className="flex gap-6 pr-8 items-start">
            <div className="border-b border-white/50 flex-1">
              <div className="py-6"><img className="max-md:w-[100px]" src="/images/ardrex.png" alt="" /></div>
            </div>
            <figure className="mt-[91px]">
              <img className="max-md:w-[50px]" src="/images/code.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </main>
  );
}
