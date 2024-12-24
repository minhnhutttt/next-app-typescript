"use client";

import Button from "@/components/button";
import { ReactNode } from "react";

const ResultItem = ({type, weather = 'sun', text, note}: {type: string, weather: 'sun' | 'rain', text: ReactNode, note: ReactNode}) => (
    <div className={`w-[330px] md:w-[294px] max-md:py-1.5 border border-[#8C7366]  ${weather == 'sun' ? 'text-[#9E6222] bg-[url(/assets/images/result-sun-bg.png)]' : 'text-[#095285] bg-[url(/assets/images/result-rain-bg.png)]'}`}>
        <div className={`flex py-2.5 px-1.5 md:p-2.5 bg-no-repeat bg-[position:top_center,_bottom_center] md:flex-col items-center max-md:gap-3 ${weather == 'sun' ? 'max-md:bg-[url(/assets/images/result-border-sun-sp.png),url(/assets/images/result-border-sun-sp.png)]' : 'max-md:bg-[url(/assets/images/result-border-rain-sp.png),url(/assets/images/result-border-rain-sp.png)]'}`}>
        <div className="flex justify-center max-md:w-[150px]">
            <div className="relative">
                <div className="absolute font-['Hiragino_Mincho_ProN'] text-center text-[40px] md:text-[53px] font-semibold uppercase inset-0 flex items-end justify-center pb-3 md:pb-5">
                    {type}
                </div>
                {weather == 'sun' ?
                    <img src="/assets/images/result-sun.png" alt="" />
                    :
                    <img src="/assets/images/result-rain.png" alt="" />
                }
            </div>
        </div>
        <div className={`w-full max-md:flex-1 text-center md:h-[135px] flex items-center justify-center flex-col md:mt-5 bg-repeat-x bg-[position:top_center,_bottom_center] ${weather == 'sun' ? 'md:bg-[url(/assets/images/result-border-sun.png),url(/assets/images/result-border-sun.png)]' : 'md:bg-[url(/assets/images/result-border-rain.png),url(/assets/images/result-border-rain.png)]'}`}>
                <p className="text-[17px] md:text-[20px] font-semibold">{text}</p>
                <p className="text-[13px] md:text-[15px]">{note}</p>
        </div>
        </div>
    </div>
)

export default function Result() {
  return (
    <main>
      <div className="p-5 bg-[url('/assets/images/bg.png')] bg-cover bg-right-bottom bg-no-repeat max-md:min-h-screen md:h-screen relative">
        <div className="font-['Hiragino_Mincho_ProN'] flex flex-col h-full max-md:pt-20">
            <div className="flex flex-col flex-1 justify-center">
                <div className="w-full max-w-[940px] mx-auto flex max-md:flex-col max-md:items-center justify-center gap-5 lg:gap-9">
                    <ResultItem type="A" weather="sun" text={(<>静かなリフレッシュ散策</>)} note={(<>（上野・浅草エリア）</>)} />
                    <ResultItem type="B" weather="sun" text={(<>下町の芸術と<br />スイーツ満喫ツアー</>)} note={(<>（谷中・根津エリア）</>)} />
                    <ResultItem type="C" weather="rain" text={(<>雨の日のアートと<br />カフェめぐり</>)} note={(<>（上野・御徒町エリア）</>)} />
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
