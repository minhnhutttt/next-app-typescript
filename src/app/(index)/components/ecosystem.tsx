const Ecosystem = () => {
  return (
    <section className="relative bg-[url('/assets/images/ecosystem-bg.png')] bg-bottom bg-cover ">
      <div className="w-full max-w-[1440px] mx-auto pt-14 md:pt-[84px] md:pb-[200px] pb-[100px]">
        <div className="px-5">
        <div data-scroll className="ani-fade-up w-full max-w-[1280px] mx-auto bg-[#038A49] rounded-[20px] px-5 xl:px-16 md:py-10 py-8 xl:py-[70px] flex items-center md:gap-10 gap-5 max-md:flex-col">
            <div  className=" flex-1 text-white ">
                <h4 className="md:text-[56px] text-[32px] font-bold leading-[1.2]">
                BGT Ecosystem and How to Participate
                </h4>
                <p className="md:text-[18px] text-[15px] md:mt-5">
                The BGT Ecosystem is a platform for supporting historical discoveries. Using BGT coins, anyone can participate in projects and contribute to the discovery process.
                </p>
            </div>
            <figure className="max-lg:w-1/2 max-md:w-auto">
                <img src="/assets/images/ecosystem-img.png" alt="" />
            </figure>
        </div>
        </div>
        <div className="md:mt-[150px] mt-16 md:space-y-[160px] space-y-20">
            <div data-scroll className="ani-fade-up flex md:pr-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-8">
                <figure className="relative max-xl:w-1/2 max-md:w-auto">
                    <img src="/assets/images/ecosystem-img-01.png" alt="" />
                </figure>
                <div className="flex-1 flex items-end md:-ml-[40px] md:-mb-[60px] relative max-md:px-5">
                    <div className="w-full max-w-[622px] rounded-[20px] bg-white/90 py-5 px-5 md:px-[30px]">
                        <h5 className="font-bold md:text-[36px] text-[22px]">BGT Coin</h5>
                        <ul className="md:text-[20px] text-[16px] font-bold md:space-y-8 space-y-4 md:mt-5 mt-4">
                            <li className="flex md:gap-4 gap-2">
                                <span>●</span>
                                <span>A digital token representing contributions to historical discovery projects.</span>
                            </li>
                            <li className="flex md:gap-4 gap-2">
                                <span>●</span>
                                <span>Ensures transparency through blockchain technology.</span>
                            </li>
                            <li className="flex md:gap-4 gap-2">
                                <span>●</span>
                                <span>Allows participation in project selection and evaluation.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div data-scroll className="ani-fade-up flex md:pl-10 max-md:flex-col-reverse max-md:justify-center max-md:items-center max-md:gap-8">
                <div className="flex-1 flex items-end md:-mr-[40px] md:-mb-[60px] relative max-md:px-5 z-10">
                    <div className="w-full max-w-[622px] rounded-[20px] bg-white/90 py-5 px-5 md:px-[30px]">
                        <h5 className="font-bold md:text-[36px] text-[22px]">Three Key Roles</h5>
                        <ul className="md:text-[20px] text-[16px] font-bold md:space-y-8 space-y-4 md:mt-5 mt-4">
                            <li className="flex md:gap-4 gap-2">
                                <span>●</span>
                                <span><span className="border border-[#000A23] rounded-[5px] px-2 mr-1">Donors</span> Provide funding for projects, track progress, and participate in voting.  </span>
                            </li>
                            <li className="flex md:gap-4 gap-2">
                                <span>●</span>
                                <span><span className="border border-[#000A23] rounded-[5px] px-2 mr-1">Explorers</span> Propose, execute, and report the results of discovery projects.</span>
                            </li>
                            <li className="flex md:gap-4 gap-2">
                                <span>●</span>
                                <span><span className="border border-[#000A23] rounded-[5px] px-2 mr-1">Evaluators</span>    Assess the scientific and historical value of proposals and verify project outcomes.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <figure className="relative max-xl:w-1/2 max-md:w-auto">
                    <img src="/assets/images/ecosystem-img-02.png" alt="" />
                </figure>
            </div>

            <div data-scroll className="ani-fade-up flex md:pr-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-8">
                <figure className="relative max-xl:w-1/2 max-md:w-auto">
                    <img src="/assets/images/ecosystem-img-03.png" alt="" />
                </figure>
                <div className="flex-1 flex items-end md:-ml-[40px] md:-mb-[60px] relative max-md:px-5">
                    <div className="w-full max-w-[622px] rounded-[20px] bg-white/90 py-5 px-5 md:px-[30px]">
                        <h5 className="font-bold md:text-[36px] text-[22px]">Innovative participation mechanisms</h5>
                        <ul className="md:text-[20px] text-[16px] font-bold md:space-y-8 space-y-4 md:mt-5 mt-4">
                            <li className="flex md:gap-4 gap-2">
                                <span>●</span>
                                <span>Connecting Web3 wallet</span>
                            </li>
                            <li className="flex md:gap-4 gap-2">
                                <span>●</span>
                                <span>Proof of eligibility to participate</span>
                            </li>
                            <li className="flex md:gap-4 gap-2">
                                <span>●</span>
                                <span>Activity starts</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="absolute bg-[url('/assets/images/ecosystem-bg-down.png')] bg-[size:100%_auto] w-full aspect-[1440/276] top-full inset-x-0 z-50"></div>
    </section>
  );
};

export default Ecosystem;
