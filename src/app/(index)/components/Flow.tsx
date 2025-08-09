"use client";

import SvgMotionPath from "@/components/SvgMotionPath";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Flow = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden sm:pb-[120px] pb-20"
    >
        <div className="relative">
            <div className="flex justify-center px-4">
                <h3 className="fade-up sm:text-[36px] text-[22px] font-bold text-center bg-[linear-gradient(0deg,_#ED62C7_0%,_#ED62C7_35.55%,_rgba(237,_98,_199,_0.00)_35.56%)] px-2">FAVEエコシステムの 循環モデル</h3>
            </div>
            <div className=" max-sm:max-w-[350px] mx-auto">
                <div className="fade-up flex justify-center items-center mt-10 relative">
                    <img src="/assets/images/flow-img.png" alt="" />
                    <SvgMotionPath color="#A22ACD" className="absolute rotate-[-72deg] w-[38.5%] left-[11%] top-[-1%] sm:top-[16%]" />
                    <SvgMotionPath color="#3A86FF" className="absolute w-[38.5%] left-[37.5%] top-[-10.5%] sm:top-[7%]" />
                    <SvgMotionPath color="#FF006E" className="absolute rotate-[73deg] w-[38.5%] left-[54.5%] top-[11%] sm:top-[28%]" />
                    <SvgMotionPath color="#FF006E" className="absolute rotate-[145deg] w-[38.5%] left-[38.5%] top-[33%] sm:top-[50%]" />
                    <SvgMotionPath color="#3A86FF" className="absolute rotate-[216deg] w-[38.5%] left-[12%] top-[26%] sm:top-[43%]" />
                </div>
            </div>
            <div className="px-4">
                <div className="sm:px-[14px] sm:mt-[60px] mt-10">
                    {[
                        {
                            number: '1',
                            title: '【ファン】',
                            content: <>FAVEを購入してFAVERに投げ銭</>,
                            color: '#3A86FF'
                        },
                        {
                            number: '2',
                            title: '【FAVER】',
                            content: <>運営にFAVE送付&VIP機能をアンロック</>,
                            color: '#FF006E'
                        },
                        {
                            number: '3',
                            title: '【FAVER】',
                            content: <>ファンにVIPサービス・コンテンツを提供</>,
                            color: '#FF006E'
                        },
                        {
                            number: '4',
                            title: '【ファン】',
                            content: <>VIPサービス・コンテンツを体験</>,
                            color: '#3A86FF'
                        },
                        {
                            number: '5',
                            title: '【運　営】',
                            content: <>新たなVIPサービスを企画・ローンチ</>,
                            color: '#A22ACD'
                        }
                    ].map((item,index) => (
                        <div className="fade-up flex sm:text-[32px] text-[18px] p-4 md:p-5 gap-5 border-b border-gray-500" key={index}>
                            <p className="flex items-center font-bold sm:w-[192px]">
                                <span className="">{item.number}.</span>
                                <span className="relative flex items-center justify-center" style={{color: item.color}}>
                                    <span className="absolute block filter blur-[35px] sm:size-[68px] size-10" style={{backgroundColor: item.color}}></span>
                                    {item.title}
                                </span>
                            </p>
                            <p className="flex-1">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Flow;
