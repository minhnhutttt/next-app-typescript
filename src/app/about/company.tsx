"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";


const Company = () => {
    const ref = useScrollAnimations();
  return (
    <section ref={ref} className="px-5 md:pt-[70px] pt-12 md:pb-[135px] pb-14">
        <div className="md:h-[734px] flex justify-center relative">
            <figure className="max-md:absolute max-md:inset-0 max-md:flex max-md:justify-center">
                <img className="max-md:h-full object-contain" src="/assets/images/bg-company.png" alt="" />
            </figure>
            <div className="md:absolute inset-0 font-lato relative">
                <div className="w-full max-w-[906px] mx-auto md:pt-16">
                    <p className="text-center font-light md:text-[24px] text-[18px]">Company Name</p>
                    <p className="text-center font-bold md:text-[45px] text-[24px]">Ultimate Holdings Group Inc</p>
                    <div className="w-full max-w-[653px] mx-auto md:mt-[88px] mt-12">
                        <p className="text-center md:text-[24px] text-[18px] font-light">Business Description</p>
                        <p className="md:text-[18px] text-[14px] mt-2 leading-[1.4]">
                        Ultimate Holdings Group Inc is an investment firm that specializes in acquiring and holding real world assets (RWAs) for the long term. We focus on preserving and enhancing the value of rare and precious assets.
                        </p>
                    </div>
                    <div className="flex lg:gap-[100px] md:gap-[60px] gap-10 md:mt-[140px] mt-16 max-md:flex-col">
                        <div className="flex md:gap-[30px] gap-5">
                            <figure>
                                <img className="max-md:h-10" src="/assets/images/ic-tel.png" alt="" />
                            </figure>
                            <div>
                                <p className="font-bold md:text-[18px] text-[15px]">Call or Message Us:</p>
                                <p className="md:text-[18px] text-[15px] mt-1">
                                    Phone: +1 401-641-0405 <br />
                                    Email: info@ultimate-holdings-group.com
                                </p>
                            </div>
                        </div>
                        <div className="flex md:gap-[30px] gap-5">
                            <figure>
                                <img className="max-md:h-10" src="/assets/images/ic-location.png" alt="" />
                            </figure>
                            <div>
                                <p className="font-bold md:text-[18px] text-[15px]">Our Location:</p>
                                <p className="md:text-[18px] text-[15px] mt-1">
                                780 Reservoir Ave, Suite 123, <br />Cranston, Rhode Island, 02910, USA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Company;
