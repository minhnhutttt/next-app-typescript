"use client";

const data = [
  {
    title: "/assets/images/about-title-01.png",
    image: "/assets/images/about-img-01.png",
    text: "最新技術が集結した最先端の推し活体験！イベント参加クーポン機能付きNFTトレカをゲットしよう！",
    content: (
      <>
        Idol
        Questでは、指定された期間内に特定の場所に行かないともらえないNFTトレカが地図上に点在中！
        <br />
        NFTトレカの受け取り方はDIVER
        WalletをインストールしてQRコードを読み取るだけ！
        <br />
        全く新しい聖地巡礼体験で、推しとの絆をさらに深めよう！
      </>
    ),
  },
  {
    title: "/assets/images/about-title-02.png",
    image: "/assets/images/about-img-02.png",
    text: "推しのため、日本全国を駆け回れ！",
    content: (
      <>
        高精度の位置情報機能を使って、まるで宝探しのようにNFTトレカをゲットしよう！
        <br />
        様々な場所で獲得したNFTを推しが見れば、あなたの熱心な応援にきっと涙するはず…！
      </>
    ),
  },
  {
    title: "/assets/images/about-title-03.png",
    image: "/assets/images/about-img-03.png",
    text: (<>推しよ！<br className="md:hidden" />このトレカは完全に私のものだ！</>),
    content: (
      <>
        NFTだから、所有権を簡単かつスマートに証明できます。
        <br />
        握手会で推しと対面した際、あわてて持ち物を探す心配はもうありません。
      </>
    ),
  },
];

const About = () => {
  return (
    <section id="about" className="relative md:mt-[90px] mt-[60px] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto md:space-y-[180px] space-y-[50px]">
        {data.map((item, index) => (
          <div 
          data-scroll
            className="group flex items-center md:even:flex-row-reverse max-md:flex-col-reverse"
            key={index}
          >
            <div className="w-full md:w-[47%] md:px-10 px-5 max-md:py-8">
              <h4
                className={`max-lg:w-[200px] !delay-150 ${index % 2 === 0 ? "ani-slide-left" : "ani-slide-right"}`}
              >
                <img src={item.title} alt="" />
              </h4>
              <p className="ani-fade-up !delay-300 md:text-[28px] text-[20px] font-black md:py-[30px] py-5">
                {item.text}
              </p>
              <p className="ani-fade-up !delay-500 md:text-[18px] text-[14px]">{item.content}</p>
            </div>
            <div className={`flex-1 flex items-center md:group-odd:rounded-l-[50px] md:group-even:rounded-r-[50px] overflow-hidden ${index % 2 !== 0 ? "ani-slide-left" : "ani-slide-right"}`}>
              <img
                className="h-full w-full object-center md:min-h-[400px] object-cover"
                src={item.image}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
