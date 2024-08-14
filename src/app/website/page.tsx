import Article from "../../components/article";
import PageContainer from "@/components/pageContainer";
import { dataWebSite } from "../(index)/page";
import TitleWebSite from "@/components/titles/title-web-site";

export default function Website() {
  return (
    <PageContainer>
        <Article data={dataWebSite} disable>
            <TitleWebSite rect="md:h-[12.5px] h-[14px]" />
        </Article>
    </PageContainer>
  );
}
