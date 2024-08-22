"use client";

import PageContainer from "@/components/pageContainer";
import PageTitle from "@/components/pageTitle";
import TextBlock from "@/components/textBlock";
import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function PrivacyPolicy() {
  const ref = useScrollAnimations();
  return (
    <PageContainer>
      <PageTitle>利用規約</PageTitle>
      <div className="px-5 mt-7 md:mt-10 h-[2000px]">
        
      </div>
    </PageContainer>
  );
}
