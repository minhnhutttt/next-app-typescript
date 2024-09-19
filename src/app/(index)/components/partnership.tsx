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
            私たちは日本だけでなく、ベトナム、台湾、米国、英国など、様々な国の企業のプロジェクトに参加してきました。私たちの強みはコストだけでなく、デジタルマーケティングにおける支援実績と設立から積み上げてきた調査や代理店としての経験です。それは、私たちがデジタル領域や調査・代行領域における最新のトレンドや技術を探求し、お客様のビジネスに活かしているからです。そしてAIのパワーをビジネスに取り入れることに成功したことで、お客様の課題解決のサポートを一層効率的に精度高く行えるリソースへと進化しています。
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
