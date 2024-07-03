import PageTitle from "@/components/pageTitle";
import Banner from "@/components/banner";
import Provide from "@/components/provide";
import Faq from "@/components/faq";
import Contact from "@/components/contact";

const DataProvide = [
  {
    id: '1',
    title: 'ヒアリングと調査設計',
    content: (<>クライアントの業界や調査対象に合わせてヒアリングを行い、最適な調査設計を行います。AIの活用方法も決定します。</>)
  },
  {
    id: '2',
    title: '調査実施と分析',
    content: (<>設計に基づき、AIを活用しながら効率的かつ高精度な調査を実施します。収集したデータを分析し、インサイトを導き出します。</>)
  },
  {
    id: '3',
    title: 'レポーティングと改善提案',
    content: (<>分析結果をわかりやすくまとめたレポートを作成し、クライアントに提供します。調査結果をもとに、人材採用における改善提案も行います。</>)
  },
]

const DataFaq = [
  {
    id: '1',
    title: 'Research Shield+AIサービスの料金体系はどのようになっていますか？',
    content: (<>調査対象人数や調査項目に応じて、柔軟な料金プランをご用意しています。まずはお客様のニーズをお聞かせください。</>)
  },
  {
    id: '2',
    title: '調査結果の精度はどの程度ですか？',
    content: (<>人力とAIのハイブリッドスタイルを採用しており、データベース内で見つからない情報にもアクセスできるようにしています。人とAIのお互いの不足点を補うことで高精度を実現しています。</>)
  },
  {
    id: '3',
    title: '調査対象者の情報はどのように取得するのですか？',
    content: (<>公開情報を中心に、独自のデータベースも活用して情報を収集します。すべての情報収集は合法的な手段で行われます。</>)
  },
  {
    id: '4',
    title: 'リクエストはどのようにすればいいですか?',
    content: (<>まずはメールでお問い合わせください。</>)
  },
]

export default function ResearchShieldAI() {
  return (
    <main>
        <PageTitle>Research shield+AI</PageTitle>
        <Banner image="/assets/images/techno_researchi_shield.png">
        Research Shield+AIは企業の人材採用における重要な意思決定をサポートするサービスであり、高い精度と効率性が求められます。だからこそ、業界特化型の調査設計とAIの活用による再現性の高い調査が必要です。私たちは、長年培った知識と経験をもとに、お客様の期待を超える提案をいたします。
        </Banner>
        <Provide title="We provide a background check service for overseas talent." items={DataProvide} />
        <Faq items={DataFaq} />
        <Contact title="外国人材の採用を検討していますか？">応募者のバックグラウンドを詳細に把握したいですか？ 人材調査に多くの時間と労力を割けませんか？ あるいは調査結果の精度と再現性を高めたいですか？すでに雇用中の人材を調査したいですか？ 私たちは、お客様の外国人材採用の意思決定を支援する高品質なResearch Shield+AIサービスを提供することを目指しています。</Contact>
    </main>
  );
}
