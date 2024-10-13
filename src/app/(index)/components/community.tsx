"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";
const data = [
  {
    class: "#EC9DBC",
    icon: "/assets/images/community_img1.jpg",
    title: (
      <>
        Introduction of
        <br /> Decentralized Governance
      </>
    ),
    text: `The Fave Coin platform adopts decentralized governance, allowing token holders to participate in important decision-making for the platform. Users can contribute to the project's direction and feature improvements through proposal submissions and voting.`,
  },
  {
    class: "#7ECAF0",
    icon: "/assets/images/community_img2.jpg",
    title: "Community Contributions and Incentives",
    text: (
      <>
        Fave Coin's success is driven by the participation and contribution of
        its users to the community.
        <br />
        Active users and the community will voluntarily promote the project,
        provide feedback, and test new features.
        <br />
        Users will be able to contribute to the project in a variety of ways and
        receive token rewards in return.
      </>
    ),
  },
];
const Community = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:pt-[130px] pt-16">
      <Title>Governance and Community Role</Title>
      <div className="bg-[url(/assets/images/bg_dot.png)] bg-cover pt-14 mt-12 md:px-0 px-5">
        <div className="w-full max-w-[1158px] mx-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className={`fade-up bg-[rgba(255,255,255,0.7)] md:px-[30px] px-[15px] pt-[20px] md:pb-[55px] pb-[25px] md:w-[620px] w-full ${index % 2 !== 0 ? "ml-auto xl:-top-24 md:-left-0 relative md:mt-0 mt-5" : ""}`}
            >
              <figure>
                <img className="w-auto mx-auto" src={item.icon} alt="" />
              </figure>
              <div className="md:px-10 px-2 pt-2">
                <h3 className="md:text-[32px] text-[18px] font-bold mt-1 md:leading-[38px] leading-5 tracking-widest">
                  {item.title}
                </h3>
                <p className="md:text-[18px] text-[14px] font-normal mt-5 leading-6 tracking-widest">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
