'use client'

const Partnership = () => {
  return (
    <section className="mb-[256px] max-md:mb-[82px]">
      <div className="container">
        <div className="mx-auto max-w-[1200px] rounded-[12px] bg-[#eee] p-[6%]">
          <div>Partnership</div>
          <div className="text-[calc(24px_+_2vw)]">
            私たちのリソースをプロジェクトで活用しませんか？
          </div>
          <div className="mb-[24px]">
          株式会社 Yumeaciは、WEB制作・システム開発、アパレル製品やノベルティグッズの企画を通じて、常に最新のデジタル技術とクリエイティブなトレンドを追求し、それをお客様のビジネスに最大限に活かしています。また、カスタマイズされたシステム開発ソリューションや独自のアパレル・ノベルティグッズ企画により、ブランド価値の向上とビジネスの成長を力強く支援します。
          </div>
          <a
            className="flex max-w-[200px] items-center gap-[16px] uppercase leading-none"
            href="/about"
          >
            More About Us
            <div className="block flex aspect-square w-[2em] items-center justify-center rounded-full bg-white text-[21px]">
              <img
                src="/assets/images/arrow.svg"
                className="max-h-[50%]"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Partnership
