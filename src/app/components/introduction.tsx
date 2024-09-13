"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Introduction = () => {
    const ref = useScrollAnimations();
  return (
    <section ref={ref} id="about" className="relative md:bg-[url('/assets/images/introduction-bg.png')] bg-[url('/assets/images/introduction-bg-sp.png')] bg-cover bg-center px-8 py-[60px]">
        <div className="w-full md:max-w-[1100px] max-w-[375px] mx-auto">
            <Title>What are iPS Cells?</Title>
            <div className="fade-up mt-10 bg-white rounded-md border border-[#E4E4E7] overflow-hidden">
                <div className="fade-up relative">
                    <figure className="w-full">
                        <img className="max-md:hidden w-full" src="/assets/images/introduction-img.jpg" alt="Treatment" />
                        <img className="md:hidden w-full" src="/assets/images/introduction-img-sp.jpg" alt="Treatment" />
                    </figure>
                    <div className="absolute bottom-0 inset-x-0 rounded-md bg-white/70 h-[71px] flex items-center justify-center flex-col">
                        <p className="text-[#0050A7] text-[20px] font-semibold text-center leading-[1.4]">Treatment</p>
                        <span className="w-[100px] h-1 bg-[linear-gradient(90deg,_#D9748F_0%,_#0059BA_100%)]"></span>
                    </div>
                </div>
                <div className="fade-up bg-white p-3">
                    <h4 className="text-[20px] font-semibold leading-[1.4] mb-1.5">iPS Cells Therapy</h4>
                    <p className="text-[18px] font-light leading-[1.55]">
                    iPS cells (induced pluripotent stem cells) are a technology that converts somatic cells into pluripotent stem cells by introducing specific genes. Unlike ES cells, which use fertilized eggs of others, rejection is minimal because they use one&apos;s own cells. This makes it possible to differentiate into various types of cells, opening up new possibilities for regenerative medicine.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Introduction;