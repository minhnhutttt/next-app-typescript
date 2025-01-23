"use client";

import Button from "@/components/button";
import { dataAI, ResultItem } from "@/components/resultItem";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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



export default function Result() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=> {
    
  })
  setTimeout(() => {
    console.log(searchParams);
    setIsLoading(false);
  }, 2000); 
  if (isLoading) {
    return <div className="h-screen flex items-center justify-center bg-[url('/assets/images/bg.png')] bg-cover bg-right-bottom bg-no-repeat p-5 relative">
      <img src="/assets/images/loading.png" alt="" />
    </div>;
  }
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
            <Button href="/personal" kind="link">
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
