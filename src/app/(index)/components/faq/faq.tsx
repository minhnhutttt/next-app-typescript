'use client'
import useScrollAnimations from '@/hooks/useScrollAnimations'
import type { FaqItemPropsType } from './faqItem'
import FaqItem from './faqItem'
const faqData: FaqItemPropsType[] = [
  {
    id: '1',
    question: '『メタでペット供養』とは何ですか？',
    answer: (
      <>
        「メタでペット供養」は、現実の供養所とメタバース空間で構築したバーチャル供養所を組み合わせた新しいペット供養サービスです。特にメタバースでの供養は、愛するペットとの“おもいで”が風化する前に形に残すことを重要視しており、メタバースならではの故ペットとの再会体験と供養体験をバランスよく提供することを目指しています。
      </>
    ),
  },
  {
    id: '2',
    question: 'サービスの利用料金はどのくらいですか？ ',
    answer: (
      <>
        現在はベータ版をセール価格で販売中です。詳細はページトップをご参照ください。<br />
        <br />
        なお、メタバース部分の価格設定には、最新の技術開発、カスタマイズされたペットアバター制作、AI対話機能実装など、高度な技術と専門知識を要する多様な要因が含まれています。決して安価とは言えませんが、現実の供養の場合、一度〜複数回の供養をするのみでそれ以上の費用がかかります。<br />
        <br />
        それでいて、段々と“おもいで”は風化していきます。この辛さと向き合い、乗り越えることは容易ではありません。メタバースなら、好きなタイミングでのペットとの再会と定期的な供養体験により、喜びと弔いの気持ちを同時に叶えられます。セール価格は予告なく変更または停止される場合がございます。ぜひ、今の機会にお申し込みをいただけますと幸いです。
      </>
    ),
  },
  {
    id: '3',
    question: 'メタバースでの供養は、実際の供養と同じ効果がありますか？',
    answer: (
      <>
        メタバースでの供養は、実際の供養を補完するものです。AI僧侶による読経や、ペットとの“おもいで”を追体験できる機能など、従来の供養方法にはない特徴があります。心を込めて供養する気持ちは、現実でもメタバースでも変わりません。新たなペット供養の選択肢として、ぜひご検討ください。
      </>
    ),
  },
  {
    id: '4',
    question: 'メタバース空間にはどうやってアクセスしますか？',
    answer: (
      <>
        専用のアプリを通じてアクセスできます。現在はPC版のみ対応していますが、スマートフォンからのアクセスを前提として開発を進めております。スマートフォン版は近日リリース予定です。
      </>
    ),
  },
  {
    id: '5',
    question: 'ペットのアバターはどのように作成されますか？ ',
    answer: (
      <>
        ペットの写真をもとに、2Dまたは3Dのアバターを作成します。より高品質な3Dアバターはオプションとなります。
      </>
    ),
  },
  {
    id: '6',
    question: '複数のペットを供養することはできますか？ ',
    answer: (
      <>
        はい、可能です。お申し込み時にサポートにお伝えください。
      </>
    ),
  },
  {
    id: '7',
    question: '生前予約は可能ですか？  ',
    answer: (
      <>
        はい、生前予約も受け付けています。お申し込み時にサポートにお伝えください。
      </>
    ),
  },
  {
    id: '8',
    question: '海外在住でも利用できますか？ ',
    answer: (
      <>
        はい、メタバース空間はインターネットを通じてアクセスできるため、海外在住の方もご利用いただけます。お申し込み時にサポートにお伝えください。
      </>
    ),
  },
  {
    id: '9',
    question: 'ペットが特殊なのですが、相談はできますか？  ',
    answer: (
      <>
        はい、犬や猫以外の特殊なペットについても、ご相談を承っております。基本的にはどんなペットでも受付可能です。詳細については、お気軽にお問い合わせください。<br />※対象のペットちゃんのご参考例 <br />ハムスター　モルモット　ウサギ　フェレット　ハリネズミ　モモンガ　 チンチラ　ミーアキャット　リス　デグー　インコ　オウム　文鳥　 カメ　ヘビ　カメレオン　イグアナ　トカゲ　金魚　熱帯魚　etc<br />記載のないペットちゃんもご対応が可能です。 お気軽にお問い合わせください！
      </>
    ),
  },
  {
    id: '10',
    question: '現実の供養所（KARIMATA供養所）はどこにありますか？ ',
    answer: (
      <>
        KARIMATA供養所は、沖縄県宮古島市の狩俣地域にあります。美しい海を望む自然豊かな場所で、心安らかに供養することができます。
      </>
    ),
  },
  {
    id: '11',
    question: '個人情報やプライバシーは保護されますか？ ',
    answer: (
      <>
        はい、お客様の個人情報とプライバシーの保護は最優先事項です。厳重なセキュリティ対策を施し、適切に管理いたします。
      </>
    ),
  },
]

export default function FAQ() {
  const ref = useScrollAnimations()

  return (
    <div
      ref={ref}
      id="faq"
      className="mb-[50px] px-5 pb-12 pt-14 md:mb-[110px] md:pb-[55px] md:pt-[180px]"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <h4 className="font-roboto text-center text-[28px] font-bold text-black md:text-[48px]">
          FAQ
        </h4>
        <div className="mx-auto mt-5 w-full space-y-[20px] md:mt-[70px] md:space-y-[30px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  )
}
