"use client";

const Company = () => {
  return (
    <section className="relative overflow-hidden px-5 md:py-[305px] py-[120px]">
       <div className="w-full max-w-[1240px] mx-auto flex items-center justify-between gap-5 max-md:flex-col">
            <div className="md:text-[48px] text-[24px] font-semibold tracking-widest max-md:text-center">
                A NEXUS <br />
                CORPORATION
            </div>
            <div className="max-w-[700px] border-y border-[#F34927] max-md:px-5 md:pl-[46px] pt-10 md:pt-[68px] md:pb-[84px] pb-[50px]">
                <ul className="md:text-[20px] text-[16px] pl-6 list-disc md:space-y-7 space-y-5">
                    <li>Established: 2025 </li>
                    <li>Headquarters: Tokyo, Japan </li>
                    <li>Regional Offices: Manila, Singapore, Los Angeles </li>
                    <li>Business: Comprehensive entertainment business solutions spanning rights management. </li>
                </ul>
            </div>
       </div>
    </section>
  );
};

export default Company;
