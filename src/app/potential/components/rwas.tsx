"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        id: "01",
        title: 'The Rise of RWAs as an Investment Opportunity',
        text: (<>In recent years, Real World Assets (RWAs) have emerged as a compelling investment opportunity, attracting the attention of discerning investors worldwide. The unique characteristics of RWAs, such as their scarcity, authenticity, and potential for long-term value appreciation, have made them an increasingly popular choice for those seeking to diversify their portfolios and protect their wealth. As the global economy faces uncertainties and traditional investment vehicles become less predictable, RWAs offer a tangible and enduring alternative that has the potential to withstand the test of time.</>)
    },
    {
        id: "02",
        title: 'The Enduring Value of RWAs',
        text: (<>RWAs are more than just financial assets; they are tangible pieces of history, culture, and human creativity. Whether it's a rare whiskey, a vintage trading card, or a masterpiece of fine art, each RWA tells a story and embodies a legacy that transcends time. These assets are often imbued with a sense of rarity and exclusivity, making them highly sought-after by collectors and investors alike. By investing in RWAs, investors not only have the opportunity to own a piece of this legacy but also to preserve and protect these cultural treasures for future generations. In a world where digital assets dominate, the tangible nature of RWAs provides a unique and enduring value proposition.</>)
    },
    {
        id: "03",
        title: 'The Growing RWA Market',
        text: (<>The RWA market has experienced significant growth in recent years, driven by increasing demand from investors who recognize the value and potential of these unique assets. As more people discover the benefits of RWA investment, the market is poised for continued expansion and evolution. This growth trend is expected to continue, presenting exciting opportunities for those who are well-positioned to capitalize on the rising value of RWAs. The increasing mainstream acceptance of alternative investments, coupled with the desire for tangible assets in an increasingly digital world, has fueled the growth of the RWA market. As a result, the market has seen an influx of new investors, increased liquidity, and the emergence of innovative investment platforms and vehicles.</>)
    },
    {
        id: "04",
        title: 'The Importance of a Disciplined Approach',
        text: (<>Investing in RWAs requires a disciplined, research-driven approach. Thorough due diligence must be conducted on each potential acquisition, evaluating factors such as rarity, provenance, and market demand to identify the most promising opportunities. This process involves a deep understanding of the specific asset class, as well as a keen awareness of market trends and historical performance. Diversification and long-term holding are key strategies for building a robust portfolio of RWAs that can weather market fluctuations and deliver sustained value appreciation over time. By carefully selecting a range of assets across different categories and maintaining a patient, long-term outlook, investors can maximize the potential of their RWA investments while mitigating risk.</>)
    },
    {
        id: "05",
        title: 'The Future of RWA Investment',
        text: (<>As the RWA market continues to evolve, new opportunities and innovations are expected to emerge. The integration of blockchain technology, for example, has the potential to revolutionize the way RWAs are authenticated, tracked, and traded, enhancing transparency and liquidity in the market. This development could unlock new possibilities for fractional ownership, making RWAs more accessible to a wider range of investors. Additionally, the growing interest in sustainable and socially responsible investing could drive demand for RWAs that align with these values, such as eco-friendly collectibles or assets with cultural or historical significance. Staying at the forefront of these developments and adapting strategies to capitalize on the changing landscape of RWA investment will be crucial for success in this exciting field.</>)
    },
    {
        id: "06",
        title: 'The Allure of RWA Investment',
        text: (<>Investing in RWAs is more than just a financial decision; it is an opportunity to participate in the preservation and celebration of human history and culture. The enduring value of these assets and their potential for long-term appreciation make them a compelling choice for investors seeking to diversify their portfolios and protect their wealth. Beyond the financial benefits, owning RWAs can also provide a sense of personal fulfillment and pride, as investors become custodians of rare and significant pieces of history. The tactile nature of these assets, combined with their unique stories and cultural significance, creates a deep emotional connection that goes beyond mere financial considerations.</>)
    },
    {
        id: "07",
        title: 'Has your curiosity been piqued?Welcome to the fascinating world of RWAs!',
        text: (<>As you explore this unique investment opportunity, you'll discover a rich tapestry of history, culture, and creativity that spans generations. From rare whiskeys to vintage trading cards, the RWA market offers a diverse range of assets that are sure to captivate and inspire. While the journey may be complex and requires careful consideration, the rewards of preserving these cultural treasures and potentially realizing long-term value appreciation are undeniable. As you delve deeper into the world of RWAs, you'll find yourself not just an investor, but a custodian of history, playing a vital role in safeguarding these assets for generations to come. So, take a moment to immerse yourself in the stories behind these incredible assets and imagine the possibilities that await in the exciting world of RWA investment.</>)
    },
]

const Rwas = () => {
    const ref = useScrollAnimations();
  return (
    <section ref={ref}>
        <div className="w-full md:max-w-[1260px] max-w-[440px] mx-auto">
            {data.map((item, index)=>(
                <div className="group odd:bg-white even:bg-black" key={index}>
                    
                </div>
            ))}
        </div>
    </section>
  );
};

export default Rwas;
