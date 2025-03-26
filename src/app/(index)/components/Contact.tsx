"use client";

const Contact = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAE2D7] md:rounded-t-[100px] rounded-t-[40px] md:mt-[240px] mt-[150px] px-5 md:pt-[130px] pt-[60px] bg-[url(/assets/images/line.svg)] bg-no-repeat bg-top max-md:bg-contain md:bg-[position:top_40px_center] md:pb-[130px] pb-20">
        
      <div className="">
        <h3 className="md:text-[64px] xl:text-[128px] text-[clamp(20px,7.5vw,60px)] leading-[1.2] font-semibold text-center overflow-hidden tracking-widest">
          <span>CONTACT</span>
        </h3>
        <p className="md:text-[32px] text-[20px] font-semibold text-center tracking-widest mt-6 md:mt-10">For Investors & Media </p>
        <p className="md:w-[640px] md:text-[18px] text-[15px] mx-auto mt-7">
        Interested in learning more about investment opportunities or media inquiries? Our team is  ready to assist you. 
        </p>
        <div className="flex justify-center md:mt-[72px] mt-[50px]">
          <a href="#" className="md:w-[340px] w-[300px] h-20 md:h-[110px] flex items-center justify-center bg-[#F34927] rounded-full md:text-[30px] text-[20px] text-[#FAE2D7]">CONTACT US</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
