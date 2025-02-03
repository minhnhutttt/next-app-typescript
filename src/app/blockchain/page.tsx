import Article from "../../components/article";
import TitleBlockChain from "@/components/titles/title-block-chain";
import PageContainer from "@/components/pageContainer";
import { dataBlockChain } from "../(index)/page";

export default function Blockchain() {
  return (
    <PageContainer>
        <Article data={dataBlockChain} disable>
            <TitleBlockChain rect="md:h-[12.5px] h-[14px]" />
        </Article>
    </PageContainer>
  );
}
