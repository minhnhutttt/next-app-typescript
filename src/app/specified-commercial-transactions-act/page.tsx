import Header from "@/components/header";
import PageTitle from "@/components/pageTitle";

export default function SpecifiedCommercialTransactionsAct() {
  return (
    <main>
      <Header />
      <PageTitle>特定商取引法に基づく表記</PageTitle>
      <div className="px-5 my-14 md:my-20">
        <div className="mx-auto w-full max-w-[800px] md:space-y-20 space-y-14">
            <figure>
                <img src="/assets/images/law-01.png" alt="" />
            </figure>
            <figure>
                <img src="/assets/images/law-02.png" alt="" />
            </figure>
        </div>
      </div>
    </main>
  );
}
