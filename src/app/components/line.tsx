import useScrollAnimations from "@/hooks/useScrollAnimations";

const Line = () => {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="bg-[#01B202] p-5 md:p-[50px] flex justify-center"
    >
      <div className="fade-up w-full max-w-[630px] mx-auto bg-white rounded-[30px] flex items-center px-7 py-[30px] gap-10 max-md:flex-col">
        <figure>
          <img src="/images/img-line.png" alt="" />
        </figure>
        <div className="">
          <div className="md:text-[24px] text-[14px] font-bold underline tracking-widest">
            サポートLINEのご案内
          </div>
          <div className="md:text-[18px] text-[13px] mt-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <figure>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <path
                    d="M0.461304 0V17H17.4613V6.01076L14.6722 8.79982V14.2109H3.25037V2.78906H8.66148L11.4505 0H0.461304ZM15.0531 0.214781L8.9022 6.36666L6.70455 4.16901L4.45089 6.42371L8.9021 10.8739L11.1558 8.62025L17.3066 2.46837L15.053 0.214724L15.0531 0.214781Z"
                    fill="#01B202"
                  />
                </svg>
              </figure>
              <span>200枚を超える枚数が必要な方</span>
            </div>
            <div className="flex items-center gap-2.5">
              <figure>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <path
                    d="M0.461304 0V17H17.4613V6.01076L14.6722 8.79982V14.2109H3.25037V2.78906H8.66148L11.4505 0H0.461304ZM15.0531 0.214781L8.9022 6.36666L6.70455 4.16901L4.45089 6.42371L8.9021 10.8739L11.1558 8.62025L17.3066 2.46837L15.053 0.214724L15.0531 0.214781Z"
                    fill="#01B202"
                  />
                </svg>
              </figure>
              <span>複数種類の名刺が必要な方</span>
            </div>
            <div className="flex items-center gap-2.5">
              <figure>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <path
                    d="M0.461304 0V17H17.4613V6.01076L14.6722 8.79982V14.2109H3.25037V2.78906H8.66148L11.4505 0H0.461304ZM15.0531 0.214781L8.9022 6.36666L6.70455 4.16901L4.45089 6.42371L8.9021 10.8739L11.1558 8.62025L17.3066 2.46837L15.053 0.214724L15.0531 0.214781Z"
                    fill="#01B202"
                  />
                </svg>
              </figure>
              <span>その他疑問点や質問がある方</span>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <a
              href="https://lin.ee/QAw6RjL"
              target="_blank"
              className="duration-300 hover:opacity-75"
            >
              <img src="/images/btn-line.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Line;
