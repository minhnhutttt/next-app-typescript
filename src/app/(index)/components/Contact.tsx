const Contact =() => {
  return (
    <section 
      className="flex items-center justify-center bg-gradient-to-r from-[#10E188] to-[#05BAEA] md:py-[100px] py-16 px-5"
    >
      <div className="bg-white py-[110px] w-full mx-auto text-center max-w-[1000px] md:rounded-[30px] rounded-[20px] px-5">
        <div className="flex justify-center items-center">
          <img src="/assets/images/logo.png" alt="" />
        </div>
        <p 
          className="font-bold md:text-[24px] leading-relaxed md:mt-10 mt-6 mb-6"
          role="text"
        >
          CVR改善を本質的に実現したい方は、ぜひ一度ご相談ください。
        </p>
        <div className="flex justify-center">
          <a
          href="/"
          className="w-[260px] md:w-[360px] md:h-[80px] h-16 flex items-center justify-center bg-gradient-to-r from-[#10E188] to-[#05BAEA] text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105 gap-1.5 md:gap-2.5"
        >
          <img className="max-md:w-7 md:w-9" src="/assets/images/ic_line.svg" alt="" />
          <span className="text-[18px] md:text-[24px]">お問い合わせ</span>
          <img src="/assets/images/ic_arrow-right.svg" alt="" className="absolute right-[5px] max-md:w-6 md:w-10" />
        </a>
        </div>
      </div>
    </section>
  );
};


export default Contact;