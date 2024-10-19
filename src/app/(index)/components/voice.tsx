"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        image:  '/assets/images/ようこさん.jpg',
        title: 'ようこさん',
        text: '機械音痴で話す事も苦手で配信する事が初めてだった私が楽しく配信できているのは親身になってアドバイスを頂けるグッドフェローズさんのおかげです。'
    },
    {
        image:  '/assets/images/萌moeさん.jpg',
        title: '萌moeさん',
        text: '0から始めた私でも配信の仕方や気をつけること、オススメの配信器具まで教えてくれて心強かったです！ライバーさんもすごくフレンドリーで話しやすい！相談しやすい！グットフェローズに入れて本当にラッキー！良かったです⁽⁽ ◝(´꒵ `◍)◟ ₎₎'
    },
    {
        image: "/assets/images/ゆきちmama.jpg",
        title: 'ゆきちmama',
        text: "オフ会を開いて所属ライバー同士の交流できたり、社長が配信して、行き詰まってるライバーさん達を指導してくれたり、いろいろと背中を押してくれる！ GoodFellowsじゃなかったら、私は配信するのを辞めて普通の生活に戻ってたかもしれません。"
    },
    {
        image:  '/assets/images/このかkikuchiさん.jpg',
        title: "このかkikuchiさん",
        text: '当月のトータル配信日数やギフト数などが書かれた表が月の途中で何度か送ってもらえるので他ライバーとの比較もできるので、自分の配信頻度など途中で見直すことができます。'
    },
    {
        image:  '/assets/images/ののnonoさん.jpg',
        title: '∞∞🦋のの💜nono🐝∞∞',
        text: '機械音痴で話す事も苦手で配信する事が初めてだった私が楽しく配信できているのは親身になってアドバイスを頂けるグッドフェローズさんのおかげです。'
    },
    {
        image:  '/assets/images/加工01さん.jpg',
        title: '加工01さん',
        text: '同じ事務所の方々がとっても暖かく支えてくれて、とても良くしてくれるのもあってすごく居心地がいい。 本当にグッドフェローズ入れて良かったと心から思います😭 ありがとうございます🥺'
    },
    {
        image:  '/assets/images/ラプンrapunzelさん.jpg',
        title: 'ラプンrapunzelさん',
        text: '事務所の方が1人ひとりに合ったアドバイスをくれたり、とにかく熱心に協力してくれて、向き合ってくれる! 又、「何かあったら直ぐに相談して下さい。」と、頻繁おっしゃってくださいますし、すごい心強いです！'
    },
    {
        image:  '/assets/images/れなRenapomさん.jpg',
        title: 'れなRenapomさん',
        text: 'ライバー、リスナー経験がある社長だから的確なアドバイスがもらえる。 基本自由にやらせてくれるし、悩んでる事に対してはしっかりと意見をくれたりアドバイスしてくれる。'
    },
]

const Voice = () => {
  const ref = useScrollAnimations();
  return <section ref={ref} className="px-5 md:pt-[50px]">
        <div className="">
            <h4 className="md:text-[28px] text-[20px] text-center font-bold leading-[1.3]">
                メッセージ...<br />配信中のライバーさんからの一言
            </h4>
            <p className="text-center md:text-[18px] text-[16px] mt-1"> 感想をインタビューしてきました。 </p>
        </div>
        <div className="fade-up mt-16 relative overflow-hidden">
            <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            className="mySwiper relative !pb-[56px]"
        >
            {data.map((item, index) => (
                <SwiperSlide key={index} className="w-full px-5">
                    <div className="overflow-hidden bg-[#FF7DD3]/[0.2] [box-shadow:0px_4px_30px_0px_rgba(0,_0,_0,_0.10)]">
                        <figure className="rounded-[30px] overflow-hidden aspect-square rounded-full">
                            <img src={item.image} alt="" />
                        </figure>
                        <p className="md:text-[23px] text-[16px] text-[#82ACDE] text-center font-bold leading-[1.35] p-[15px]">
                            {item.text}
                        </p>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
  </section>;
};

export default Voice;
