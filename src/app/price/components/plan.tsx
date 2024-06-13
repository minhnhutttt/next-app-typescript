import { ReactNode } from "react";

interface ItemPropsType {
    children: ReactNode
  }
  
  const Item = ({ children }: ItemPropsType) => {
    return (
        <p className="flex gap-1.5">
            <span className="mt-1"><img src="/assets/images/ic-check-sub.png" alt="" /></span>
            <span className="flex-1">{children}</span>
        </p>
    )
  }
  const Plan = () => {
    return (
      <section className="overflow-hidden md:pt-[135px] pt-[100px]">
        <div className="text-center md:text-[48px] text-[28px] font-medium">
        プランのご案内
        </div>
        <span className="block gradient-04 h-1.5 md:h-2.5"></span>
        <div className="bg-[url('/assets/images/bg-plan.png')] bg-no-repeat bg-top md:bg-[length:100%_595px] bg-[length:100%_1200px] md:pt-[100px] pt-14">
        <div className="w-full dt:max-w-[1440px] max-w-[700px] mx-auto flex items-start flex-wrap gap-10 px-6 justify-center">
            <div className="w-full dt:w-[419px] rounded-t-[40px] dt:mt-[193px] overflow-hidden [box-shadow:0px_4px_60px_0px_rgba(0,_0,_0,_0.10)]">
                <div className="bg-[#E5C9FF] pt-[43px] pb-7 flex flex-wrap">
                    <div className="w-[346px] mx-auto">
                        <div className="bg-white/40 p-2 leading-[1.4]">
                            <p className="text-center font-noto md:text-[15px] text-[12px] font-semibold">Entry plan</p>
                            <p className="text-center md:text-[22px] text-[17px] font-bold">エントリープラン</p>
                        </div>
                        <p className="text-center md:text-[16px] text-[13px] mt-3">メタバース供養の基本セットのみ</p>
                    </div>
                </div>
                <div className="bg-white md:px-9 px-6 md:pt-6 md:pb-10 pt-4 pb-6">
                    <p className="text-center md:text-[24px] text-[18px] font-bold border-b border-[#001C80] md:pb-4 pb-3">
                    <span className="md:text-[58px] text-[30px]">90,000</span>円(税抜)
                    </p>
                    <div className="md:text-[16px] text-[13px] md:space-y-9 space-y-7 md:my-8 my-6">
                        <Item>メタバース内のお墓(4種類から選べるようになりました)</Item>
                        <Item>2Dペットアバター制作(1枚以上の写真データが必要です)</Item>
                        <Item>AI僧侶による法要(指定日に一度のみ、2回目以降は2万円/回)</Item>
                    </div>
                    <div className="flex justify-center">
                        <a href="/" className="w-[280px] h-[60px] rounded-[60px] bg-black flex items-center justify-center md:text-[16px] text-[14px] text-white font-bold relative">エントリープランに申し込む
                        <figure className="absolute right-2"><img src="/assets/images/ic-arrow.png" alt="" /></figure>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full dt:w-[459px] rounded-t-[40px] overflow-hidden gradient-02 md:p-[9px] p-[6px] relative [box-shadow:0px_4px_60px_0px_rgba(0,_0,_0,_0.10)]">
                <figure className="absolute top-0 left-0">
                    <img className="max-md:w-[120px]" src="/assets/images/ribbon.png" alt="" />
                </figure>
                <div className="pt-[50px] pb-7 flex flex-wrap gradient-02 rounded-t-[40px]">
                    <div className="w-[346px] mx-auto">
                        <div className="bg-white/40 p-2 leading-[1.4]">
                            <p className="text-center font-noto md:text-[15px] text-[12px] font-semibold">Memorial Monitor Plan</p>
                            <p className="text-center md:text-[22px] text-[17px] font-bold">メモリアルモニタープラン</p>
                        </div>
                        <p className="text-center md:text-[16px] text-[13px] mt-3 text-white">18大特典付きの最も人気のプラン</p>
                    </div>
                </div>
                <div className="bg-white md:px-[45px] px-6 md:pt-6 md:pb-12 pt-4 pb-8">
                    <p className="text-center md:text-[24px] text-[18px] font-bold border-b border-[#001C80] md:pb-5 pb-3 text-gradient-03">
                    <span className="md:text-[58px] text-[30px]">180,000</span>円(税抜)
                    </p>
                    <div className="md:text-[16px] text-[13px] md:space-y-[21px] space-y-7 md:my-8 my-6">
                        <Item>メタバース内のお墓(4種類から選べるようになりました)</Item>
                        <Item>2Dペットアバター制作(1枚以上の写真データが必要です)</Item>
                        <Item>AI僧侶による法要(指定日に一度のみ、2回目以降は2万円/回)</Item>
                        <Item>AI僧侶による毎月の個別法要(先着10名様特典です)</Item>
                        <Item>ペットとの個別空間構築(ペットオーナー様ごとのプライベートな供養場所)</Item>
                        <Item>個別空間へのペットアバターの配置(2D/3Dで制作したアバターを配置できます)</Item>
                        <Item>個別空間でのペットアバターの息遣いや簡単な動きを表現(動くペットとの再会を果たせます)</Item>
                        <Item>個別空間へのアイテムの配置(特典適用でアイテムを一つプレゼント)</Item>
                        <Item>個別空間の背景を任意に変更(おもいでの場所を背景にできます)</Item>
                        <Item>new! AIによるペットアバターの鳴き声再現(鳴き声データが必要です)</Item>
                        <Item>new! AIによるペットアバターとの会話(性格などを学習させればペットと話せるようになりました)</Item>
                    </div>
                    <div className="flex justify-center">
                        <a href="/" className="w-[340px] h-[60px] gradient-03 rounded-[60px] flex items-center justify-center md:text-[16px] text-[13px] text-white font-bold relative">メモリアルモニタープランに応募する
                        <figure className="absolute right-2"><img src="/assets/images/ic-arrow.png" alt="" /></figure>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full dt:w-[419px] rounded-t-[40px] dt:mt-[193px] overflow-hidden [box-shadow:0px_4px_60px_0px_rgba(0,_0,_0,_0.10)]">
                <div className="bg-[#8EC5FC] pt-[43px] pb-7 flex flex-wrap">
                    <div className="w-[346px] mx-auto">
                        <div className="bg-white/40 p-2 leading-[1.4]">
                            <p className="text-center font-noto md:text-[15px] text-[12px] font-semibold">Standard plan</p>
                            <p className="text-center md:text-[22px] text-[17px] font-bold">スタンダードプラン</p>
                        </div>
                        <p className="text-center md:text-[16px] text-[13px] mt-3">モニターは遠慮したい方のための定価プラン</p>
                    </div>
                </div>
                <div className="bg-white md:px-9 px-6 md:pt-6 md:pb-10 pt-4 pb-6">
                    <p className="text-center md:text-[24px] text-[18px] font-bold border-b border-[#001C80] md:pb-4 pb-3">
                    <span className="md:text-[58px] text-[30px]">300,000</span>円(税抜)
                    </p>
                    <div className="md:text-[16px] text-[13px] md:space-y-[21px] space-y-5 md:my-8 my-6">
                        <Item>メタバース内のお墓(4種類から選べるようになりました)</Item>
                        <Item>2Dペットアバター制作(1枚以上の写真データが必要です)</Item>
                        <Item>AI僧侶による法要(指定日に一度のみ、2回目以降は2万円/回)</Item>
                        <Item>ペットとの個別空間構築(ペットオーナー様ごとのプライベートな供養場所)</Item>
                        <Item>個別空間へのペットアバターの配置(2D/3Dで制作したアバターを配置できます)</Item>
                        <Item>個別空間でのペットアバターの息遣いや簡単な動きを表現(動くペットとの再会を果たせます)</Item>
                        <Item>個別空間へのアイテムの配置(特典適用でアイテムを一つプレゼント)</Item>
                        <Item>個別空間の背景を任意に変更(おもいでの場所を背景にできます)</Item>
                        <Item>new! AIによるペットアバターの鳴き声再現(鳴き声データが必要です)</Item>
                        <Item>new! AIによるペットアバターとの会話(性格などを学習させればペットと話せるようになりました)</Item>
                    </div>
                    <div className="flex justify-center">
                        <a href="/" className="w-[280px] h-[60px] rounded-[60px] bg-black flex items-center justify-center md:text-[16px] text-[14px] text-white font-bold relative">スタンダードプランに申し込む
                        <figure className="absolute right-2"><img src="/assets/images/ic-arrow.png" alt="" /></figure>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="px-5">
            <div className="w-full md:max-w-[880px] max-w-[440px] mx-auto relative md:mt-[50px] mt-12">
                <span className="absolute top-0 left-0"><img className="max-md:max-w-[100px]" src="/assets/images/frame.png" alt="" /></span>
                <div className="py-6 px-7 lg:py-[53px] lg:px-[64px] leading-[2]">
                <p className="md:text-[18px] text-[14px] font-bold">現実の供養所のオプションをご希望の方は、お申し込み完了後スタッフにお伝えください。</p>
                <p className="md:text-[16px] text-[13px] font-medium">
                ※初期費用60,000円が別途必要です。メモリアルモニター特典の2万円オフクーポンが利用可能です。<br />
                ※棚級により年会費が別途50,000円〜30,000円必要です。<br />
                ※現実の供養所は株式会社んみゃーちにより運営されています。
                </p>
                </div>
                <span className="absolute bottom-0 right-0"><img className="max-md:max-w-[100px] rotate-180" src="/assets/images/frame.png" alt="" /></span>
            </div>
        </div>
      </section>
    );
  };
  
  export default Plan;
  