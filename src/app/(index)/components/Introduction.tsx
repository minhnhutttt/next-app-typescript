"use client";

import InfiniteScroll from "@/components/InfiniteScroll";

const carouselTop = [
  "KANA_EXD.png",
  "MIRAVATS_FWI.png",
  "HAJIME_MAE.png",
  "HIYORI_HIY.png",
  "MAKOTO_OXE.png",
  "KASUMI_SIY.png",
  "RYUKU_WKL.png",
  "YOSHI_ZMR.png",
  "UNA_AJC.png",
  "JACKTON_JAC.png",
  "MIYU_IYU.png",
  "ONENESS CHEF_OCF.png",
  "MITUCOIN_UCO.png",
  "MIZUKI_ZUK.png",
  "MASATO_ATO.png",
  "MIHO_MIH.png",
  "AMEEPY_AME.png",
  "AOI_WAO.png",
  "KAZUKING_KZG.png",
  "G_AGO.png",
  "coin8.png",
];

const carouselBottom = [
  "AMECHAN_AMN.png",
  "HANA_HNS.png",
  "GURATAN_GRT.png",
  "JANE_JNE.png",
  "BEAUC_BAC.png",
  "ENGINE_ENG.png",
  "AMISTYLE_ASL.png",
  "coin30.png",
  "SUZUHANA_SZL.png",
  "MORIAYU_KPV.png",
  "AYUHAPI_AHC.png",
  "BLUEBERRY_EBR.png",
  "SFTJ_FTJ.png",
  "coin20.png",
  "AOYAMAHIKA_HKR.png",
  "KANHIJI_KHJ.png",
  "NEKONOTOTO_TEK.png",
  "RKS_RKS.png",
  "WAKO_WKO.png",
  "YUIKA_YIK.png",
];

const Introduction = () => {
  return (
    <section className="overflow-hidden md:py-[50px] py-7">
      <div>
        <InfiniteScroll count={3} duration="30s" className="flex w-max">
            <div className="shrink-0 flex">
            {carouselTop.map((item, index) => (
                <div className="shrink-0" key={index}><img className="max-md:w-[100px]" src={`/assets/images/carousel/${item}`} alt="" /></div>
            ))}
            </div>
        </InfiniteScroll>
      </div>
      <div>
        <InfiniteScroll count={3} duration="30s" direction="right" className="flex w-max">
            <div className="shrink-0 flex">
            {carouselBottom.map((item, index) => (
                <div className="shrink-0" key={index}><img className="max-md:w-[100px]" src={`/assets/images/carousel/${item}`} alt="" /></div>
            ))}
            </div>
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default Introduction;
