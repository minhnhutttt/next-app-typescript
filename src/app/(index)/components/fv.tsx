"use client";

const FV = () => {
  return (
    <section className="relative overflow-hidden h-[560px] md:h-[860px] bg-[url('/assets/images/fv.png')] bg-cover">
        <div className="w-full max-w-[1194px] mx-auto h-full flex justify-end items-center">
            <div className="w-full md:max-w-[654px] bg-black/70 text-white md:py-[60px] py-8 md:px-10 px-6 flex flex-col items-center gap-[30px]">
                <p className="md:text-[32px] text-[18px] font-semibold leading-none">The Power to Regenerate the Future</p>
                <h1 className="drop-shadow-[0_0_30px_#6B71FA] py-3"><img className="max-md:max-w-[300px]" src="/assets/images/hgf-dao.svg" alt="HGF DAO" /></h1>
            </div>
        </div>
    </section>
  );
};

export default FV;
