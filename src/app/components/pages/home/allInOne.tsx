export default function AllInOne() {
  return (
    <section>
      <div className="relative bg-[url('/images/bg-all-in-one.jpg')] bg-left-bottom bg-cover">
        <div className="bg-[linear-gradient(109deg,_#184E97_3.82%,_#112F78_31.75%)] flex justify-center items-center gap-5 md:py-11 pt-12 pb-8 px-5 max-md:flex-col">
          <div className="">
            <img
              className="xl:max-w-full md:max-w-[160px] max-w-[130px]"
              src="/images/ic-all-in-one.png"
              alt="All in One システムサービス"
            />
          </div>
          <div className="text-white">
            <h5 className="xl:text-[76px] md:text-[5.278vw] [font-size:_clamp(20px,6.4vw,36px)] font-bold max-md:text-center">
              All in One システムサービス
            </h5>
            <p className="xl:text-[32px] md:text-[2.222vw] [font-size:_clamp(13px,3.4vw,20px)] font-semibold max-md:text-center">
              ウェブサイトに関する全てのお悩みを簡単解決！
            </p>
          </div>
        </div>
        <div className="pt-10 px-4">
          <div className="flex justify-center">
            <h5 className="text-center xl:text-[80px] lg:text-[60px] md:text-[50px] text-[24px] font-bold text-[#F9E84A] bg-[url('/images/line.png')] max-md:bg-[length:100%_auto] bg-no-repeat bg-bottom pb-6 md:pb-14 whitespace-nowrap">
              こんなお悩みありませんか？
            </h5>
          </div>
          <div className="flex justify-center md:pt-14 pt-6 md:pl-[21%]">
            <ul className="space-y-2">
              <li className="flex gap-3 md:gap-5 text-white font-bold lg:text-[40px] md:text-[30px] text-[16px]">
                <span>
                  <img
                    className="max-md:w-8"
                    src="/images/ic-list.png"
                    alt=""
                  />
                </span>
                <span>読み込み速度が遅い</span>
              </li>
              <li className="flex gap-3 md:gap-5 text-white font-bold lg:text-[40px] md:text-[30px] text-[16px]">
                <span>
                  <img
                    className="max-md:w-8"
                    src="/images/ic-list.png"
                    alt=""
                  />
                </span>
                <span>管理が手間</span>
              </li>
              <li className="flex gap-3 md:gap-5 text-white font-bold lg:text-[40px] md:text-[30px] text-[16px]">
                <span>
                  <img
                    className="max-md:w-8"
                    src="/images/ic-list.png"
                    alt=""
                  />
                </span>
                <span>ネット予約システムを導入したい</span>
              </li>
              <li className="flex gap-3 md:gap-5 text-white font-bold lg:text-[40px] md:text-[30px] text-[16px]">
                <span>
                  <img
                    className="max-md:w-8"
                    src="/images/ic-list.png"
                    alt=""
                  />
                </span>
                <span>キャストからも出勤登録して欲しい</span>
              </li>
              <li className="flex gap-3 md:gap-5 text-white font-bold lg:text-[40px] md:text-[30px] text-[16px]">
                <span>
                  <img
                    className="max-md:w-8"
                    src="/images/ic-list.png"
                    alt=""
                  />
                </span>
                <span>費用が高い</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center flex-col mt-14 md:mt-28 gap-4">
            <p className="lg:text-[80px] md:text-[50px] text-[24px] text-[#F9E84A] font-bold">
              そのお悩み
            </p>
            <figure className="md:-mb-20 -mb-8">
              <img
                className="max-md:w-[200px] max-lg:w-[260px]"
                src="/images/arrow-trouble.png"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-5 flex-col items-center pt-20 md:pt-[100px] lg:pt-[120px] lg:pb-[64px] md:pb-10 pb-8">
        <figure>
          <img
            className="max-md:max-w-[300px] max-lg:max-w-[400px]"
            src="/images/logo-lg.png"
            alt="Men's Esthe BAZOOKA"
          />
        </figure>
        <div className="flex justify-center mt-3 whitespace-nowrap">
          <p className="relative text-center lg:text-[50px] md:text-[32px] text-[22px] font-bold">
            メンエスバズーカが解決します
            <span className="inline-block font-hiragino md:text-[59px] font-semibold rotate-[13.92deg] relative md:top-1">
              !
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
