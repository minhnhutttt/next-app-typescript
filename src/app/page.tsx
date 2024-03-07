import Link from "next/link";
import Sidebar from "./components/sidebar";
import Container from "./components/container";
export default function Home() {
  return (
    <main className="bg-top bg-cover relative">
      <div className="relative max-md:px-[28px] md:pl-[66px]">
        <div className="flex max-md:flex-col md:gap-20 lg:gap-[170px] pt-7 md:pt-[86px]">
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
      <Container 
        title="What is ARDOREX"
        anchors={[
          {
            link: 'essence',
            text: 'The Essence of ARDOREX'
          },
          {
            link: 'fuelled',
            text: 'Fuelled by Passion'
          },
          {
            link: 'aiming',
            text: 'Aiming for Transcendence'
          },
          {
            link: 'adapting',
            text: 'Adapting to Modern Business Complexities'
          },
        ]}
        >
          <div id="essence">
              <div className="text-white font-bold text-[13px] md:text-[21px]">The Essence of ARDOREX</div>
              <p className="text-white text-[13px] md:text-[17px] md:leading-[2.47] mt-5 md:pl-10">
                ARDOREX is an innovative platform at the core of shaping the future of business through passion and transcendence. Our mission is to turn clients&apos; ambitions into reality by harnessing the power of technology. We embrace new challenges without fear and step into uncharted territories.
              </p>
            </div>
            <div id="fuelled">
              <div className="text-white font-bold text-[13px] md:text-[21px]">Fuelled by Passion</div>
              <p className="text-white text-[13px] md:text-[17px] md:leading-[2.47] mt-5 md:pl-10">
                At ARDOREX, everything starts with passion. We spare no effort in exceeding limits to realize our clients&apos; dreams, turning this passion into innovative ideas and solutions that lead to business success.
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
                The modern business environment is evolving at an unprecedented pace, expanding its scope. To address this complexity, we have successfully dismantled traditional business scopes while integrating synergistic fields to maximize our clients&apos; success through a unified strategy.
              </p>
            </div>
      </Container>
    </main>
  );
}
