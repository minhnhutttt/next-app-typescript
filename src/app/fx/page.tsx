import Article from "../../components/article";
import PageContainer from "@/components/pageContainer";
import { dataFx } from "../(index)/page";
import TitleFx from "@/components/titles/title-fx";

export default function Fx() {
  return (
    <PageContainer>
        <Article data={dataFx}>
            <TitleFx rect="md:h-[12.5px] h-[14px]" />
        </Article>
    </PageContainer>
  );
}
