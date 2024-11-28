"use client";

const Introduction = () => {
  return (
    <section className="relative h-screen bg-[url(/assets/images/intro-bg.png)] bg-cover overflow-hidden bg-center">
        <h3 className="absolute top-0 left-0">
            <img src="/assets/images/kanpai.png" alt="" />
        </h3>
        <div className="w-full max-w-[1400px] mx-auto pt-[100px] dt:pt-[70px] px-5 max-md:flex  max-md:flex-col h-full">
            <h3 className="leading-loose text-[36px] md:text-[80px] lg:text-[96px] font-medium tracking-wide">What is Sake Token?</h3>
            <p className="max-w-[730px] md:text-[18px] font-medium md:px-10 [text-shadow:0_0_5px_#fff]">
            Sake Token is a digital universal point system designed to promote the consumption of sake and other alcoholic beverages while revitalizing the sake industry. Built as a DRC20 token using blockchain technology, Sake Token allows consumers to earn points each time they purchase sake and redeem them at participating stores nationwide.
            </p>
        </div>
    </section>
  );
};

export default Introduction;
