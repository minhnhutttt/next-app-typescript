import TitleBlockChain from "@/components/titles/title-block-chain";
import Article, { dataArticle } from "./components/article";
import TitleAI from "@/components/titles/title-ai";
import TitleWebSite from "@/components/titles/title-web-site";
import TitleAD from "@/components/titles/title-ad";
import TitleMarketing from "@/components/titles/title-marketing";
import TitleFx from "@/components/titles/title-fx";
import BarCode from "@/components/barcode";

const data: dataArticle[] = [
  {
    date: '2024.4.18',
    title: 'AIが駆動するノンプレイヤーキャラクターがゲームの未来をつくる'
  },
  {
    date: '2024.4.18',
    title: 'AIが駆動するノンプレイヤーキャラクターがゲームの未来をつくる'
  }
]

export default function Home() {
  return (
    <main>
      <div className="md:px-4 pt-3 md:pb-[500px] pb-[200px] relative">
          <h2 className="pb-4 max-md:hidden">
              <img className="dark:hidden" src="/assets/images/logo.png" alt="" />
              <img className="hidden dark:block" src="/assets/images/logo-dark.png" alt="" />
          </h2>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-8 md:gap-y-12 max-md:border-t border-black dark:border-white relative z-10">
            <Article data={data}>
              <TitleAI rect="md:h-[12.5px] h-[14px]" />
            </Article>
            <Article data={data}>
              <TitleBlockChain rect="md:h-[12.5px] h-[14px]" />
            </Article>
            <Article data={data}>
              <TitleWebSite rect="md:h-[12.5px] h-[14px]" />
            </Article>
            <Article data={data}>
              <TitleAD rect="md:h-[12.5px] h-[14px]" />
            </Article>
            <Article data={data}>
              <TitleMarketing rect="md:h-[12.5px] h-[14px]" />
            </Article>
            <Article data={data}>
              <TitleFx rect="md:h-[12.5px] h-[14px]" />
            </Article>
          </div>
          <div className="absolute bottom-8 right-0 max-md:w-[80%]">
            <figure>
            <img src="/assets/images/f-logo.png" alt="" />
            </figure>
          </div>
      </div>
      <div className="h-[324px] flex justify-end items-end p-3">
          <BarCode  />
        </div>
    </main>
  );
}
