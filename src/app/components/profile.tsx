"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Profile = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative md:mt-[165px] mt-[100px]">
        <div className="fade-up text-center font-serif font-black">
            <p className="md:text-[23px] text-[18px]">メッセージ</p>
            <p className="md:text-[22px] text-[17px]">Hideki Tachibana</p>
        </div>
        <div className="md:pt-[170px] pt-7">
            <div className="fade-up bg-[url('/assets/images/bg-profile.png')] bg-[#243151] max-md:bg-[length:65vw_auto] bg-no-repeat bg-left-bottom">
            <div className="h-px"></div>
                <div className="w-full max-w-[1440px] mx-auto relative md:-mt-[9.766vw] xl:-mt-[125px] px-5">
                    <div className="flex gap-[34px] justify-center max-md:flex-col max-md:items-center">
                        <figure className="fade-up pt-10 md:pt-4">
                            <img src="/assets/images/avatar.png" alt="" />
                        </figure>
                        <div className="fade-up">
                            <div className="relative">
                                <p className="md:absolute max-md:text-[#FFF6F6] lg:text-[18px] text-[15px] inset-0 flex md:pt-[3.75vw] xl:pt-12 max-md:py-3 md:px-5">毎秒料理に生きてきた、世界に認められた橘秀希が選ぶ至高の酒</p>
                                <p className="font-italianno text-[22vw] md:text-[16.406vw] xl:text-[210px] text-[#A0A0A0]/[0.2] leading-[0.8]">
                                    Our Message
                                </p>
                            </div>
                            <p className="text-[#FFF6F6] md:text-[16px] text-[13px] max-w-[742px] leading-[1.7] max-md:mt-4">
                            “料理で世界へ飛び出したことで、私の人生は変わりました。私の使命は料理を作ることです。<br />料理にはお酒とのペアリングが不可欠で、それによって料理は一層素晴らしいものになります。<br /><br />海外での調理経験を経て、日本に生まれたことで気付いた日本の自然や文化の素晴らしさを存分に活かしたお酒を造ることが、私の天命だと感じました。<br />日本の豊かな風土と職人の技を結集して生み出す唯一無二の銘酒で、世界中の人々に人生を変えるような一杯を味わってほしいです。”
                            </p>
                        </div>
                    </div>
                    <div className="fade-up md:px-5 pt-10 pb-[100px]">
                        <div className="ml-auto w-full md:max-w-[1000px] max-w-[440px] flex max-md:flex-col">
                            <h3 className="lg:text-[55px] md:text-[44px] text-[33px] text-[#DCDCDC]/[0.3] font-black md:[writing-mode:vertical-rl] md:[text-orientation:mixed] tracking-[0.2em]">PROFILE</h3>
                            <span className="md:h-[448px] h-px w-full md:w-px bg-white max-md:my-4 md:mx-5"></span>
                            <p className="text-white md:text-[16px] text-[13px] leading-[1.6] font-inter">
                            倉本聰脚本のドラマ「ライスカレー」を観て、料理人の道を志す。<br />専門学校に進み、フレンチを修得。卒業後、ナゴヤキャッスルホテルに就職。<br />在カナダ日本大使館試験を受験、試験に合格。<br />渡航後、23歳で「在カナダ日本大使館」総料理長に抜擢。<br />2年の任期を全うし帰国。名古屋ヒルトンホテルに就職。<br /><br />料理の腕を磨くため、イタリア全土の修行の旅へ。<br />帰国後、愛知県を中心に全国のレストランのプロデュース及び、顧問、アドバイザーを多数務める。<br /><br />自身が経営する店舗が3年でおよそ50店舗に達し、外食アワードを受賞。<br /><br />2008年イタリアトリノで開催されるテッラマードレ、世界生産者会議では「世界1000人のシェフの1人」に選ばれる。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Profile;
