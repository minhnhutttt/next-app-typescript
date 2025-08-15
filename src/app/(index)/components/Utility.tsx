'use client'

import { ReactNode } from "react"

const UtilityItem = ({title, text, children, className}: {title: ReactNode, text: ReactNode, children: ReactNode, className?: string}) => (
    <div className="fade-up flex items-end max-md:flex-col group md:even:flex-row-reverse">
        <div className={`md:w-[600px] lg:w-[850px] ${className}`}>
            <div className="w-full bg-[url(/assets/images/utility-bg.png)] bg-cover h-[400px] md:h-[617px] flex items-center justify-center rounded-[20px] md:group-odd:rounded-r-[20px] md:group-even:rounded-l-[20px] p-7 md:p-5 md:group-even:pl-20 md:group-odd:pr-20">
                <div className="w-full max-w-[606px]">
                    <h5 className="md:text-[42px] text-[26px] font-medium md:mb-[60px] mb-[30px]">{title}</h5>
                    <div className="w-full max-w-[480px] pl-5 md:pl-[30px] py-5 text-[#6DB8F7] font-poppins md:text-[20px] text-[16px] leading-loose border-l-[3px] border-[#6DB8F7] tracking-wider">
                        {text}
                    </div>
                </div>
            </div>
        </div>
        <div className="relative max-md:mt-5 max-md:px-5">{children}</div>
    </div>
)

export default function Utility() {
  return (
    <section className="relative md:pb-[190px] pb-24">
        <div className="w-full md:max-w-[1440px] max-w-[440px] mx-auto md:space-y-[160px] space-y-20 max-md:px-5">
            <UtilityItem title="Tiered Fee Discount System" text="Depending on the amount of UGTC held, trading fees on DWU GATE will be discounted in stages." className="md:pb-44">
                <div className="md:space-y-12 space-y-3 md:-ml-[70px] max-w-[520px]">
                    <div className="rounded-[10px] bg-black/80 md:p-10 p-5 md:space-y-8 space-y-6 border border-white/20">
                        <div>
                            <p className="md:text-[24px] text-[18px] font-semibold">Small holders</p>
                            <p className="md:text-[16px] text-[13px]">Basic discount rate applied</p>
                        </div>
                        <div>
                            <p className="md:text-[24px] text-[18px] font-semibold">Mid-tier holders</p>
                            <p className="md:text-[16px] text-[13px]">Bigger discounts and priority support</p>
                        </div>
                        <div>
                            <p className="md:text-[24px] text-[18px] font-semibold">Large holders</p>
                            <p className="md:text-[16px] text-[13px]">Maximum discounts and VIP status</p>
                        </div>
                    </div>
                    <div className="rounded-[10px] bg-black/80 md:p-10 p-5 md:space-y-10 space-y-6 leading-[1.15] border border-white/20">
                        <p className="md:text-[36px] text-[22px]">VIP status benefits</p>
                        <p className="md:text-[24px] text-[18px] font-semibold">riority Customer Support</p>
                        <p className="md:text-[24px] text-[18px] font-semibold">Exclusive Event Access</p>
                        <p className="md:text-[24px] text-[18px] font-semibold">
                            Special Rewards Program <br />
                            <span className="md:text-[16px] text-[13px] font-normal">(All benefits applied automatically - no action required)</span>
                        </p>
                    </div>
                </div>
            </UtilityItem>
            <UtilityItem title="Access to premium features" text="There are special features and services available exclusively to UGTC holders." className="md:pb-[164px]">
                <div className="space-y-12 md:-mr-[60px] max-w-[520px] md:pb-[148px]">
                    <div className="rounded-[10px] bg-black/80 md:p-10 p-5 md:space-y-[30px] space-y-4 leading-loose border border-white/20">
                        <p className="md:text-[24px] text-[18px] font-semibold">
                            Exclusive Liquidity Pools: High APY & Special Project Access
                        </p>
                        <p className="md:text-[24px] text-[18px] font-semibold">
                            New Token Listing Priority: Early Purchase Access & Private Sale Invitations
                        </p>
                    </div>
                </div>
            </UtilityItem>
            <UtilityItem title="Governance Participation Rights" text="UGTC holders can participate in important decisions regarding the operation of DWU GATE." className="md:pb-[150px]">
                <div className="space-y-12 md:-ml-[60px] max-w-[520px] md:pb-14">
                    <div className="rounded-[10px] bg-black/80 md:p-10 p-5 md:space-y-[30px] space-y-4 leading-loose border border-white/20">
                        <p className="md:text-[24px] text-[18px] font-semibold">
                            Voting Topics: Protocol Improvements, Fee Changes, New Feature Additions, Fund Allocation
                        </p>
                        <p className="md:text-[24px] text-[18px] font-semibold">
                            Transparent Voting Process
                        </p>
                        <p className="md:text-[24px] text-[18px] font-semibold">
                            Ultimate Goal: Full DAO Transition
                        </p>
                    </div>
                </div>
            </UtilityItem>
            <UtilityItem title="Access to premium features" text="There are special features and services available exclusively to UGTC holders." className="md:pb-16">
                <div className="space-y-12 md:-mr-[60px] max-w-[520px] xl:w-[520px]">
                    <div className="rounded-[10px] bg-black/80 md:p-10 p-5 md:space-y-[30px] space-y-4 leading-loose border border-white/20">
                        <p className="md:text-[24px] text-[18px] font-semibold">
                            Price Stable - Perfect for Beginners
                        </p>
                        <p className="md:text-[24px] text-[18px] font-semibold">
                            Easy to Calculate and Evaluate
                        </p>
                        <p className="md:text-[24px] text-[18px] font-semibold">
                            Helps Stabilize Your Portfolio
                        </p>
                    </div>
                </div>
            </UtilityItem>
        </div>
    </section>
  )
}