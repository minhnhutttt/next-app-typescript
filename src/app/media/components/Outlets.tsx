"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Outlets = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="bg-white relative pb-[30vw] md:pb-[20vw] md:px-[2vw] px-[4vw]">
      <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] gap-x-[6vw] md:gap-x-[4vw] gap-y-[15vw] md:gap-y-[10vw] md:mb-14 mb-4">
        <div className="col-[span_16_/_span_16] py-8 md:py-0">
          <div className="js-split h2">
            Featured in the world’s most influential media outlets.
          </div>
        </div>
      </div>
      <div className="grid gap-[1rem] grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))]">
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="col-span-6 relative">
              <div className="overflow-hidden">
                <div className="fade-up flex justify-center items-center p-[2rem] border border-grey rounded-[0.4rem]">
                  <img src="/assets/images/google-logo.svg" alt="" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Outlets;
