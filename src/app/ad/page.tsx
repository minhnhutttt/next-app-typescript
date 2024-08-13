import Article, { dataArticle } from "../../components/article";
import TitleAD from "@/components/titles/title-ad";
import PageContainer from "@/components/pageContainer";
import { dataAD } from "../(index)/page";


export default function Ad() {
  return (
    <PageContainer>
        <Article data={dataAD}>
            <TitleAD rect="md:h-[12.5px] h-[14px]" />
        </Article>
    </PageContainer>
  );
}
