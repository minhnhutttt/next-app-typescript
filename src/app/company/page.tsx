"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PageTitle from "../components/common/pageTitle";
import TextBlock from "../components/common/textBlock";
import PageContainer from "../components/common/pageContainer";

export default function Company() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <PageContainer>
      <PageTitle>運営会社</PageTitle>
      <div ref={animateRefs} className="w-full max-w-[484px] px-5 mx-auto font-worksans md:text-[20px] text-[18px] pt-20 md:pt-[134px] pb-32 md:pb-[224px]">
        会社名<br />
        株式会社ジャパントータルコミュニケーションズ<br />
        <br />
        電話<br />
        043-312-6905<br />
        <br />
        設立<br />
        2015年10月<br />
        <br />
        事業内容<br />
        Webサイト制作事業
      </div>
    </PageContainer>
  );
}
