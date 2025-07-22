"use client";

const Sns = () => {
  return (
    <section className="overflow-hidden mt-10 px-[15px]">
      <div className="bg-[linear-gradient(158deg,_#6DB8F7_0%,_#0085F5_100%)] md:rounded-[100px] rounded-[50px] py-16 md:py-[100px] px-4 text-white">
        <h2 className="sm:text-[48px] text-[24px] font-bold text-center tracking-widest">
          ファンとのつながりが
        </h2>
        <div className="sm:text-[48px] text-[24px] font-bold text-center flex items-center justify-center tracking-widest">
          強くなる
          <div className="flex justify-center pt-1">
            <img
              className="max-md:w-[200px]"
              src="/assets/images/sns-title.svg"
              alt=""
            />
          </div>
        </div>
        <div className="relative sm:size-[446px] size-[300px] mx-auto mt-[60px]">
        {/* 中心のロゴ */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="center-logo sm:size-[280px] size-[200px] bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="text-center">
              <img src="/assets/images/img-ob.png" alt="" />
            </div>
          </div>
        </div>

        {/* 回転する円形のパス（視覚的なガイド） */}
        <div className="absolute inset-0 rounded-full">
        <img src="/assets/images/img-circle.png" alt="" /></div>

        {/* 4つのソーシャルアイコン */}
        <div className="rotating-container absolute inset-0">
          {/* Instagram アイコン */}
          <div className="social-icon origin-center absolute sm:size-[130px] size-[80px] bg-white rounded-full flex items-center justify-center shadow-lg icon-1">
            <div className="rounded-full flex items-center justify-center animate-[speakerBoom_12s_infinite_ease-out]">
             <img src="/assets/images/img-instagram.png" alt="" />
            </div>
          </div>

          {/* TikTok アイコン */}
           <div className="social-icon origin-center absolute sm:size-[130px] size-[80px] bg-white rounded-full flex items-center justify-center shadow-lg icon-2">
            <div className="rounded-full flex items-center justify-center animate-[speakerBoom_12s_infinite_ease-out]">
             <img src="/assets/images/img-ticktok.png" alt="" />
            </div>
          </div>

          {/* X (Twitter) アイコン */}
           <div className="social-icon origin-center absolute sm:size-[130px] size-[80px] bg-white rounded-full flex items-center justify-center shadow-lg icon-3">
            <div className="rounded-full flex items-center justify-center animate-[speakerBoom_12s_infinite_ease-out]">
             <img src="/assets/images/img-x.png" alt="" />
            </div>
          </div>

          {/* Threads アイコン */}
           <div className="social-icon origin-center absolute sm:size-[130px] size-[80px] bg-white rounded-full flex items-center justify-center shadow-lg icon-4">
            <div className="rounded-full flex items-center justify-center animate-[speakerBoom_12s_infinite_ease-out]">
             <img src="/assets/images/img-thread.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Sns;
