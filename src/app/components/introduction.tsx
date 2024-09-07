"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        image: '/assets/images/introduction-img-01.png',
        tag: 'Treatment',
        label: 'Exosome Therapy',
        title: 'High efficacy rate',
        content: (<>High therapeutic efficacy with minimal side effects</>)
    },
    {
        image: '/assets/images/introduction-img-02.png',
        tag: 'Gene Therapy',
        label: 'Exosome Gene Delivery',
        title: 'Targeted gene therapy',
        content: (<>Carriers of specific genes or drugs</>)
    },
    {
        image: '/assets/images/introduction-img-03.png',
        tag: 'Drug Delivery',
        label: 'Exosome Drug Carrier',
        title: 'Precision drug delivery',
        content: (<>Especially in cancer treatment, the drug can be delivered only to cancer cells, enhancing the effectiveness of immunotherapy</>)
    },
]

const Introduction = () => {
    const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative bg-[linear-gradient(90deg,_#00F4AE_0%,_#0C408C_100%)] px-8 py-10 md:py-[60px]">
        <div className="w-full md:max-w-[1100px] max-w-[475px] mx-auto flex items-center justify-center gap-5 md:gap-10 max-md:flex-col">
            
        </div>
    </section>
  );
};

export default Introduction;
