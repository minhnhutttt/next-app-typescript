"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Confirmation = () => {
  const ref = useScrollAnimations(); 
    return (
      <div ref={ref} className="pt-[8px] relative">
        <div className="md:mt-16 mt-8 px-5">
            <Title>ご連絡前に以下をご確認ください !!</Title>
          <div className="fade-up w-full mx-auto p-2 md:p-5 relative rounded-[25px] overflow-hidden mt-6">
            <span className="absolute md:animate-[rotate_30s_linear_infinite] animate-[rotate_20s_linear_infinite] w-[300vmax] -top-1/2 -left-1/2 aspect-square md:bg-[repeating-linear-gradient(_60deg,_#D9D9D9,_#D9D9D9_20px,_#FFF_20px,_#FFF_40px_)] bg-[repeating-linear-gradient(_60deg,_#D9D9D9,_#D9D9D9_15px,_#FFF_15px,_#FFF_30px_)]"></span>
            <div className="w-full h-full bg-white rounded-[18px] relative font-extrabold md:pt-9 pt-6 px-[24px] md:pb-8 pb-5">
              <p className="md:text-[22px] text-[18px] font-bold text-center">17LIVE公式ライバーの必須条件</p>
              <p className="md:text-[14px] text-[13px] font-light">ご応募は、以下の条件を満たしている方に限らせていただきます。</p>
              <ul className="list-disc md:text-[16px] text-[15px] font-light px-5 mt-8 leading-[1.7]">
                <li>WiFiや光回線やギガ使い放題プラン等の安定した配信環境が整っている</li>
                <li>iPhone7以降程度の機能があるスマホやタブレットを持っている</li>
                <li>社会的常識のある方</li>
                <li>報酬が出ますので、公務員など副業が禁止されていない職業の方</li>
                <li>年齢が満16歳以上</li>
                <li>年齢が満18歳未満は保護者の同意が必要</li>
              </ul>
              <p className="md:text-[14px] text-[13px] font-light mt-5">
              ※V-Liver希望者の応募は、現在締め切らせて頂いております。<br />
              ※男女年齢問わず幅広く募集致しております。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Confirmation;
  