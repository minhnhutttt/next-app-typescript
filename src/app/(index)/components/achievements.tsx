"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Achievements = () => {
  const ref = useScrollAnimations();
  return <section ref={ref} className="px-5 md:pt-[60px]">
    <div className="border-[20px] border-[#F3F3F3] rounded-[20px]">
        <div className="rounded-[10px] overflow-hidden bg-white">
            <h5 className="h-[70px] flex items-center justify-center bg-[linear-gradient(90deg,_#FF75C3_0%,_#FFA647_20%,_#FFE83F_40%,_#9FFF5B_60%,_#70E2FF_80%,_#CD93FF_100%)] md:text-[28px] text-[20px] font-semibold">育成したトップライバーの実績</h5>
            <p className="px-4 pt-9 pb-4 md:text-[18px] text-[16px]">
            弊社は、多くの日本及び世界トップクラスの<br />ライバーを輩出しており、ライブ配信で直接、
            社長に配信の相談をする事が出来ます。<br /><br />また、現役トップライバーさんも遊びに来ますので、多くの参考になる御意見を聞けたり、交流を深めることも出来ますので、ライブ配信が楽しくなり、長く続けられるようになります。！
            </p>
        </div>
    </div>
  </section>;
};

export default Achievements;
