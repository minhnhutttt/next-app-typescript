const Greeting = () => {
    return (
      <section className="mb-[256px] max-md:mb-[82px]">
        <div className="container">
          <div className="mb-[64px] font-anton text-[calc(24px_+_12vw)] max-md:mb-[32px]">
            <h2 className="text-center uppercase leading-none" translate="no">
                CEO&apos;s Greeting
            </h2>
          </div>
          <div className="flex items-center justify-center gap-[4vw] max-md:flex-col">
            <div className="max-md:w-full max-lg:w-1/2 max-md:flex max-md:justify-center">
                <img src="/assets/images/greeting.png" alt="" />
            </div>
            <div className="flex-1">
                <div className="py-[4%]">
                <div className="text-[20px] max-md:text-[16px]">
                プロサッカー選手として１７年間活動し2022年限りで現役を引退しました。<br /><br />
                小学生の頃にサッカーを始め、プロサッカー選手になりたいという夢を追いかけこれまで夢中で走り続けてきました。<br /><br />
                夢を叶える中で沢山の協力やサポートをしてもらいました。夢であったサッカー選手という人生の第一章を終えたいま、次のステージでは反対に個人や企業の夢をアシストしたいという思いから『株式会社ユメアシ』を設立しました。<br /><br />
                新たな夢に向かってこれからも走り続けます。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Greeting
  