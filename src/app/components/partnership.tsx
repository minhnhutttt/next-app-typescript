"use client";

const Partnership = () => {
  return (
    <section className="mb-[256px] max-md:mb-[82px]">
      <div className="container">
        <div className="max-w-[1200px] mx-auto p-[6%] bg-[#eee] rounded-[12px]">
          <div>Partnership</div>
          <div className="font-anton text-[calc(24px_+_2vw)]">
            Would you like to invite us to your project?
          </div>
          <div className="mb-[24px]">
            We have participated in projects not only in Taiwan, but also in
            Vietnam, Cambodia, Japan, Canada, and other European regions for
            various companies. Our advantage is not only in terms of cost, but
            also in our technical capabilities in software development. This is
            because Taiwan itself is a country that demands high technical
            skills from its engineers. For example, in the development and
            release of an application, it is not possible to release it unless
            it meets Taiwan&apos;s security standards in addition to the usual
            screening process.
          </div>
          <a
            className="max-w-[200px] flex items-center gap-[16px] uppercase leading-none"
            href="/about/"
          >
            More About Us
            <div className="text-[21px] bg-white w-[2em] block flex justify-center items-center rounded-full aspect-square">
              <img
                src="/assets/images/arrow.svg"
                className="max-h-[50%]"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
