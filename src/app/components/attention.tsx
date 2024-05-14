"use client"

import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function Attention() {
    const ref = useScrollAnimations();
    return (
      <section ref={ref} className="md:mt-[80px] mt-10 px-5 md:pb-[70px] pb-10">
        <div className="w-full max-w-[1112px] mx-auto relative md:space-y-[60px] space-y-8">
            <div className="fade-up">
                <h5 className="px-4 pb-3 font-mincho md:text-[32px] text-[20px] font-semibold border-b border-black">干味専門 一福の「食」の基準</h5>
                <p className="font-gothic md:text-[19px] text-[14px] md:mt-7 mt-4 px-3">一福では、美味しく食べられる事はもちろん、健康・安心を第一に考え、自然の豊かさを生かした安全でおいしい商品を揃えております。<br />商品は一つ一つ現地まで足を運び試食を重ね、生育環境や製造方法、生産者と対話し試行錯誤することで皆様に喜んでいただける商品になるよう厳選しております。</p>
            </div>
            <div className="fade-up">
                <h5 className="px-4 pb-3 font-mincho md:text-[32px] text-[20px] font-semibold border-b border-black">主食にこそ安心を追求した理由</h5>
                <p className="font-gothic md:text-[19px] text-[14px] md:mt-7 mt-4 px-3">
                    毎日口にするお米だからこそ安全で美味しく健康に寄り添ったものにしたい。<br />使用しているアルファ化米には、防腐剤・食品添加物は一切入っておりません。お米を乾燥させることで微生物が繁殖できないよう製造しているので長期保存が可能です。パッケージには酸素を通しにくい素材を採用し、脱酸素剤も封入することで、酸素による影響を防ぎながら、お米の味わいを守っています。<br /><br />
                    パサつきや米の硬さがあり高齢者や子供には向かない物が多い中、一福米はふっくら美味しく出来上がります。体にやさしく、安心して食べられ健康を気遣う人に最適です。
                </p>
            </div>
            <div className="fade-up">
                <h5 className="px-4 pb-3 font-mincho md:text-[32px] text-[20px] font-semibold border-b border-black">注意点</h5>
                <p className="font-gothic md:text-[19px] text-[14px] md:mt-7 mt-4 px-3">
                ※当製品は、あくまでも糖尿病や成人病の予防、ダイエットのサポートをする製品です。病気の治療を目的とした製品ではありません。<br />
                ※長期保存食品ですが、高温多湿や直射日光などの保存条件は品質を低下させる原因になる恐れがあります。直射日光を避け常温で保存ください。<br />
                ※著しく水分量が変われば食感に違和感を感じる事があります。袋内の注水線を目安に調理してください。（雑炊→220ml　ご飯→150ml）
                </p>
            </div>
        </div>
      </section>
    );
  }
  