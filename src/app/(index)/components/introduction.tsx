"use client";

const Introduction = () => {
  return (
    <section id="introduction" className="relative pt-16 md:pt-[70px] md:pb-[100px] pb-[60px] w-screen overflow-hidden z-50">
      <div className="w-full max-w-[1440px] mx-auto md:pt-[50px] pt-10 px-8 relative">
        <div className="flex items-start max-md:flex-col">
          <div className="max-md:w-full max-dt:w-[58.056vw]">
            <img src="/assets/images/ipdc.svg" alt="" />
          </div>
          <div className="flex-1 md:ml-[-136px] max-md:mt-[-10vw] md:pt-[13.333vw] dt:pt-[192px]">
            <h4 className="md:text-[36px] text-[20px] font-semibold">
              A next-generation, global data center where everyone can
              participate.
            </h4>
            <ul className="list-disc pl-6 md:text-[18px] text-[15px] mt-4 md:mt-6 leading-loose">
              <li>
                A complete distributed data storage system that goes beyond IPFS
                metadata management
              </li>
              <li>
                Enhanced security and redundancy through innovative data
                sharding technology
              </li>
              <li>
                Phased development plan (from Version 1.0 to 3.0) for continuous
                feature expansion
              </li>
              <li>
                Flexible architecture enabling participation at various scales
                (from personal PCs to data centers)
              </li>
              <li>Fair token reward system based on contribution levels</li>
            </ul>
            <p className="md:text-[16px] text-[13px] font-light mt-5">
            IPDC aims to create an open and equitable platform where participants ranging from individual users to enterprise-level organizations can engage in data management and computational resource sharing. The project's ultimate goal is to transcend the limitations of traditional web infrastructure and establish the foundation for a safer, more efficient, and democratized digital society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
