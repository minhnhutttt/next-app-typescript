"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    title: '1. 実は…結構仲良しなんです！',
    content: (<>
      ROGYXでは、フラットでオープンなコミュニケーションを大切にし、誰でも気軽に相談しやすい環境を整えています。<br />
      社員は30代を中心としたメンバーで、経験を活かしながらお互いにサポートし合える関係性が魅力です。<br />
      達成感や挑戦の楽しさを共有しながら、ともにスキルを磨き合える仲間がいることが、ROGYXの働きやすさにつながっています。
    </>),
    color: '#835050'
  },
  {
    title: '2. 仕事に没頭できる環境！',
    content: (<>
      集中したいときは黙々と作業に取り組み、アイデアを出したいときは活発なディスカッションができる、メリハリのある職場です。<br />
      スマートフォンやPCの支給はもちろん、FigmaやAdobe製品、AIなどの最新ツールを思う存分活用できるため、クリエイティブな作業に最適な環境が整っています。
    </>),
    color: '#4B74A6'
  },
  {
    title: '3. 充実した福利厚生！',
    content: (<>
      社員全員が快適に働けるよう、ウォーターサーバー完備や常備お菓子の食べ放題など、ユニークな福利厚生を用意しています。また、有給休暇も取得しやすく、ワークライフバランスを大切にできる制度が整っています。<br />
      ライフステージの変化にも柔軟に対応し、安心して長く働ける環境を提供しています。
    </>),
    color: '#456B43'
  },
]

const Cases = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative md:pt-[130px] pt-[100px] z-10 ">
      <div className="w-full">
        <div data-scroll className="ani-zoom-out text-center md:text-[48px] text-[24px] font-bold">ROGYXってこんな会社</div>
        <div className="w-full relative md:mt-10 mt-8">
          {data.map((item,index) => (
            <div className="w-full text-white h-[1000px] last:h-[500px] last:mb-0 -mb-[500px] block relative" style={{backgroundColor: item.color}} key={index}>
              <div className="w-full h-[500px] max-w-[1040px] mx-auto flex flex-col items-center justify-center sticky top-0 overflow-hidden">
                <div className="p-5">
                  <h5 className="md:text-[24px] text-center text-[28px] font-bold">{item.title}</h5>
                  <div className="w-full max-w-[800px] mt-5 mx-auto">
                    <p className="md:text-[20px] text-[16px]">{item.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
