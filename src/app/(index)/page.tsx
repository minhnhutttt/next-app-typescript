import TitleBlockChain from "@/components/titles/title-block-chain";
import Article, { dataArticle } from "../../components/article";
import TitleAI from "@/components/titles/title-ai";
import TitleWebSite from "@/components/titles/title-web-site";
import TitleAD from "@/components/titles/title-ad";
import TitleMarketing from "@/components/titles/title-marketing";
import TitleFx from "@/components/titles/title-fx";
import BarCode from "@/components/barcode";

export const dataAI: dataArticle[] = [
  {
    date: '2024.4.18',
    title: 'イーロン・マスクが中国を訪問しても、テスラにとっての根本的な課題は解決しない',
    link: 'ai/id'
  },
]
export const dataBlockChain: dataArticle[] = [
  {
    date: '2024.4.18',
    title: 'ビットコインに価値がないと言うのなら、人類は皆まともに歩けないと言っているようなものにすぎない',
    link: 'blockchain/id'
  },
]
export const dataWebSite: dataArticle[] = [
  {
    date: '2024.4.18',
    title: 'イーロン・マスクが中国を訪問しても、テスラにとっての根本的な課題は解決しない',
    link: 'website/id'
  },
]
export const dataAD: dataArticle[] = [
  {
    date: '2024.4.18',
    title: '広告代理店の見極め方〜失敗の責任を負いたくなければ「大手」に群がれ！成功したければ規模に目を向けるな！〜',
    link: 'ad/id'
  },
]
export const dataMarketing: dataArticle[] = [
  {
    date: '2024.4.18',
    title: 'イーロン・マスクが中国を訪問しても、テスラにとっての根本的な課題は解決しない',
    link: 'marketing/id'
  },
]
export const dataFx: dataArticle[] = [
  {
    date: '2024.4.18',
    title: 'イーロン・マスクが中国を訪問しても、テスラにとっての根本的な課題は解決しない',
    link: 'fx/id'
  },
]

export const ranking: dataArticle[] = [
  {
    date: '2024.4.18',
    title: 'ビットコインに価値がないと言うのなら、人類は皆まともに歩けないと言っているようなものにすぎない',
    link: '/blockchain/id'
  },
  {
    date: '2024.4.18',
    title: '広告代理店の見極め方〜失敗の責任を負いたくなければ「大手」に群がれ！成功したければ規模に目を向けるな！〜',
    link: '/ad/id'
  },
  {
    date: '2024.4.18',
    title: 'イーロン・マスクが中国を訪問しても、テスラにとっての根本的な課題は解決しない',
    link: '/fx/id'
  },
  {
    date: '2024.4.18',
    title: 'イーロン・マスクが中国を訪問しても、テスラにとっての根本的な課題は解決しない',
    link: '/website/id'
  },
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
            <Article data={dataAI}>
              <TitleAI rect="md:h-[12.5px] h-[14px]" />
            </Article>
            <Article data={dataBlockChain}>
              <TitleBlockChain rect="md:h-[12.5px] h-[14px]" />
            </Article>
            <Article data={dataWebSite}>
              <TitleWebSite rect="md:h-[12.5px] h-[14px]" />
            </Article>
            <Article data={dataAD}>
              <TitleAD rect="md:h-[12.5px] h-[14px]" />
            </Article>
            <Article data={dataMarketing}>
              <TitleMarketing rect="md:h-[12.5px] h-[14px]" />
            </Article>
            <Article data={dataFx}>
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
