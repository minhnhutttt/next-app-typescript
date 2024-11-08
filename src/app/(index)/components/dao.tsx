"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const members = [
  "/assets/images/member01.png",
  "/assets/images/member02.png",
  "/assets/images/member03.png",
  "/assets/images/member04.png",
  "/assets/images/member05.png",
  "/assets/images/member01.png",
  "/assets/images/member02.png",
  "/assets/images/member03.png",
  "/assets/images/member04.png",
  "/assets/images/member05.png",
];

const Dao = () => {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      id="dao"
      className="bg-[#0F0F0F] bg-[url('/assets/images/dao-bg.png')] bg-[length:100%_auto] bg-no-repeat md:pb-[100px] pb-16"
    >
      <div className="w-full max-w-[440px] md:max-w-[1440px] mx-auto xl:px-10 px-5 md:pt-[100px] pt-16">
        <div className="flex md:gap-12 gap-8 text-white max-md:flex-col-reverse">
          <div className="md:pt-9 md:pb-[100px]">
            <h3 className="fade-up md:text-[80px] text-[36px] font-bold leading-none md:mb-12 mb-8">
              DAO organization <br />
              management
            </h3>
            <p className="fade-up max-w-[620px] md:text-[20px] text-[16px] leading-[1.3]">
              SANTA Coin will gradually strengthen its characteristics as a DAO
              (Decentralized Autonomous Organization) in order to maximize the
              transparency and efficiency of support. We aim to build a
              sustainable support ecosystem that brings together supporters,
              recipients, and management teams.
            </p>
          </div>
          <div className="fade-up ">
            <img src="/assets/images/dao-img.png" alt="" />
          </div>
        </div>
        <div className="flex justify-center max-md:flex-col text-white lg:gap-[90px] gap-12 md:mt-[70px] mt-10">
          <div className="fade-up max-w-[400px] md:max-w-[350px] lg:max-w-[422px] md:mt-[-120px]">
            <h5 className="flex justify-center items-center md:text-[24px] text-[18px] font-bold md:mb-[30px] mb-5 gap-1">
              <img src="/assets/images/ic-bell.svg" alt="" />
              Basic concepts
            </h5>
            <p className="md:text-[16px] text-[14px] leading-loose">
              SANTA Coin will gradually strengthen its characteristics as a DAO
              (Decentralized Autonomous Organization) in order to maximize the
              transparency and efficiency of support. We aim to build a
              sustainable support ecosystem that brings together supporters,
              recipients, and management teams.
            </p>
          </div>
          <div className="fade-up max-w-[400px]">
            <h5 className="flex justify-center items-center md:text-[24px] text-[18px] font-bold md:mb-[30px] mb-5 gap-1">
              <img src="/assets/images/ic-bell.svg" alt="" />
              Phased implementation plan
            </h5>
            <div className="space-y-5 md:space-y-[30px]">
              <div>
                <p className="md:text-[18px] text-[16px] font-bold">
                  Pilot phase (December 2024)
                </p>
                <ul className="md:text-[16px] text-[14px]">
                  <li className="flex gap-2">
                    <span>●</span>Basic decision making by the management team
                  </li>
                  <li className="flex gap-2">
                    <span>●</span>Information disclosure to ensure transparency
                  </li>
                  <li className="flex gap-2">
                    <span>●</span>Gathering community feedback
                  </li>
                </ul>
              </div>
              <div>
                <p className="md:text-[18px] text-[16px] font-bold">
                  Full version (2025~)
                </p>
                <ul className="md:text-[16px] text-[14px]">
                  <li className="flex gap-2">
                    <span>●</span>Voting system by token holders
                  </li>
                  <li className="flex gap-2">
                    <span>●</span>Community suggestion system
                  </li>
                  <li className="flex gap-2">
                    <span>●</span>Multisig fund management
                  </li>
                  <li className="flex gap-2">
                    <span>●</span>Decentralized decision-making process
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-[70px] mt-12">
        <Swiper
          slidesPerView={3}
          loop={true}
          spaceBetween={16}
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {members.map((member, index) => (
            <SwiperSlide key={index}>
              <img src={member} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="fade-up flex justify-center mt-16 md:mt-20">
        <a
          href="/"
          className="flex items-center justify-center w-[280px] md:w-[310px] h-[50px] md:h-[62px] bg-[#FF3217] rounded-full text-white font-medium md:text-[28px] text-[20px]"
        >
          WHITEPAPER
        </a>
      </div>
    </section>
  );
};

export default Dao;
