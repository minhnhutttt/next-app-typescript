import { dataMarketing } from "@/app/data/data";
import Article from "../../components/article";
import PageContainer from "../../components/pageContainer";
import TitleMarketing from "../../components/titles/title-marketing";

export default function Marketing() {
  return (
    <PageContainer>
        <Article type="marketing" data={dataMarketing} disable>
            <TitleMarketing rect="md:h-[12.5px] h-[14px]" />
        </Article>
    </PageContainer>
  );
}
