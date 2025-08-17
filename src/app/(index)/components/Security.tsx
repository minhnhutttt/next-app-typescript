'use client'


export default function Security() {
  return (
    <section className="relative z-10 px-5 md:pb-20 pb-14">
       <div className="w-full max-w-[600px] lg:max-w-[1320px] mx-auto flex justify-center items-start md:pt-[235px] pt-[120px] xl:gap-[120px] md:gap-20 gap-16 max-lg:flex-col">
            <div className="fade-up flex-1">
                <h5 className="md:text-[48px] text-[28px] font-bold italic border-b border-white text-center pb-1">Security measures</h5>
                <p className="text-center md:text-[18px] text-[14px] mt-3 md:mt-4">The TEXC Protocol implements the following security measures.</p>
                <ul className="flex gap-2.5 md:mt-[68px] mt-10">
                    {[
                        {
                            image: '/assets/images/security-img-01.png',
                            title: 'Rigorous security audits by multiple independent auditors',
                        },
                        {
                            image: '/assets/images/security-img-02.png',
                            title: 'Careful rollout with phased release of new features',
                        },
                        {
                            image: '/assets/images/security-img-03.png',
                            title: 'Bug Reward Program',
                        }
                    ].map((item, index) => (
                        <li key={index} className="flex-1 flex flex-col items-center px-1 md:px-[15px] md:gap-[24px] gap-2">
                            <img src={item.image} alt={item.title} className="mx-auto mb-2" />
                            <h6 className="text-left font-bold w-full md:text-[16px] text-[13px]">{item.title}</h6>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="fade-up flex-1">
                <h5 className="md:text-[48px] text-[28px] font-bold italic border-b border-white text-center pb-1">Governance Structure</h5>
                <div className="flex justify-center mt-8 md:mt-10">
                    <img src="/assets/images/governance-img.png" alt="" />
                </div>
                <p className="md:text-[18px] text-[14px] font-medium leading-loose text-center mt-3 md:mt-4">
                    We will gradually move towards a fully decentralized autonomous organization (DAO), where ultimately all important decisions will be made by voting among TEXC holders.
                </p>
            </div>
       </div>
    </section>
  )
}