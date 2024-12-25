"use client";

import Button from "@/components/button";
import { ReactNode, useState } from "react";

interface WeatherProps {
  weather?: "sun" | "rain";
}
interface PlanneItemProps extends WeatherProps {
  type: string;
  modal?: boolean;
}
interface ResultItemProps extends WeatherProps {
  type: string;
  text: ReactNode;
  note: ReactNode;
  data: dataAI[],
}

interface dataAI {
    morning: ReactNode,
    url: ReactNode,
    detail: ReactNode,
    cost: ReactNode,
  }

const dataA: dataAI[] = [
    {
        morning: (<>上野恩賜公園でのんびりリラックス</>),
        url: (<>上野恩賜公園</>),
        detail: (<>緑が広がる上野恩賜公園で、静かな朝の空気を感じながら散歩を楽しめます。<br />博物館や美術館もあり、軽い文化体験もおすすめです。</>),
        cost: (<>無料</>)
    },
    {
        morning: (<>みはし 上野本店であんみつセット<br />午前プランから昼食場所までの移動方法：徒歩約10分</>),
        url: (<>みはし 上野本店</>),
        detail: (<>老舗の甘味処で、人気のあんみつを堪能できます。甘さ控えめで、<br />散策の疲れを癒やします。</>),
        cost: (<>あんみつセット 900円程度</>)
    },
    {
        morning: (<>浅草寺参拝と仲見世通り散策<br />昼食場所から午後プランの移動方法：レンタル自転車で約15分</>),
        url: (<>浅草寺</>),
        detail: (<>浅草寺を参拝し、歴史ある仲見世通りで食べ歩きやお土産探しを楽しめます。日本文化に触れつつ、<br />ゆったりと散策できます。</>),
        cost: (<>無料（食べ歩きやお土産代は別途）</>)
    },
    {
        morning: (<>上野恩賜公園でのんびりリラックス</>),
        url: (<>上野恩賜公園</>),
        detail: (<>緑が広がる上野恩賜公園で、静かな朝の空気を感じながら散歩を楽しめます。<br />博物館や美術館もあり、軽い文化体験もおすすめです。</>),
        cost: (<>無料</>)
    }
]

const dataB: dataAI[] = [
    {
        morning: (<>上野恩賜公園でのんびりリラックス</>),
        url: (<>上野恩賜公園</>),
        detail: (<>風情ある谷中霊園を散策し、歴史的な墓石や寺院、そして谷中ならではの猫たちとの出会いを<br />楽しめます。のんびりとした雰囲気で、下町の歴史を肌で感じることができます。</>),
        cost: (<>無料</>)
    },
    {
        morning: (<>みはし カヤバ珈琲でレトロなオムライス<br />プランから昼食場所までの移動方法：徒歩約15分</>),
        url: (<>カヤバ珈琲</>),
        detail: (<>大正時代から続くレトロな喫茶店で、ふわふわのオムライスが人気。昭和の雰囲気を楽しみながら、<br /> 地元で愛される味を堪能できます。</>),
        cost: (<>オムライス 900円程度</>)
    },
    {
        morning: (<>根津神社で参拝とツツジ庭園散策<br />昼食場所から午後プランの移動方法：レンタル自転車で約15分</>),
        url: (<>根津神社</>),
        detail: (<>美しい塗りの建物と庭園が特徴的な根津神社を訪れ、静かな境内を散策します。季節によって<br />色とりどりのツツジが咲き誇り、フォトジェニックなスポットも多くあります。</>),
        cost: (<>無料（食べ歩きやお土産代は別途）</>)
    },
    {
        morning: (<>上野恩賜公園でのんびりリラックス</>),
        url: (<>上野恩賜公園</>),
        detail: (<>緑が広がる上野恩賜公園で、静かな朝の空気を感じながら散歩を楽しめます。<br />博物館や美術館もあり、軽い文化体験もおすすめです。</>),
        cost: (<>無料</>)
    }
]

const dataC: dataAI[] = [
    {
        morning: (<>東京国立博物館で日本美術鑑賞</>),
        url: (<>東京国立博物館</>),
        detail: (<>日本美術や歴史的な展示が豊富な博物館で、雨の日でもゆっくりと館内を楽しめます。国宝や<br />重要文化財など貴重な作品を観賞し、知識を深めることができます。</>),
        cost: (<>無料</>)
    },
    {
        morning: (<>みはし 上野恩賜公園でのんびりリラックス</>),
        url: (<>上野恩賜公園</>),
        detail: (<>風情ある谷中霊園を散策し、歴史的な墓石や寺院、そして谷中ならではの猫たちとの出会いを<br />楽しめます。のんびりとした雰囲気で、下町の歴史を肌で感じることができます。</>),
        cost: (<>無料</>)
    },
    {
        morning: (<>上野恩賜公園でのんびりリラックス</>),
        url: (<>上野恩賜公園</>),
        detail: (<>風情ある谷中霊園を散策し、歴史的な墓石や寺院、そして谷中ならではの猫たちとの出会いを<br />楽しめます。のんびりとした雰囲気で、下町の歴史を肌で感じることができます。</>),
        cost: (<>無料</>)
    },
    {
        morning: (<>上野恩賜公園でのんびりリラックス</>),
        url: (<>上野恩賜公園</>),
        detail: (<>風情ある谷中霊園を散策し、歴史的な墓石や寺院、そして谷中ならではの猫たちとの出会いを<br />楽しめます。のんびりとした雰囲気で、下町の歴史を肌で感じることができます。</>),
        cost: (<>無料</>)
    }
]

const weatherAssets = {
    sun: {
      image: "/assets/images/result-sun.png",
      textColor: "text-[#9E6222]",
      bgImage: "bg-[url(/assets/images/result-sun-bg.png)]",
      borderSp: "max-md:bg-[url(/assets/images/result-border-sun-sp.png),url(/assets/images/result-border-sun-sp.png)]",
      borderMd: "md:bg-[url(/assets/images/result-border-sun.png),url(/assets/images/result-border-sun.png)]",
      modalborder: "bg-[url(/assets/images/modal-border-sun.png)]",
      deco: "/assets/images/deco-sun.png",
    },
    rain: {
      image: "/assets/images/result-rain.png",
      textColor: "text-[#095285]",
      bgImage: "bg-[url(/assets/images/result-rain-bg.png)]",
      borderSp: "max-md:bg-[url(/assets/images/result-border-rain-sp.png),url(/assets/images/result-border-rain-sp.png)]",
      borderMd: "md:bg-[url(/assets/images/result-border-rain.png),url(/assets/images/result-border-rain.png)]",
      modalborder: "bg-[url(/assets/images/modal-border-rain.png)]",
      deco: "/assets/images/deco-rain.png",
    },
  };

const PlanneItem = ({ type, weather = "sun", modal }: PlanneItemProps) => {
    const { image, textColor } = weatherAssets[weather];
    return (
  <span className={`flex justify-center  ${textColor} ${modal ? 'w-[120px]' : 'max-md:w-[150px]'}`}>
    <span className="relative">
      <span className={`absolute inset-0 flex items-end justify-center font-['Hiragino_Mincho_ProN'] text-center uppercase font-semibold ${modal ? 'text-[35px] pb-1' : 'text-[40px] md:text-[53px] pb-3 md:pb-5'}`}>
        {type}
      </span>
      <img src={image} alt="" />
    </span>
  </span>
  )
};

const ResultItem = ({ type, weather = "sun", text, note, data }: ResultItemProps) => {
    const { textColor, bgImage, borderSp, borderMd, modalborder, deco } = weatherAssets[weather];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
    <button type="button"  onClick={() => setIsOpen((prev) => !prev)}
      className={`w-[330px] md:w-[294px] max-md:py-1.5 border border-[#8C7366] ${textColor} ${bgImage}`}
    >
      <div
        className={`flex py-2.5 px-1.5 md:p-2.5 bg-no-repeat bg-[position:top_center,_bottom_center] md:flex-col items-center max-md:gap-3 ${borderSp}`}
      >
        <PlanneItem type={type} weather={weather} />
        <div
          className={`w-full max-md:flex-1 text-center md:h-[135px] flex items-center justify-center flex-col md:mt-5 bg-repeat-x bg-[position:top_center,_bottom_center] ${borderMd}`}
        >
          <p className="text-[17px] md:text-[20px] font-semibold">{text}</p>
          <p className="text-[13px] md:text-[15px]">{note}</p>
        </div>
      </div>
    </button>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-[url('/assets/images/bg.png')] bg-cover bg-right-bottom bg-no-repeat p-5 z-10 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className={`w-full max-w-[792px] h-[calc(90%-60px)] border border-[#B4B4B4] py-2 px-5  bg-cover relative ${bgImage} ${textColor}`}>
        <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="absolute text-black bottom-[calc(100%+20px)] right-0 w-[134px] h-10 flex items-center justify-center rounded-lg border border-[#75A5BE] bg-[#BEF4EE]"
            >
              戻る
            </button>
          <div className="flex flex-col items-center h-full overflow-auto">
          <PlanneItem type={type} weather={weather} modal />
            <div className="flex w-full">
                <div className={`h-3 w-full mt-3 ${modalborder}`}></div>
            </div>
            <div className="text-center mt-4">
                <p className="text-[18px] md:text-[23px] font-semibold">{text}</p>
                <p className="text-[14px] md:text-[19px]">{note}</p>
            </div>
            <div>
                {data.map((item, index) => (
                    <div className="group">
                    <div className="md:text-[14px] text-[13px] text-[#020200] py-5" key={index}>
                        <p className="flex">
                            <span className="min-w-[40px]">午前：</span>
                            <span>{item.morning}</span>
                        </p>
                        <p className="flex">
                            <span className="min-w-[40px]">URL：</span>
                            <span>{item.url}</span>
                        </p>
                        <p className="flex">
                            <span className="min-w-[40px]">詳細：</span>
                            <span>{item.detail}</span>
                        </p>
                        <p className="flex">
                            <span className="min-w-[40px]">予算：</span>
                            <span>{item.cost}</span>
                        </p>
                    </div>
                    <div className="group-last:hidden">
                        <img src={deco} alt="" />
                    </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Result() {
  return (
    <main>
      <div className="p-5 bg-[url('/assets/images/bg.png')] bg-cover bg-right-bottom bg-no-repeat max-md:min-h-screen md:h-screen relative">
        <div className="font-['Hiragino_Mincho_ProN'] flex flex-col h-full max-md:pt-20">
          <div className="flex flex-col flex-1 justify-center">
            <div className="w-full max-w-[940px] mx-auto flex max-md:flex-col max-md:items-center justify-center gap-5 lg:gap-9">
              <ResultItem
                type="A"
                weather="sun"
                text={<>静かなリフレッシュ散策</>}
                note={<>（上野・浅草エリア）</>}
                data={dataA}
              />
              <ResultItem
                type="B"
                weather="sun"
                text={
                  <>
                    下町の芸術と
                    <br />
                    スイーツ満喫ツアー
                  </>
                }
                note={<>（谷中・根津エリア）</>}
                data={dataB}
              />
              <ResultItem
                type="C"
                weather="rain"
                text={
                  <>
                    雨の日のアートと
                    <br />
                    カフェめぐり
                  </>
                }
                note={<>（上野・御徒町エリア）</>}
                data={dataC}
              />
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-5">
            <Button href="/" kind="link">
              戻る
            </Button>
            <Button href="/" kind="link">
              もう一度
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
