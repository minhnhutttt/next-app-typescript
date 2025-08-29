const data = [
  {
    id: '1',
    image: '/assets/images/benefits-img-01.png',
    title: '「あの店、スタッフさんにチップ送れるんだって！」と話題になる',
    conventional: 'ポイント貯めて自分で使うだけ',
    activity: '獲得したドルで複数の選択肢が手に入る',
    list: [
      'スタッフにチップとして送金',
      'そのまま保有して他のサービスで利用',
      '推し活感覚でお気に入りのスタッフを応援',
    ],
  },
  {
    id: '2',
    image: '/assets/images/benefits-img-02.png',
    title: '「チップがもらえる店」vs「普通の時給の店」どちらで働きたい？',
    conventional: 'ポイント貯めて自分で使うだけ',
    activity: '時給1,000円、どんなに頑張っても1,000円',
    list: [
      'お客様から直接チップを受け取れる機会',
      '時給以外の収入確保で働く姿勢・サービス品質が自然に向上',
      '店舗で継続して働き続ける動機になり、人材定着率も向上',
    ],
  },
  {
    id: '3',
    image: '/assets/images/benefits-img-03.png',
    title: '三方良しの新しいビジネスモデルで持続的な成長を実現',
    conventional: 'お客様・スタッフどちらかのメリットに偏る',
    activity: 'お客様・スタッフ両方に選ばれる理由を獲得',
    list: [
      '規顧客獲得の新しいきっかけ',
      '顧客単価やリピート率の向上による業績改善期待',
      'スタッフ採用・確保での優位性',
    ],
  },
];

export default function Benefits() {
  return (
    <section className="relative px-5 pt-6 pb-15 md:pb-[74px]">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="flex items-center justify-center">
          <h4 className="[filter:drop-shadow(2px_7px_20px_rgba(0,_0,_0,_0.25))]">
            <img src="/assets/images/benefits-title.svg" alt="" />
          </h4>
        </div>
        <div className="mt-8 flex flex-wrap gap-10 md:mt-13 md:gap-x-5 md:gap-y-10">
          {data.map((item) => (
            <div className="relative md:w-[400px]" key={item.id}>
              <div className="u-text-stroke-8 absolute inset-x-0 top-0 z-10 text-center text-[50px] leading-none font-black text-[#0046B8] md:text-[98px]">
                {item.id}
              </div>
              <div className="relative">
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
