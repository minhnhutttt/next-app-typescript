"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        title: 'Realizing the vision of EXO DAO',
        text: (<>
        EXO DAO promotes innovation in the fields of regenerative medicine, personalized medicine, and environmental protection through the development of exosome technology. <br />
        We aim to maximize the potential of exosomes and provide new treatments and solutions to people around the world.
        </>)
    },
    {
        title: 'Achieving a sustainable future',
        text: (<>
        Exosome technology has the potential to be key to sustainable medicine and environmental protection. <br />
        The formation of an ecosystem through EXO tokens will foster technological innovation and realize a sustainable future to improve the welfare of society as a whole.
        </>)
    },
    {
        title: 'Community invitation',
        text: (<>
        We invite researchers, developers, investors, medical professionals, and all those interested in exosome technology to EXO DAO. Take the first step to contribute to human health and the planet's environment.
        </>)
    },
]

const Afterword = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative "
    >
        <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        >
          <source src="/assets/videos/afterword.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative md:pt-[133px] pt-[90px] md:pb-[122px] pb-20 px-5 bg-[#00164A]/[0.8]">
      <div className="w-full max-w-[1340px] mx-auto">
        <div className="relative flex justify-center">
            <div><img className="max-md:w-[120px]" src="/assets/images/afterword-ic.png" alt="" /></div>
            <h3 className="fade-up absolute inset-0 flex items-center justify-center text-center xl:text-[64px] md:text-[44px] text-[32px] font-medium tracking-[0.095em]">
                Conclusion and future prospects
            </h3>
        </div>
        <div className="flex flex-wrap w-full max-w-[1323px] mx-auto justify-center md:gap-x-10 md:gap-y-[60px] gap-8 mt-10 md:mt-14">
            {data.map((item, index) => (
                <div className="fade-up md:w-[640px]" key={index}>
                    <p className="font-bold md:text-[24px] text-[18px]">{item.title}</p>
                    <p className="md:text-[16px] text-[13px] md:mt-[31px] mt-5">{item.text}</p>
                </div>
            ))}
        </div>
        </div>        
      </div>
    </section>
  );
};

export default Afterword;
