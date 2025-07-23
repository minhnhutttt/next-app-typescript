import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

interface FAQTab {
  id: string;
  title: string;
}

interface FAQData {
  tabs: FAQTab[];
  categories: Record<string, FAQCategory>;
}

interface ActiveItems {
  [key: string]: boolean;
}

const FAQ: React.FC = () => {
  const [activeItems, setActiveItems] = useState<ActiveItems>({});
  const detailRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const arrowRefs = useRef<{ [key: string]: HTMLImageElement | null }>({});

  const faqData: FAQData = {
    tabs: [
      { id: 'link-1', title: 'トークンについて' },
      { id: 'link-2', title: 'システム・操作について' },
      { id: 'link-3', title: '運用・制度について' },
      { id: 'link-4', title: '効果・導入について' },
      { id: 'link-5', title: 'p2p bonus・感謝文化について' },
      { id: 'link-6', title: '導入・サポートについて' }
    ],
    categories: {
      'link-1': {
        title: 'トークンについて',
        items: [
          {
            question: 'トークンって何ですか？仮想通貨みたいなもの？',
            answer: 'p2p bonusのトークンは、社内限定の「感謝ポイント」のようなものです。ビットコインなどの仮想通貨とは全く違い、価値が変動したり、外部で売買されることはありません。組織内でのみ使用する「ありがとう」を表現するデジタル証明書です。'
          },
          {
            question: 'なぜ現金ではなくトークンなのですか？',
            answer: '現金だと「お金のため」の感謝になってしまい、本来の目的である「感謝文化の醸成」から離れてしまいます。トークンなら純粋な感謝の気持ちを表現でき、組織全体の文化向上につながります。'
          },
          {
            question: '未上場・非上場トークンとは何ですか？',
            answer: '証券取引所で売買されない、完全に社内限定のトークンという意味です。外部の投資家が売買することはなく、価格変動もありません。あくまで組織内の感謝を表現するためだけの仕組みです。'
          },
          {
            question: 'トークンのセキュリティは大丈夫ですか？',
            answer: '金融機関レベルのセキュリティで保護されています。また、外部取引所に接続されていないため、ハッキングなどのリスクも最小限です。'
          }
        ]
      },
      'link-2': {
        title: 'システム・操作について',
        items: [
          {
            question: 'ITに詳しくないのですが、使えますか？',
            answer: 'はい、スマートフォンでメッセージを送るのと同じくらい簡単です。「ありがとう」ボタンを押して、メッセージを書くだけ。難しい設定は一切ありません。'
          },
          {
            question: 'スマートフォンでも使えますか？',
            answer: 'はい、スマートフォンでも利用できるレスポンシブウェブデザインを標準搭載しています。アクセスするデバイスの画面サイズに最適化されるので安心です。スマートフォンでも簡単操作で完結するので、外出先でも気軽に感謝を送ることができます。'
          }
        ]
      },
      'link-3': {
        title: '運用・制度について',
        items: [
          {
            question: '既存の評価制度に影響しますか？',
            answer: 'p2p bonusは既存の評価制度を「補完」するものです。人事評価への反映方法は組織が自由に決められます。参考データとして活用する企業が多いです。'
          },
          {
            question: '悪用や不正使用の心配はありませんか？',
            answer: '全ての取引は記録され、管理者が監視できます。また、異常なパターン（特定の人同士だけでの交換など）は自動で検出・警告される仕組みになっています。'
          },
          {
            question: '本当に公平な評価になりますか？',
            answer: '多くの同僚からの評価なので、一人の主観に左右されません。また、データとして蓄積されるため、評価の根拠が明確になり、従来よりも公平性が向上します。'
          },
          {
            question: 'プライバシーは守られますか？',
            answer: '感謝メッセージの送受信は当事者間でのみ表示され、他の人に見られることはありません。管理者も統計データのみ閲覧可能です。'
          }
        ]
      },
      'link-4': {
        title: '効果・導入について',
        items: [
          {
            question: '本当に効果はありますか？',
            answer: '導入企業の90%以上で「社内コミュニケーションの改善」「エンゲージメント向上」を実感いただいています。'
          },
          {
            question: 'どのくらいで効果が出ますか？',
            answer: '多くの企業で2-3週間後から「感謝を伝える文化」の変化を実感し、1-2ヶ月後から組織全体の雰囲気向上を実感されています。'
          },
          {
            question: '費用はどのくらいかかりますか？',
            answer: '従業員1人あたり月額数百円程度です。実は組織に重要な存在の1人の離職を防げれば、数年分の費用をペイできる計算になります。詳しい料金は企業規模に応じて設定されます。まずはご相談ください。'
          },
          {
            question: '小さな会社でも導入できますか？',
            answer: '10名程度の企業様から導入いただいています。むしろ小さな組織の方が、一人ひとりの貢献の価値が大きいため、効果を実感しやすいです。'
          }
        ]
      },
      'link-5': {
        title: 'p2p bonus・感謝文化について',
        items: [
          {
            question: 'p2p bonusって何ですか？',
            answer: '同僚同士が相互に評価し合う制度です。従来の「上司→部下」の一方向評価ではなく、「同僚同士」で日々の感謝や評価を交換する新しい組織制度です。p2p bonusはこの仕組みをベースにトークンを効果的に送り合うシステムとして開発されています。'
          },
          {
            question: '強制的に感謝させるのは不自然では？',
            answer: '強制ではありません。自然に生まれた感謝の気持ちを「表現しやすくする」ツールです。今まで心の中にあった「ありがとう」を、気軽に伝えられるようになります。'
          },
          {
            question: '表面的な感謝になってしまいませんか？',
            answer: '感謝の理由を具体的に書く仕組みなので、表面的ではなく本質的な感謝が生まれます。「なぜ感謝するのか」が明確になることで、より深いコミュニケーションにつながります。'
          },
          {
            question: '派閥や偏りが生まれませんか？',
            answer: 'データ分析により、偏った送受信パターンは検出できます。また、多様な人からの評価が集まるため、特定のグループだけの評価に偏ることは防げます。'
          }
        ]
      },
      'link-6': {
        title: '導入・サポートについて',
        items: [
          {
            question: '導入までどのくらい時間がかかりますか？',
            answer: '最短2週間で導入完了できます。'
          },
          {
            question: 'サポート体制はどうなっていますか？',
            answer: '導入後サポートはメールやチャットで対応いたします。運用方法の相談や効果測定のお手伝いをいたします。技術的なトラブルにも迅速に対応いたしますのでご安心ください。'
          },
          {
            question: '無料で試すことはできますか？',
            answer: '汎用デモ版は無料でご提供可能です。ただし、貴社用にカスタマイズされたデモのご提供には別途費用がかかります。汎用デモ版は2週間の無料トライアル仕様となっています。期間内に実際にご利用いただき、効果を実感してから正式導入をご検討ください。'
          }
        ]
      }
    }
  };

  useEffect(() => {
    Object.entries(faqData.categories).forEach(([categoryId, category]) => {
      category.items.forEach((_, index) => {
        const itemKey = `${categoryId}-${index}`;
        const detailElement = detailRefs.current[itemKey];
        
        if (detailElement) {
          gsap.set(detailElement, { height: 0, overflow: 'hidden' });
        }
      });
    });
  }, []);

  const toggleItem = (categoryId: string, itemIndex: number): void => {
    const itemKey = `${categoryId}-${itemIndex}`;
    const isCurrentlyActive = activeItems[itemKey];
    const detailElement = detailRefs.current[itemKey];
    const arrowElement = arrowRefs.current[itemKey];

    if (!detailElement || !arrowElement) return;

    setActiveItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));

    if (isCurrentlyActive) {
      gsap.to(detailElement, {
        height: 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
      
      gsap.to(arrowElement, {
        rotation: 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
    } else {
      gsap.set(detailElement, { height: 'auto' });
      const fullHeight = detailElement.offsetHeight;
      gsap.set(detailElement, { height: 0 });
      
      gsap.to(detailElement, {
        height: fullHeight,
        duration: 0.3,
        ease: "power2.inOut"
      });
      
      gsap.to(arrowElement, {
        rotation: 180,
        duration: 0.3,
        ease: "power2.inOut"
      });
    }
  };

  const scrollToSection = (linkId: string): void => {
    const element = document.getElementById(linkId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="md:px-12 md:py-48 px-12 py-32">
      <h2 className="text-[6.4rem] font-semibold tracking-widest mb-32 text-center max-md:text-[3.8rem] max-md:mb-20 js-list">よくある質問</h2>
      
      <ul className="flex flex-wrap justify-center gap-8 max-w-[92rem] ml-auto mr-auto mb-32 max-md:gap-4 max-md:mb-24 js-list">
        {faqData.tabs.map((tab) => (
          <li key={tab.id} className='max-md:w-full'>
            <a 
              href={`#${tab.id}`}
              className="max-md:w-full border-[solid] border-[1px] border-[#333333] bg-[#fff] rounded-2xl flex items-center gap-4 p-8 text-[1.6rem] font-medium tracking-widest [transition:0.3s_ease-in-out] max-md:text-[1.7rem] max-md:leading-normal max-md:p-6 hover:scale-[0.95]"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(tab.id);
              }}
            >
              {tab.title}
              <img className="max-md:ml-auto" src="/assets/img/arw-4.svg" alt="arrow" />
            </a>
          </li>
        ))}
      </ul>

      {Object.entries(faqData.categories).map(([categoryId, category]) => (
        <div key={categoryId} className="max-w-[92rem] ml-auto mr-auto js-list md:mb-48 last:!mb-0 mb-[6rem]">
          <h3 id={categoryId} className="text-center text-[3.6rem] font-medium mb-16 max-md:text-[2.6rem] max-md:leading-normal">
            {categoryId === 'link-5' ? (
              <>
                p2p bonus
                <br className="md:hidden" />
                ・感謝文化について
              </>
            ) : (
              category.title
            )}
          </h3>
          
          {category.items.map((item, index) => {
            const itemKey = `${categoryId}-${index}`;
            const isActive = activeItems[itemKey];
            
            return (
              <dl key={index} className="rounded-[2rem] border-[solid] border-[1px] border-[#fe1d37] bg-[#fff] js-list mb-[2.4rem] last:mb-0">
                <dt 
                  className="js-summary flex items-center gap-8 pl-16 pr-32 py-16 cursor-pointer relative max-md:pl-8 max-md:pr-20 max-md:py-12 max-md:gap-6"
                  onClick={() => toggleItem(categoryId, index)}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="text-[3rem] font-['Roboto'] text-[#fe1d37] font-semibold max-md:text-[2.4rem] max-md:leading-[1.2]">Q</span>
                  <p className="text-[2.2rem] font-semibold leading-normal tracking-widest text-[#fe1d37] max-md:text-[1.8rem]">{item.question}</p>
                  <img 
                    ref={(el) => { arrowRefs.current[itemKey] = el; }}
                    className="absolute right-12 top-2/4 -translate-y-1/2 w-20 max-md:w-12 max-md:right-[1.6rem]"
                    src="/assets/img/arw-5.svg" 
                    alt="" 
                  />
                </dt>
                <dd 
                  ref={(el) => { detailRefs.current[itemKey] = el; }}
                  className="js-detail overflow-hidden"
                >
                  <div className="md:pl-32 md:pr-20 md:pb-16 pl-8 pr-8 pb-8">
                    <p className="text-[1.6rem] leading-[1.8] md:tracking-widest">{item.answer}</p>
                  </div>
                </dd>
              </dl>
            );
          })}
        </div>
      ))}
    </section>
  );
};

export default FAQ;