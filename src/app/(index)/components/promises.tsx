"use client";
import UnderlineText from "@/components/underlineText";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        number: '/assets/images/number-01.svg',
        title: '実際の来店、購入、契約の増加にフォーカス!!',
        text: 'SEIKAI広告エージェントは実際に売上を生み出したコンバージョンの増加にフォーカスします。それ以外に何か必要ですか？鳴り止まない電話への対応を準備をしてください！'
    },
    {
        number: '/assets/images/number-02.svg',
        title: '24時間365日休まず自動改善!!',
        text: 'SEIKAI広告エージェントは人間のように休むことなく働きます。あなたがソファの上でくつろいでいる時も、眠っている時も、重要な仕事中でも、代わりに自動で改善し続けます。'
    },
    {
        number: '/assets/images/number-03.svg',
        title: '専門知識・手数料不要!!',
        text: 'SEIKAI広告エージェントの利用には専門知識も、広告代理店のような手数料も一切不要です。AIの限界維持費用だけ必要ですが、それでも月間広告費の3.99%で日本一安いです。'
    }
]

const Promises = () => {
  const ref = useScrollAnimations();
  
  return (
    <section
      ref={ref}
      className="relative px-5 pt-5 md:pb-[200px] pb-[100px]"
    >
        <div className="w-full max-w-[710px] mx-auto">
            <h3 className="fade-up flex md:text-[42px] text-[24px] font-black leading-[1.3] relative tracking-[-0.018em]">嘘つきにサヨナラ、あなたとの<UnderlineText>お約束</UnderlineText></h3>
            <p className="fade-up text-[16px] md:text-[23px] font-bold mt-2">掲げたメリットは、人間よりも真面目に、地道で、コツコツと、毎秒単位で対応してまいります。</p>
            <div className="md:mt-[124px] mt-16 md:space-y-[70px] space-y-10">
                {data.map((item,index) => (
                    <div className="fade-up flex items-start gap-2" key={index}>
                        <span><img className="max-md:h-14" src={item.number} alt="" /></span>
                        <div className="flex-1 pt-5 md:pt-7">
                            <p className="md:text-[26px] text-[18px] font-bold mb-2">{item.title}</p>
                            <p className="md:text-[19px] text-[15px] font-medium max-w-[447px]">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Promises;
