"use client";

const Contact = () => {
    return (
        <section className="bg-[#ECFFEC] border-y border-[#00B900] py-[60px]">
            <div className="w-full sm:max-w-[360px] max-w-[340px] mx-auto flex items-center flex-col justify-center gap-9">
                <h5 className="">
                    <img src="/assets/images/line-title.png" alt="LINEサポート" />
                </h5>
                <div className="flex w-full justify-center h-[85px]">
                    <a href="/" target="_blank" className="relative flex w-full  items-center justify-center gap-3 border-b-[5px] border-[#005800] bg-[#00B900]  font-black tracking-[0.2em] text-white duration-200 hover:border-b h-[80px] rounded-[20px] md:border-b-[5px] text-[24px] hover:mt-[5px]">
                        <span>サポートに質問</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
