import TitleBlockChain from "@/components/titles/title-block-chain";
import Article, { dataArticle } from "./components/article";
import TitleAI from "@/components/titles/title-ai";
import TitleWebSite from "@/components/titles/title-web-site";
import TitleAD from "@/components/titles/title-ad";
import TitleMarketing from "@/components/titles/title-marketing";
import TitleFx from "@/components/titles/title-fx";

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
      <div className="px-4 pt-3 pb-2.5">
          <h2 className="pb-4">
              <img className="dark:hidden" src="/assets/images/logo.png" alt="" />
              <img className="hidden dark:block" src="/assets/images/logo-dark.png" alt="" />
          </h2>
          <div className="flex flex-wrap gap-x-8 gap-y-12">
            <Article data={data}>
              <TitleAI rect="h-[12.5px]" />
            </Article>
            <Article data={data}>
              <TitleBlockChain rect="h-[12.5px]" />
            </Article>
            <Article data={data}>
              <TitleWebSite rect="h-[12.5px]" />
            </Article>
            <Article data={data}>
              <TitleAD rect="h-[12.5px]" />
            </Article>
            <Article data={data}>
              <TitleMarketing rect="h-[12.5px]" />
            </Article>
            <Article data={data}>
              <TitleFx rect="h-[12.5px]" />
            </Article>
          </div>
      </div>
    </main>
  );
}
