"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    image: "/assets/images/reason-img-01.jpg",
    imageSp: "/assets/images/reason-img-01-sp.jpg",
    title: "Transparency and Efficiency",
    subTitle: (
      <>
        Experience a transparent decision-making process using tokens.
      </>
    ),
  },
  {
    image: "/assets/images/reason-img-02.jpg",
    imageSp: "/assets/images/reason-img-02-sp.jpg",
    title: "Voting",
    subTitle: (
      <>
        Vote to focus on specific areas of application of PS cell research
      </>
    ),
  },
  {
    image: "/assets/images/reason-img-03.jpg",
    imageSp: "/assets/images/reason-img-03-sp.jpg",
    title: "Ethical Medicine",
    subTitle: (
      <>
        Contribute to society through ethically-driven medical approaches.
      </>
    ),
  },
  {
    image: "/assets/images/reason-img-04.jpg",
    imageSp: "/assets/images/reason-img-04-sp.jpg",
    title: "Collaborate with the Community",
    subTitle: (
      <>
        Work with a diverse global community for medical advancement.
      </>
    ),
  },
];

const Reason = () => {
  const ref = useScrollAnimations();
  return (
    <section
    id="reason"
      ref={ref}
      className="relative px-8 py-[60px] md:bg-[url('/assets/images/reason-bg.jpg')] bg-[url('/assets/images/reason-bg-sp.jpg')] bg-cover"
    >
      <div className="w-full md:max-w-[1100px] max-w-[475px] mx-auto">
          <div className="flex items-center justify-center text-center">
            <h3 className="fade-up text-[#FDD0DF] text-[24px] md:text-[36px] font-bold md:leading-[1.1] leading-[1.3]">
            Why Choose iPS DAO
            </h3>
            </div>
          <div className="grid md:gap-y-5 gap-y-10 gap-x-10 mt-10 md:grid-cols-2 py-5">
            {data.map((item, index) => (
              <div
                key={index}
                className="fade-up w-full max-md:h-[392px] flex items-center max-md:flex-col gap-4 py-4 px-5 bg-white/90 rounded-md [box-shadow:0px_1px_3px_0px_rgba(0,_0,_0,_0.10),_0px_1px_2px_0px_rgba(0,_0,_0,_0.06)]"
              >
                <figure className="rounded-md overflow-hidden">
                  <img className="max-md:hidden" src={item.image} alt={item.title} />
                  <img className="md:hidden" src={item.imageSp} alt={item.title} />
                </figure>
                <div className="flex-1 space-y-2">
                  <h5 className="text-[20px] font-medium leading-[1.4] max-md:text-center">
                    {item.title}
                  </h5>
                  <p className="text-[16px] text-[#3F3F46] leading-[1.5] md:min-h-[95px]">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Reason;
