const Contact = () => {
    return (
      <section className="relative md:pt-[70px] pt-[50px] md:pb-[244px] pb-[120px] px-12 md:px-24">
        <div data-scroll className="ani-fade-up w-full max-w-[400px] md:max-w-[727px] md:h-[295px] md:border-[6px] border-[3px] border-[#181818] rounded-[20px] mx-auto bg-[linear-gradient(90deg,_rgba(255,_117,_195,_0.40)_0%,_rgba(255,_166,_71,_0.40)_20%,_rgba(255,_232,_63,_0.40)_40%,_rgba(159,_255,_91,_0.40)_60%,_rgba(112,_226,_255,_0.40)_80%,_rgba(205,_147,_255,_0.40)_100%)] flex p-5 relative max-md:flex-col">
            <span className="absolute md:top-[-50px] top-[-36px] md:left-[-80px] left-[-40px]">
                <img className="max-md:w-[200px]" src="/assets/images/contact.png" alt="" />
            </span>
            <div className="md:w-1/2 flex items-center justify-center h-full md:border-r max-md:border-b border-dotted border-[#181818]">
                <p className="md:text-[32px] text-[18px] font-black p-5 tracking-widest">お問い合わせ</p>
            </div>
            <div className="md:w-1/2 flex items-center justify-center flex-col max-md:p-5">
                <a href="https://lin.ee/jBWR0Qu" target="_blank" className="duration-150 hover:opacity-75">
                    <img className="max-md:w-[120px]" src="/assets/images/line.png" alt="" />
                </a>
                <p className="md:text-[18px] text-[14px] mt-2">
                    LINEからお問い合わせく<br />ださい。
                </p>
            </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  