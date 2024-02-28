import Link from "next/link";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <main className="bg-[url('/images/bg.png')] bg-cover relative">
      <div className="absolute left-5 bg-[linear-gradient(180deg,_#F44343_0%,_#FF8719_37.5%,_#FFE819_75%)] w-[5px] h-full top-0 bottom-0"></div>
      <div className="pl-[66px]">
        <div className="flex md:gap-[170px] gap-10 pt-[86px]">
          <div className="mt-3">
            <figure className="pb-5 pr-6">
              <img src="/images/fv-text.png" alt="" />
            </figure>
            <span className="bg-[#FFC01D]/[0.5] h-px block"></span>
            <figure className="pt-5 pr-6">
              <img src="/images/fv-deco.png" alt="" />
            </figure>
          </div>
          <div className="">
            <img src="/images/fv-main.png" alt="" />
          </div>
        </div>
      </div>
      <div className="pl-[40px] pr-[30px] mt-6">
        <div className="flex">
          <Sidebar />
          <div className="flex flex-1 relative">
            <div className="flex justify-center w-[30px] mx-3">
              <figure className="absolute"><img src="/images/ic-circle.png" alt="" /></figure>
              <span className="h-full w-px bg-white/40"></span>
            </div>
            <div className="w-full">
              <div className="rounded-[23px] w-full h-[45px] flex items-center border border-[#B5B5B5]/[0.85] bg-[linear-gradient(90deg,_#0B0B0B_28.57%,_rgba(11,_11,_11,_0.46)_50%)] px-[38px] text-[23px] font-bold text-white/70">What is ARDOREX?</div>
              <div className="rounded-[20px] border border-[#C4C4C4]/[0.5] bg-[#101010]/[0.65] mt-10 px-9 py-7 space-y-14  min-h-[1050px]">
                <div>
                  <div className="text-white font-bold text-[21px]">The Essence of ARDOREX</div>
                  <p className="text-white text-[17px] leading-[2.47] mt-5 pl-10">
                    ARDOREX is an innovative platform at the core of shaping the future of business through passion and transcendence. Our mission is to turn clients' ambitions into reality by harnessing the power of technology. We embrace new challenges without fear and step into uncharted territories.
                  </p>
                </div>
                <div>
                  <div className="text-white font-bold text-[21px]">Fuelled by Passion</div>
                  <p className="text-white text-[17px] leading-[2.47] mt-5 pl-10">
                    At ARDOREX, everything starts with passion. We spare no effort in exceeding limits to realize our clients' dreams, turning this passion into innovative ideas and solutions that lead to business success.
                  </p>
                </div>
                <div>
                  <div className="text-white font-bold text-[21px]">Aiming for Transcendence</div>
                  <p className="text-white text-[17px] leading-[2.47] mt-5 pl-10">
                    Our goal is not just to meet expectations but to transcend them, achieving outcomes beyond what our clients could have imagined. Join us on this journey to shape the future with ARDOREX.
                  </p>
                </div>
                <div>
                  <div className="text-white font-bold text-[21px]">Adapting to Modern Business Complexities</div>
                  <p className="text-white text-[17px] leading-[2.47] mt-5 pl-10">
                    The modern business environment is evolving at an unprecedented pace, expanding its scope. To address this complexity, we have successfully dismantled traditional business scopes while integrating synergistic fields to maximize our clients' success through a unified strategy.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-[30px] mx-3">
              <figure className="absolute"><img src="/images/ic-circle.png" alt="" /></figure>
              <span className="h-full w-px bg-white/40"></span>
            </div>
          </div>
          <div className="w-[260px]">
            <a href="/" className="block duration-150 hover:opacity-75">
              <img src="/images/btn.png" alt="ARDOREX BLOG" />
            </a>
            <div className="md:mt-10 mt-7 space-y-7">
              <ul className="space-y-5">
                <li><Link href="/" className="md:text-[20px] text-[16px] font-bold">The Essence of ARDOREX</Link></li>
                <li><Link href="/" className="md:text-[20px] text-[16px] font-bold">Fuelled by Passion</Link></li>
                <li><Link href="/" className="md:text-[20px] text-[16px] font-bold">Aiming for Transcendence</Link></li>
              </ul>
              <ul className="space-y-1.5">
                <li><Link href="/" className="md:text-[20px] text-[16px] font-bold">Adapting to Modern </Link></li>
                <li><Link href="/" className="md:text-[20px] text-[16px] font-bold">Business Complexities</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-[60px]">
        <div className="w-[90%] border-t border-r rounded-tr-[102px] border-white/50 pl-[360px]">
          <div className="flex gap-6 pr-8 items-start">
            <div className="border-b border-white/50 flex-1">
              <div className="py-6"><img src="/images/ardrex.png" alt="" /></div>
            </div>
            <figure className="mt-[91px]">
              <img src="/images/code.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </main>
  );
}
