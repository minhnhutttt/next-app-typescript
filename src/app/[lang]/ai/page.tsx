import { dataAI } from "@/app/data/data";
import Article from "../../components/article";
import PageContainer from "../../components/pageContainer";
import TitleAI from "../../components/titles/title-ai";

export default function AI() {
  return (
    <PageContainer>
        <Article data={dataAI} disable>
            <TitleAI rect="md:h-[12.5px] h-[14px]" />
        </Article>
    </PageContainer>
  );
}
