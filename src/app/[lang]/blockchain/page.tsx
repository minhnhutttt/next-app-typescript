import Article from "../../components/article";
import TitleAD from "../../components/titles/title-ad";
import PageContainer from "../../components/pageContainer";
import { dataBlockChain } from "@/app/data/data";


export default function BlockchainListPage() {
  return (
    <PageContainer>
        <Article type="blockchain" data={dataBlockChain} disable>
            <TitleAD rect="md:h-[12.5px] h-[14px]" />
        </Article>
    </PageContainer>
  );
}
