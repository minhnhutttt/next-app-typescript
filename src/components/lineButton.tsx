'use client'

const LineButton = () => {
  return (
    <div>
      <div className="mx-auto w-full max-w-[510px]">
        <div className="relative mb-[clamp(1px,2.545vh,28px)] rounded-2xl bg-[#101541] p-1.5 text-center text-[clamp(1px,1.55vh,18px)] text-white md:text-[clamp(1px,1.636vh,18px)]">
          楽しく稼げるLIVE配信をしたい方お待ちしております
          <span className="absolute left-1/2 top-full -translate-x-1/2">
            <img src="/assets/images/bg-bubble.png" alt="" />
          </span>
        </div>
        <div className="flex h-[65px] w-full justify-center md:h-[clamp(1px,11.273vh,124px)]">
          <a
            href="https://line.me/R/ti/p/%40300kbcvu"
            target="_blank"
            className="relative flex h-[60px] w-full max-w-[510px] items-center justify-center gap-3 rounded-[10px] border-b-[5px] border-[#005800] bg-[#01B902] text-[20px] font-black tracking-[0.2em] text-white duration-200 hover:mt-[4px] hover:border-b md:h-[clamp(1px,10.455vh,115px)] md:rounded-[24px] md:border-b-[9px] md:text-[clamp(1px,2.545vh,28px)] md:hover:mt-[8px]"
          >
            <figure>
              <img
                className="max-md:w-[32px]"
                src="/assets/images/ic-line.png"
                alt=""
              />
            </figure>
            <span>LINEでご応募</span>
            <svg
              className="absolute right-3 max-md:w-3 md:w-[17px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17 26"
              fill="none"
            >
              <path
                d="M16.1331 10.9635C17.2273 11.9111 17.2273 13.6085 16.1331 14.5561L4.3692 24.7439C2.8302 26.0767 0.437239 24.9835 0.437239 22.9476L0.43724 2.57198C0.43724 0.536069 2.8302 -0.557154 4.3692 0.77566L16.1331 10.9635Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default LineButton
