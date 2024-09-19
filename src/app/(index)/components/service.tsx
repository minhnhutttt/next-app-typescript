'use client'

const Service = () => {
  return (
    <>
      <section className="mb-[256px] max-md:mb-[82px]">
        <div className="container">
          <div className="mx-auto max-w-[1200px] text-center text-[calc(18px_+_2vw)] uppercase leading-[1.2]">
          ホームページ制作/ システム開発 / UI/UXデザイン / SEO対策 / アパレル製品の企画 / ノベルティグッズの企画
          </div>
        </div>
      </section>
      <section className="mb-[256px] max-md:mb-[82px]">
        <div className="container">
          <div className="sticky top-[3rem]  mb-[64px] font-anton text-[calc(24px_+_12vw)]">
            <h2 className="text-center uppercase leading-none" translate="no">
              our Service
            </h2>
          </div>
          <div className="flex flex-col gap-[16px]">
            <a
              className="sticky top-[10rem] block w-full bg-[#c9b5ab] p-[8%]"
              href="/web-development"
            >
              <div
                className="font-anton text-[calc(24px_+_2vw)] uppercase"
                translate="no"
              >
                Web Site Production
              </div>
              <div className="max-w-[600px] text-[21px] max-md:text-[18px]">
                Yumeaciのホームページ制作サービスは、クライアントのニーズに応じた魅力的で機能的なウェブサイトを提供します。最新のデザインとユーザーエクスペリエンス（UX）を重視し、訪問者が簡単に情報を見つけられるように構築します。Reactを使用して高性能なウェブアプリケーションを開発し、スムーズな操作性を実現しています。また、SEO対策も施し、検索エンジンでの visibility を高めることで、ビジネスの成長をサポートします。
              </div>
            </a>
            <a
              className="sticky top-[10rem] block w-full bg-[#ab9247] p-[8%]"
              href="/system-development"
            >
              <div
                className="font-anton text-[calc(24px_+_2vw)] uppercase"
                translate="no"
              >
                System development business
              </div>
              <div className="max-w-[600px] text-[21px] max-md:text-[18px]">
                Yumeaciのシステム開発事業では、企業の業務効率を向上させるためのカスタマイズされたソフトウェアソリューションを提供しています。Yumeaciの専門チームは、ニーズに合わせたシステム設計から開発、導入後のサポートまで、一貫して対応します。クライアントのビジョンを実現し、業務のデジタル化を促進します。
              </div>
            </a>
            <a
              className="sticky top-[10rem] block w-full bg-[#97b0bd] p-[8%]"
              href="/apparel"
            >
              <div
                className="font-anton text-[calc(24px_+_2vw)] uppercase"
                translate="no"
              >
                Planning of apparel products and novelty goods
              </div>
              <div className="max-w-[600px] text-[21px] max-md:text-[18px]">
                Yumeaciは、オリジナルアパレルやノベルティグッズの企画・制作にも力を入れています。トレンドを取り入れたデザインと高品質な素材を使用し、魅力的な商品を提供します。クライアントのブランド価値を高めるために、マーケットリサーチから商品企画、製造までをトータルでサポートします。
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service
