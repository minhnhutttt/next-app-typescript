"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Current = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="relative xl:px-10 px-5 mt-[120px] md:mt-[180px] md:pb-[226px] pb-[140px]">
        <div className="w-full max-w-[1440px] mx-auto">
      <div className="flex items-start max-md:flex-col gap-[30px]">
        <div className="fade-up md:w-1/2 lg:w-[460px] xl:w-[640px] aspect-square rounded-full overflow-hidden md:sticky top-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
          >
            <source src="/assets/videos/current.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex-1 space-y-[28px]">
          <div className="fade-up md:pb-10 pb-6">
            <p className="md:text-[32px] text-[20px] font-black tracking-[0.1em]">
              Background and current <br className="max-md:hidden" />situation
            </p>
            <p className="mt-3 md:text-[16px] text-[13px] tracking-[0.1em]">
              Exosomes are nanometer-sized vesicles secreted by cells that
              contain biomolecules such as RNA, DNA, proteins, and lipids, and
              play an important role in the transmission of information between
              cells. Exosomes have a wide range of applications, including
              regenerative medicine, cancer treatment, diagnostic technology,
              and even environmental restoration. However, there are still
              issues to be solved before the technology matures, and research
              and development is required to maximize its potential.
            </p>
          </div>
          <div className="fade-up md:pb-10 pb-6">
            <p className="md:text-[32px] text-[20px] font-black tracking-[0.1em]">
              Generation and properties of exosomes
            </p>
            <p className="mt-3 md:text-[16px] text-[13px] tracking-[0.1em]">
              Exosomes are secreted by many cell types (immune cells, nerve
              cells, etc.) and are released outside the cell as vesicles with a
              diameter of 30-150 nm. Exosomes have the characteristic that their
              contents (cargo) change depending on the state and environment of
              the cell, allowing them to act selectively on specific target
              cells. <br />
              <br />
              In other words, there are many types of exosomes.
              <br />
              The stomach contains gastric exosomes, and the intestines contain
              exosomes that act well on the intestines.
            </p>
          </div>
          <div className="fade-up md:pb-10 pb-6">
            <p className="md:text-[32px] text-[20px] font-black tracking-[0.1em]">
              Exosome isolation and purification
            </p>
            <p className="mt-3 md:text-[16px] text-[13px] tracking-[0.1em]">
              For the clinical application of exosomes, the key is to isolate
              and purify exosomes with high purity and target specificity.
              Current methods include ultracentrifugation, size exclusion
              chromatography, and immunoprecipitation, but these techniques
              remain cost-effective, efficient, and scalable. <br />
              In other words, the problem is how to distinguish and sort various
              types of exosomes.
              <br />
              <br />
              For example, if you put them in a liquid and rotate them, the
              heavier exosomes will flow outward.
              <br />
              By repeating this process, exosomes can be distinguished by their
              weight (ultracentrifugation)
              <br />
              <br />
              Another method is to use a net.
              <br />
              Exosomes can be sorted by size by filtering through various types
              of mesh, such as widening or narrowing the mesh size (size
              exclusion chromatography).
              <br />
              <br />
              Using the above method, exosomes can be mass-produced, sorted,
              managed, and commercialized.
              <br />
              However, these technologies are still immature, and there are
              issues with cost and production efficiency.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Current;
