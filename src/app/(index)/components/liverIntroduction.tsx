"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import Title from "@/components/title";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
    {
        link: 'https://17.live/s/u/9ef2c16f-e1cc-49c6-b4f0-0bf6c6c60089',
        image: '/assets/images/liver-img-01.png',
        text: '.mike.ꪔ̤',
    },
    {
        link: 'https://17.live/s/u/39ad4957-edf6-4ea4-89d1-8fabdb114439',
        image: '/assets/images/liver-img-02.png',
        text: '∞∞🦋のの💜nono🐝∞∞',
    },
    {
        link: 'https://17.live/s/u/445746a0-446c-4e08-af22-5638966e4c33',
        image: '/assets/images/liver-img-03.png',
        text: 'ゆうき🐱🍀🤎',
    },
    {
        link: 'https://17.live/ja/profile/u/0cf05a87-e8fc-49b8-8d9b-6aec50f22be0?af_c_id=profilepage&pid=InappShare&deep_link_value=media17%3A%2F%2Fv2%2Fstreamer_profile%2F0cf05a87-e8fc-49b8-8d9b-6aec50f22be0&af_force_deeplink=true',
        image: '/assets/images/liver-img-04.png',
        text: 'REiYAN',
    },
    {
        link: 'https://17.live/s/u/a44b4b9a-eb0a-4c63-91d1-f9eb8f7bc758',
        image: '/assets/images/liver-img-05.png',
        text: '💫FUUKA🍃🌹',
    },
    {
        link: 'https://17.live/s/u/94502084-c166-4328-928b-7e89b2c15f56',
        image: '/assets/images/liver-img-06.png',
        text: 'りり🌈🌻RIRI🐿️',
    },
    {
        link: 'https://17.live/s/u/efd145f1-8df9-4bb8-b6e0-7c753d327d6f',
        image: '/assets/images/liver-img-07.png',
        text: '.りさ🌷👗💘',
    },
    {
        link: 'https://17.live/s/u/80c04a37-7def-4a6e-89c1-48fc0c95536e',
        image: '/assets/images/liver-img-08.png',
        text: 'ぽて🌱ラヴァ..🧡',
    },
]

const LiverIntroduction = () => {
  const ref = useScrollAnimations(); 
    return (
      <div ref={ref} className="md:pt-[70px] pt-12 relative overflow-hidden">
        <div className="px-5">
          <Title>ライバー紹介</Title>
          <p className="fade-up flex flex-col items-center justify-center md:text-[28px] text-[24px] font-bold leading-none gap-2 mt-2">
            <span className="bg-[linear-gradient(90deg,_rgba(255,_125,_211,_0.30)_0%,_rgba(60,_232,_255,_0.30)_100%)] rounded-lg">LIVERS</span>
            <span className="bg-[linear-gradient(90deg,_rgba(255,_125,_211,_0.30)_0%,_rgba(60,_232,_255,_0.30)_100%)] rounded-lg">INTRODUCTION</span>
          </p>
        </div>
        <div className="fade-up mt-10 md:mt-16 relative overflow-hidden">
            <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            className="mySwiper relative !pb-[56px]"
        >
            {data.map((item, index) => (
                <SwiperSlide key={index} className="w-full px-5">
                    <a href={item.link} target="_blank" className="overflow-hidden bg-[#FF7DD3]/[0.2] [box-shadow:0px_4px_30px_0px_rgba(0,_0,_0,_0.10)]">
                        <figure className="rounded-[30px] overflow-hidden">
                            <img src={item.image} alt="" />
                        </figure>
                        <p className="md:text-[23px] text-[16px] text-[#82ACDE] text-center font-bold leading-[1.35] p-[15px]">
                            {item.text}
                        </p>
                    </a>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        <div className="fade-up flex justify-center mt-5">
            <a href="https://goodfellows17.info/talent/" target="_blank" className="rounded-[70px] flex items-center justify-center md:w-[480px] h-[70px] w-[330px] p-[3px] bg-[linear-gradient(90deg,_rgba(255,125,211,1)_0%,_rgba(60,232,255,1)_100%)]">
                <span className="w-full h-full flex items-center justify-center rounded-[70px] bg-white md:text-[20px] text-[18px] font-extrabold text-center relative">
                    <span>ライバーをもっと見る</span>
                    <img className="absolute right-2.5" src="/assets/images/ic-btn.svg" alt="" />
                </span>
            </a>
        </div>
      </div>
    );
  };
  
  export default LiverIntroduction;
  