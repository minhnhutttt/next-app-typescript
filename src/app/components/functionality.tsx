"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        title: '位置情報',
        image: '/assets/images/img-function-01.png',
        text: (<><span className="underline">高精度の位置情報機能で、顧客を確実にあなたのお店へ誘導します。</span><br />最適なルート案内と周辺情報の提供で集客効果を最大限に引き出します。</>)
    },
    {
        title: 'NFTクーポン',
        image: '/assets/images/img-function-02.png',
        text: (<><span className="underline">コンソールから簡単にNFTの発行・管理でき、高い割引率や特典を提供することで顧客を引き付けます。</span><br />さらに、収集や交換の楽しさをプラスして、リピーターを増やします。</>)
    },
]

const Functionality = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="relative overflow-hidden px-5 md:pt-[70px] pt-10 md:pb-[154px] pb-[100px]">
        <div className="w-full max-w-[1360px] mx-auto md:gap-[60px] gap-5 flex flex-wrap xl:justify-start justify-center">
            <div className="fade-up max-xl:w-full">
                <h3 className="md:text-[64px] text-[40px] font-inter font-medium tracking-wide leading-tight">Functionality</h3>
                <p className="md:text-[24px] text-[18px] font-medium tracking-[0.3em]">機能性</p>
            </div>
            <div className="flex gap-10 pt-4 max-md:justify-center max-md:flex-wrap">
                {data.map((item, index)=> (
                    <div className="fade-up w-[330px] bg-white rounded-[20px] shadow-base pt-5 pb-10 px-[25px]" key={index}>
                        <div className="text-main text-center md:text-[28px] text-[20px] font-bold tracking-widest mb-3">{item.title}</div>
                        <div className="border border-[#729FF4] rounded-[10px] bg-[#F4F4F4] overflow-hidden">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="text-main md:text-[16px] text-[14px] mt-5">{item.text}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Functionality;
