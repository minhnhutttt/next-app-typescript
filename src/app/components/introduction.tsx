"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    image: "/assets/images/introduction-img-01.png",
    tag: "Treatment",
    label: "Exosome Therapy",
    title: "High efficacy rate",
    content: <>High therapeutic efficacy with minimal side effects</>,
  },
  {
    image: "/assets/images/introduction-img-02.png",
    tag: "Gene Therapy",
    label: "Exosome Gene Delivery",
    title: "Targeted gene therapy",
    content: <>Carriers of specific genes or drugs</>,
  },
  {
    image: "/assets/images/introduction-img-03.png",
    tag: "Drug Delivery",
    label: "Exosome Drug Carrier",
    title: "Precision drug delivery",
    content: (
      <>
        Especially in cancer treatment, the drug can be delivered only to cancer
        cells, enhancing the effectiveness of immunotherapy
      </>
    ),
  },
];

const Introduction = () => {
  const ref = useScrollAnimations();
  return (
    <section
    id="introduction"
      ref={ref}
      className="relative px-8 py-10 md:py-[46px]"
    >
      <div className="w-full md:max-w-[1100px] max-w-[475px] mx-auto">
        <Title>
          What is Exosome <br />
          Technology
        </Title>
        <div className="flex justify-center gap-10 flex-wrap mt-8 md:mt-10">
          {data.map((item, index) => (
            <div key={index} className="fade-up w-[340px] rounded-md border border-[#E4E4E7] bg-white">
              <div className="relative">
                <figure className="h-[340px]">
                  <img className="h-full object-cover" src={item.image} alt={item.title} />
                </figure>
                <div className="absolute bottom-0 inset-x-0 bg-[#00F4AE]/[0.6] h-[71px] flex items-center justify-center flex-col">
                  <span className="text-[#0C408C] text-[20px] font-semibold">
                    {item.tag}
                  </span>
                  <span className="w-[30px] h-1 bg-white"></span>
                </div>
              </div>
              <div className="px-3 py-2 space-y-1.5">
                <div className="flex">
                    <div className="bg-[linear-gradient(90deg,_#00F4AE_0%,_#0C408C_100%)] relative rounded-lg p-0.5 overflow-hidden  h-9">
                    <div className="px-2 w-full h-full flex justify-center items-center bg-white rounded-lg"><span className="u-text-gradient bg-[linear-gradient(90deg,_#00F4AE_0%,_#0C408C_100%)]">{item.label}</span></div>
                    </div>
                </div>
                <h5 className="text-[20px] font-semibold leading-[1.4]">{item.title}</h5>
                <p className="text-[20px] font-light leading-[1.4]">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
