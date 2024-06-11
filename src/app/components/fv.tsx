"use client";

const FV = () => {
  return (
    <section>
        <div className="bg-[url('/assets/images/fv.png')] bg-cover h-[940px] pt-[90px]">
            <div className="w-full max-w-[1420px] mx-auto relative h-full">
                <figure>
                    <img src="/assets/images/fv-pet.png" alt="" />
                </figure>
                <div className="absolute font-bold inset-0 flex justify-end items-end">
                    <div className="w-[53%] pb-14 leading-[1.4]">
                        <p className="md:text-[77px]"><span className="text-[107px] text-white leading-none pb-2 px-2 font-bold inline-block rounded-[20px] bg-[linear-gradient(122deg,_#2C87E3_10.27%,_#7E22D7_100.14%)]">今</span>も愛する</p>
                        <p className="md:text-[77px]">ペットとの<span className="text-[107px] text-white leading-none pb-2 px-2 font-bold inline-block rounded-[20px] bg-[linear-gradient(122deg,_#2C87E3_10.27%,_#7E22D7_100.14%)]">絆</span></p>
                        <p className="md:text-[77px]">デジタルの力で</p>
                        <p className="md:text-[77px]"><span className="text-[107px] text-white leading-none pb-2 px-2 font-bold inline-block rounded-[20px] bg-[linear-gradient(122deg,_#2C87E3_10.27%,_#7E22D7_100.14%)]">復活</span>しませんか？</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default FV;
