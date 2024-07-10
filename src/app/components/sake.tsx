"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";


const Sake = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="bg-[url('/assets/images/bg-sake.png')] bg-cover px-5">
        <div className="w-full max-w-[1440px] mx-auto flex">
            <div className="text-[#F3F3F3]">
                <h3 className="font-serif md:text-[23px] text-[16px] font-extrabold">日本全国のSAKEを探し続け、今飲むべき旬の酒を世界へ</h3>
                <p className="md:text-[17px] text-[13px] font-medium">
                銘酒とは、その土地の豊かな土壌、澄んだ空気、厳選された素材、<br />
                そして清らかな水から生まれる味わい深いお酒です。<br />
                口に含んだ瞬間に感じる喉越しや余韻は、過去の記憶を呼び起こし、<br />未体験の未来を創造させます。<br />
                まるで魔物か神様か何かが宿っているような不思議な魅力を持つお酒、<br />それが銘酒ではないでしょうか。<br />
                <br />
                私たちは、そんな銘酒を世界へ、地球をも飛び出る勢いで届けたい。<br />
                ぜひ、この特別なお酒を体験し、<br />私たちと一緒に日本の素晴らしさを発見してください。
                </p>
            </div>
        </div>
    </section>
  );
};

export default Sake;
