export default function Begin() {
  return (
    <section className="relative bg-[url(/assets/images/introduction-bg.png)] bg-cover bg-center pt-10 pb-15 md:pt-14 md:pb-20">
      <div className="mx-auto w-full max-w-[1440px] px-5">
        <h4 className="fade-up">
          <p className="flex items-center justify-center [filter:drop-shadow(0_0_30px_#05ACC2)]">
            <img className="max-md:w-25" src="/assets/images/coin.png" alt="" />
          </p>
          <p className="text-center text-[40px] leading-snug font-extrabold text-[#01FFAA] md:text-[80px]">
            DWUって何？
          </p>
        </h4>
        <p className="fade-up mt-1 text-center text-[15px] font-black tracking-wider md:text-[18px]">
          DWU（ディーダブリューユー）は、ドルと同じ価値を持つデジタル資産です。
        </p>
        <div className="mx-auto md:w-[634px]">
          <div className="fade-up relative mt-6 border border-white/10 bg-[linear-gradient(180deg,_rgba(6,_28,_21,_0.85)_0%,_rgba(33,_71,_58,_0.80)_100%)] px-3 py-7 md:mt-10 md:px-15 md:py-12.5">
            <ul className="list-disc space-y-3 pl-6 text-[15px] font-semibold md:space-y-5 md:text-[18px]">
              {[
                '1 DWU = 1 USDT = 1ドル相当の価値があります',
                'USDTっていうのは、世界中で使われてるドルと連動したデジタル通貨のこと',
                'あなたのスマホの中で安全に管理できます',
                'DIVER Walletアプリで、いつでも残高チェックOK',
                '価値がはっきりしてるから安心！',
              ].map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
          <p className="fade-up mt-6 text-[15px] tracking-widest md:mt-10 md:text-[18px]">
            難しそうに聞こえるかもしれないけど、要は「デジタル版の$(ドル)」だと思ってね
            <span>
              <img className="inline" src="/assets/images/thumbs-up.svg" alt="" />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
