import { ReactNode } from "react";
import SectionWrap from "../common/sectionWrap";


type FeaturePropsType = {
    id: string;
    image: string;
    title: ReactNode;
    text: ReactNode;
    note: ReactNode;
};
function feature({
    id,
    image,
    title,
    text,
    note
    }: FeaturePropsType) {
    return (
        <div className="w-[300px] md:w-[26.389vw] min-[1440px]:w-[380px] relative bg-[#FFE870] md:border-[11px] border-[6px] border-[#FDD300] rounded-[30px] py-3 md:py-[1.944vw] px-[0.5vw] min-[1440px]:py-7 min-[1440px]:px-5 [box-shadow:0px_4px_30px_0px_rgba(0,_0,_0,_0.25)]">
            
        </div>
    );
}

export default function SectionFeatures() {
    return (
        <SectionWrap anchor="features" number="2" title="５FEATURES" content={<>容量スッキリ開放感<br />次世代ストレージって何？</>}>
            <div className="w-full md:pt-12 pt-8 px-5 md:pb-[50px] pb-20">
            </div>
        </SectionWrap>
    );
  }