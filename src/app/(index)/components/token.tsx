"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";
const data = [
  {
    title: "Token Issuance and Distribution",
    text: `Fave Coin is the native token used for activities and rewards on the platform. Tokens are distributed as follows`,
    list: [
      {
        li: 'Community rewards: 50% - Rewards earned by users for "likes" and posts',
      },
      {
        li: "Developers and operations: 20% - Costs for maintaining and developing the platform",
      },
      {
        li: "Marketing and partnerships: 15% - Funds for platform expansion and partnership activities",
      },
      {
        li: "Reserve funds: 15% - Funds for emergencies and unexpected situations",
      },
    ],
  },
  {
    title: "Token Usage",
    text: `Users can use Fave Coin in the following ways`,
    list: [
      {
        li: "Purchasing NFTs: Buy NFTs that provide access to exclusive content and benefits.",
      },
      {
        li: `Tipping: Directly support other users' content through tipping.`,
      },
      {
        li: "Withdrawal of rewards: Withdraw earned Fave Coins to external wallets and exchange them for other cryptocurrencies.",
      },
    ],
  },
];
const Token = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:pt-[115px] pt-16">
      <Title>Tokenomics</Title>
      <div className="md:px-0 px-5 md:pt-9 pt-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="fade-up w-full max-w-[984px] mx-auto mb-7 rounded-[24px] md:p-[32px] p-[20px] border-2 border-[rgba(0,0,0,0.16)] bg-[rgba(255,255,255,0.3)]"
          >
            <h3 className="md:text-[24px] text-[18px] font-bold tracking-wider">
              {item.title}
            </h3>
            <p className="md:text-[18px] text-[14px]  mt-3 mb-4">
              {item.text}
            </p>
            {item.list && item.list.length > 0 && (
              <ul className="list-disc pl-7 leading-[1.3]">
                {item.list.map((listItem, listIndex) => (
                  <li
                    key={listIndex}
                    className="md:text-[16px] text-[12px]"
                  >
                    {listItem.li}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Token;
