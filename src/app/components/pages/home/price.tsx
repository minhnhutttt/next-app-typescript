export default function Price() {
    return (
      <div className="bg-[#EDEDED]">
         <div className="bg-[url('/images/img-price.png')] bg-cover bg-center">
             <div className="flex justify-center md:text-[50px] text-[32px] text-white text-center bg-[#184E97] font-bold p-5">今が最安値！｜制作費</div>
            <div className="w-full max-w-[1240px] mx-auto px-5">
                <div className="mt-20 px-6">
                    <div className="">
                        <p className="md:text-[45px] text-[24px] font-bold leading-snug">初期費用</p>
                        <p className="text-[#B71313] font-semibold md:text-[157px] leading-none tracking-[-0.07em]"><span className="md:text-[101px] font-hiragino">￥</span>50,000</p>
                    </div>
                    <div className="">
                        <p className="md:text-[45px] text-[24px] font-bold leading-snug">管理費用</p>
                        <p className="text-[#B71313] font-semibold md:text-[157px] leading-none tracking-[-0.07em]"><span className="md:text-[101px] font-hiragino">￥</span>10,000</p>
                    </div>
                    <p className="md:text-[30px] text-[20px]">
                        価格は全て税抜です<br />
                        6ヶ月以上のご契約が必要です
                    </p>
                </div>
                <p className="text-center font-bold md:text-[35px] pt-10 pb-9">
                    アップデートに伴う機能の追加により、 将来的に販売価格が上昇します。<br />
                    今ご契約頂ければ、ずっと現在価格でご利用頂けます。
                </p>
            </div>
         </div>
      </div>
    );
  }
  