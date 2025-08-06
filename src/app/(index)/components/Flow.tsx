"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Flow = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 sm:pb-[120px] pb-20"
    >
        <div className="relative">
            <div className="flex justify-center">
                <h3 className="fade-up sm:text-[36px] text-[22px] font-bold text-center bg-[linear-gradient(0deg,_#ED62C7_0%,_#ED62C7_35.55%,_rgba(237,_98,_199,_0.00)_35.56%)] px-2">FAVEエコシステムの 循環モデル</h3>
            </div>
            <div className="fade-up flex justify-center items-center mt-10">
                <img src="/assets/images/flow-img.png" alt="" />
            </div>
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
    </section>
  );
};

export default Flow;
