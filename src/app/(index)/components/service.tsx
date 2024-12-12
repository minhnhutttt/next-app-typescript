"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const data = [
    {
        image: '/assets/images/service-img-01.png',
        title: "カフェ・レストラン",
        content: (<>日常的に訪れるカフェやレストランでお食事を楽しみながら、デジタル資産を貯めることができます。<br />友人とのランチや家族とのディナーなど、普段の外食が資産形成につながります。</>)
    },
    {
        image: '/assets/images/service-img-02.png',
        title: "薬局・ドラッグストア",
        content: (<>日用品や医薬品の購入時にデジタル資産を獲得できます。 生活必需品を買うだけで、デジタル資産が貯まるので、日常の買い物がさらにお得になります。</>)
    },
    {
        image: '/assets/images/service-img-03.png',
        title: "スーパーマーケット・食料品店",
        content: (<>毎日の食材や日用品の買い物でデジタル資産を貯めることができます。<br />頻繁に利用する店舗だからこそ、貯まりやすく、家計の助けにもなります。</>)
    },
    {
        image: '/assets/images/service-img-04.png',
        title: "コンビニエンスストア",
        content: (<>ちょっとした買い物や急な必要品の購入時にもデジタル資産を獲得できます。<br />24時間営業なので、いつでも資産形成のチャンスがあります。</>)
    },
    {
        image: '/assets/images/service-img-05.png',
        title: "家電量販店",
        content: (<>家電製品や電子機器の購入時にデジタル資産を受け取れます。<br />高額な買い物ほど還元されるデジタル資産も多く、大きな資産形成につながります。</>)
    },
    {
        image: '/assets/images/service-img-06.png',
        title: "書店・文具店",
        content: (<>本や雑誌、文具の購入でデジタル資産を貯めることができます。<br />学習や趣味のための買い物が、将来の資産形成に結びつきます。</>)
    },
    {
        image: '/assets/images/service-img-07.png',
        title: "旅行代理店・ホテル",
        content: (<>旅行や出張の予約でデジタル資産を受け取れます。<br />大きな出費がそのまま資産形成に直結します。</>)
    },
    {
        image: '/assets/images/service-img-08.png',
        title: "ガソリンスタンド・カーサービス",
        content: (<>車の燃料補給やメンテナンスでデジタル資産を貯めることができます。<br />ドライブや通勤のついでに資産形成が可能です。</>)
    },
    {
        image: '/assets/images/service-img-09.png',
        title: "スポーツ用品店",
        content: (<>スポーツウェアや器具の購入でデジタル資産を獲得。<br />健康的な趣味を楽しみながら、資産も増やせます。</>)
    },
    {
        image: '/assets/images/service-img-10.png',
        title: "映画館・エンターテインメント施設",
        content: (<>映画鑑賞やコンサート、イベントのチケット購入でデジタル資産を貯められます。<br />娯楽を楽しみながら資産形成ができます。
            </>)
    },
    {
        image: '/assets/images/service-img-11.png',
        title: "美容院・理容室",
        content: (<>ヘアカットやカラーリングなど、美容院・理容室での施術時にデジタル資産を受け取れます。<br />身だしなみを整えながら、資産も増やせる一石二鳥のサービスです。</>)
    },
    {
        image: '/assets/images/service-img-12.png',
        title: "ネイルサロン・エステサロン",
        content: (<>ネイルケアやエステの施術でデジタル資産を獲得。<br />自分磨きをしながら、デジタル資産も貯めることができます。</>)
    },
    {
        image: '/assets/images/service-img-13.png',
        title: "フィットネスジム・ヨガスタジオ",
        content: (<>健康維持やリフレッシュのためにジムやヨガスタジオを利用すると、デジタル資産をゲットできます。<br />体を鍛えながら、資産形成も同時に進められます。</>)
    },
    {
        image: '/assets/images/service-img-14.png',
        title: "ペットショップ・動物病院",
        content: (<>ペット用品の購入やペットのケアでデジタル資産を獲得。<br />大切な家族であるペットとの生活が、さらに価値あるものになります。</>)
    }
]

const Service = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative md:pt-[240px] pt-[120px]">
        <h3 className="flex items-start px-10 md:text-[48px] font-black text-[24px] gap-4 tracking-widest">
            <img src="/assets/images/diamond.png" alt="" />
            イーサリアムがもらえるサービス
        </h3>
        <div className="ani-content w-full mt-10">
            <Swiper
                slidesPerView={"auto"}
                className="mySwiper"
            >
                {data.map((item, index) => (
                <SwiperSlide key={index} className="!w-[300px] md:!w-[560px] md:min-h-[560px] bg-white rounded-[20px] overflow-hidden ml-5 md:ml-10">
                    <div><img src={item.image} alt="" /></div>
                    <div className="md:pt-[42px] py-7 px-4 md:px-5">
                        <p className="text-center md:text-[24px] text-[18px] font-black pb-2">{item.title}</p>
                        <span className="mx-auto block w-9 h-1 bg-[#FFB601]"></span>
                        <p className="md:text-[18px] text-[15px] mt-5">
                            {item.content}
                        </p>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
    </section>
  );
};

export default Service;
