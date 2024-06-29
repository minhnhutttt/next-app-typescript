"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        image: '/assets/images/img-about-01.png',
        title: 'Our Journey',
        text: (<>At Ultimate Holdings Group Inc(UHGI), we are driven by a passion for preserving and celebrating the world's most precious and rare assets. Our company was founded with the vision of unlocking the untapped potential of real world assets (RWAs) as a unique and valuable investment opportunity.</>)
    },
    {
        image: '/assets/images/img-about-02.png',
        title: 'Our Mission',
        text: (<>Our mission is to protect and enhance the value of RWAs for generations to come. We believe that these tangible, historically significant assets deserve to be cherished, preserved, and shared with the world.</>)
    },
    {
        image: '/assets/images/img-about-03.png',
        title: 'Our Team',
        text: (<>We have assembled a team of experts from diverse backgrounds, including finance, history, art, and technology. United by a shared passion for RWAs, our team brings a wealth of knowledge and experience to every aspect of our operations.</>)
    },
    {
        image: '/assets/images/img-about-04.png',
        title: 'Our Approach',
        text: (<>We take a long-term, disciplined approach to investing in RWAs. Our rigorous research and due diligence process ensures that we acquire only the most promising assets with the greatest potential for appreciation. Once in our care, these assets are meticulously managed and protected using state-of-the-art technology and best practices in asset preservation.</>)
    },
    {
        image: '/assets/images/img-about-05.png',
        title: 'Our Commitment',
        text: (<>At UHGI, we are committed to upholding the highest standards of integrity, transparency, and accountability in all of our operations. Our dedicated professionals work tirelessly to safeguard the value and legacy of the RWAs in our portfolio, ensuring that these precious assets are preserved for generations to come.</>)
    },
]

const Articles = () => {
    const ref = useScrollAnimations();
  return (
    <section ref={ref}>
        <div className="w-full  mx-auto">
            {data.map((item, index)=>(
                <div className="group odd:bg-black" key={index}>
                    <div className="group-even:flex-row-reverse max-md:group-even:flex-col flex gap-8 md:gap-14 lg:gap-[86px] max-md:flex-col md:py-[169px] items-end py-14 max-md:w-full md:max-w-[1440px] max-md:max-w-[440px] mx-auto">
                        <div data-scroll="out" className="relative max-md:w-auto max-dt:w-1/2">
                            <div className="absolute group-even:right-[30px] md:group-even:right-[120px] group-odd:left-[30px] md:group-odd:left-[120px] top-2 z-10">
                                <Title rect="lg:text-[128px] md:text-[80px] text-[50px] group-odd:text-white group-even:text-black leading-none whitespace-nowrap">{item.title}</Title>
                            </div>
                            <figure className="fadein relative">
                                <img src={item.image} alt="" />
                            </figure>
                        </div>
                        <div data-scroll="out" className="font-lato flex-1 max-w-[598px] max-md:px-5 md:group-odd:pr-10 md:group-even:pl-10 group-odd:text-white group-even:text-black">
                            <p className="fadein lg:text-[18px] md:text-[16px] text-[14px] font-medium md:mt-5 leading-[1.3]">
                            {item.text}
                            </p>
                        </div>
                </div>
            </div>
            ))}
        </div>
    </section>
  );
};

export default Articles;
