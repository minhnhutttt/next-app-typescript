"use client";

const Overseas = () => {
  return (
    <section className="md:my-[80px] my-14 px-5">
        <div className="w-full max-w-[1100px] mx-auto border-[#EB001C] border bg-white rounded-[20px] xl:px-[57px] px-5 md:pt-20 pt-12 md:pb-10 pb-6">
            <div className="flex max-md:flex-col max-md:items-center gap-10 xl:gap-[52px]">
                <div className="md:mt-4">
                    <img className="max-md:w-[240px]" src="/assets/images/img-overseas.png" alt="" />
                </div>
                <div className="flex-1">
                    <div className="flex"><p className="md:text-[20px] text-[15px] font-bold border-b-[3px] border-[#F77F7F]">海外では当たり前のバックグラウンド調査</p></div>
                    <p className="md:text-[16px] text-[13px] font-medium mt-4 tracking-[0.2em] leading-[1.8]">
                    実は海外では採用前にバックグラウンド調査をするのが一般的です。一方で日本ではまだ浸透していません。プライバシーへの配慮や候補者に選考を辞退されるリスクから、調査を敬遠する企業が多いのです。<br /><br />しかし、採用のターゲットが外国人材の場合まで日本人採用にあわせる必要はありません。外国人材の採用は海外の常識に合わせることが重要です。適切なバックグラウンド調査を実施することは、外国人材の採用リスクを最小限に抑えることに直結します。これは、企業運営上の必要で重要なプロセスと言えます。
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-6 md:mt-8">
                <span className="w-[25px] border border-[#EB001C] border-r-0"></span>
                <p className="md:text-[18px] text-[13px] font-bold md:py-5 py-4">当社のAI搭載バックグラウンド調査サービスを活用し、外国人材採用を安心・安全に。<br />海外基準の徹底調査で、貴社の外国人材採用を強力にバックアップします。</p>
                <span className="w-[25px] border border-[#EB001C] border-l-0"></span>
            </div>
        </div>
    </section>
  );
};

export default Overseas;
