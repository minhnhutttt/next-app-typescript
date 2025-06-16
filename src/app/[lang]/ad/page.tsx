import Article from "../../components/article";
import TitleAD from "../../components/titles/title-ad";
import PageContainer from "../../components/pageContainer";
import { dataAD } from "@/app/data/data";


export default function Ad() {
  return (
    <PageContainer>
        <Article type="ad" data={dataAD} disable>
            <TitleAD rect="md:h-[12.5px] h-[14px]" />
        </Article>
    </PageContainer>
  );
}
