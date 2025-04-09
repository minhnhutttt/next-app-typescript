'use client'

const Company = () => {
  return (
    <section className="relative overflow-hidden px-5 py-[120px] md:py-[305px]">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-5 max-md:flex-col">
        <div className="text-[24px] font-semibold tracking-widest max-md:text-center md:text-[48px]">
          Corporate Profile <br />of A-NEXUS
        </div>
        <div className="max-w-[700px] border-y border-[#F34927] pb-[50px] pt-10 max-md:px-5 md:pb-[84px] md:pl-[46px] md:pt-[68px]">
          <ul className="list-disc space-y-5 pl-6 text-[16px] md:space-y-7 md:text-[20px]">
            <li>Established: 2025 </li>
            <li>Office Location: 6605 Grand Montecito Pkwy, Suite 100, Las Vegas, NV 89149, USA</li>
            <li>
              Business: Comprehensive entertainment business solutions spanning
              rights management.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Company
