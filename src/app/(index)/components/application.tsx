"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        image: '/assets/images/application-img-01.png',
        title: 'Regenerative medicine and tissue repair',
        text: (<>
            Exosomes, like stem cells, have the ability to promote tissue regeneration and play an important role in repairing damaged tissues and organs. In particular, tissue regeneration treatment after myocardial infarction or stroke using exosomes has the potential to exceed existing treatments. <br />
            <br />
            Regenerative medicine using iPS cells also has the problem of how to deliver cultured iPS cells to the affected area.<br />
            iPS cells are delivered to the affected area using exosomes. This is one of the solutions.
        </>)
    },
    {
        image: '/assets/images/application-img-02.png',
        title: 'Cancer treatment and immunotherapy',
        text: (<>
            Exosomes are a promising method for delivering cancer therapeutics, particularly immune checkpoint inhibitors, driving innovation in cancer immunotherapy. Shaping exosomes to adhere more easily to cancer cells enhances their effectiveness. <br />
            Cancer cells suppress immune cells using specific surface proteins, but exosomes alter these proteins, enabling immune cells to aggressively attack cancer cells.
        </>)
    },
    {
        image: '/assets/images/application-img-03.png',
        title: 'Environmental protection and eco technology',
        text: (<>
            Exosomes have potential applications in ecosystem restoration and pollutant removal. For example, bioremediation technology that uses microbial-derived exosomes is expected to contribute to improving soil and water quality.
        </>)
    },
]

const Application = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative"
    >
      <div className="min-h-[280px] bg-[url(/assets/images/application-bg.png)] bg-cover flex items-center justify-center p-5">
        <h4 className="fade-up md:text-[64px] text-[32px] font-medium leading-none w-full max-w-[1152px] tracking-widest">
            Application fields and potential of exosome technology
        </h4>
      </div>
      <div className="relative w-full">
        {data.map((item, index) => (
          <div
            className="group relative -mb-[100vh] block h-[230vh] w-full last:mb-0 last:h-[130vh] bg-white"
            key={index}
          >
            <div className="sticky top-0 flex h-[100vh] w-full overflow-hidden flex-col">
              <figure className="flex-1 max-h-[50%] relative">
                <img className="h-full w-full object-cover object-center absolute" src={item.image} alt="" />
              </figure>
                <div className="flex max-md:flex-col py-6 md:py-[30px] xl:px-12 px-5 md:gap-20 gap-5 text-[#020C1A] w-full max-w-[1440px] mx-auto">
                    <h4 className="md:w-[700px] md:text-[48px] text-[24px] font-bold">
                        {item.title}
                    </h4>
                    <p className="md:text-[16px] text-[13px] md:w-[563px]">
                        {item.text}
                    </p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Application;
