"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        id: '1',
        title: 'お問い合わせ',
        text: 'まずは公式LINEでお問い合わせでご相談ください',
    },
    {
        id: '2',
        title: '必要事項を提出',
        text: 'お名前、生年月日、17LIVEアカウントなどを必要事項に沿ってLINEで送っていただきます。',
    },
    {
        id: '3',
        title: '概要説明',
        text: 'GoodFellowsライバー報酬や概要説明など説明後にライバー登録をしていただきます。',
    },
    {
        id: '4',
        title: '審査',
        text: '配信の説明をした後、実際に17LIVEによる配信の審査が行われ結果をご連絡いたします。',
    },
]
const Process = () => {
  const ref = useScrollAnimations(); 
    return (
      <div ref={ref} className="pt-[10px] relative">
        <div className="md:mt-16 mt-8">
            <div className="px-5">
            <Title>所属までの流れ</Title>
          </div>
          <div className="md:mt-12 mt-8 px-5">
            <div className="space-y-10 relative w-full max-w-[470px] mx-auto ">
                <span className="fade-up absolute w-2.5 bg-[#D2D3E0] top-[15px] bottom-[15px] md:left-[26px] left-[20px]"></span>
                {data.map((item, index)=> (
                    <div className="fade-up flex items-center gap-5 relative" key={index}>
                        <div className="md:w-[60px] w-[50px] aspect-square bg-[linear-gradient(90deg,_#FF7DD3_0%,_#3CE8FF_100%)] rounded-full flex items-center justify-center md:text-[32px] text-[20px] text-white font-semibold">{item.id}</div>
                        <div className="flex-1">
                            <p className="md:text-[20px] text-[16px] font-semibold text-[#6E69FC]">{item.title}</p>
                            <p className="md:text-[16px] text-[13px]">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="fade-up flex justify-center pt-10">
                <img src="/assets/images/img-process.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Process;
  