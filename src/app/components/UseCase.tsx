"use client";

import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Articles = [
  {
    title01: "/assets/images/case-txt-01.png",
    title02: "/assets/images/case-ttl-01.png",
    image: "/assets/images/case-01.jpg",
    text: (
      <>
        企業同士の取引において、契約書をNFT化することで、契約内容の改ざん防止、効率的なアクセス、取引の透明性が実現できます。
      </>
    ),
  },
  {
    title01: "/assets/images/case-txt-02.png",
    title02: "/assets/images/case-ttl-02.png",
    image: "/assets/images/case-02.jpg",
    text: (
      <>
        デジタルドキュメントのNFTとして発行することで、なりすましや改ざんの心配がなくなる。紙の書類を持ち歩く必要がなくなり、いつでも書類を必要な相手に提示できます。
      </>
    ),
  },
  {
    title01: "/assets/images/case-txt-03.png",
    title02: "/assets/images/case-ttl-03.png",
    image: "/assets/images/case-03.jpg",
    text: (
      <>
        管理者のみが中身を確認でき、いつ誰に転送をしたかなど全てが記録として残ります。NFTの情報は暗号化され保護されます。
      </>
    ),
  },
  {
    title01: "/assets/images/case-txt-04.png",
    title02: "/assets/images/case-ttl-04.png",
    image: "/assets/images/case-04.jpg",
    text: (
      <>
        弁護士事務所や法務部が顧客の法律文書をNFT化し、
        法律文書の安全な保管と共有により、重要な法的手続きが効率的に進められます。
      </>
    ),
  },
  {
    title01: "/assets/images/case-txt-05.png",
    title02: "/assets/images/case-ttl-05.png",
    image: "/assets/images/case-05.jpg",
    text: (
      <>
        著作権を持つデジタル作品（文章など）をデジタルドキュメントにし、その作品の所有権を明確にすることで、知的財産の侵害を防止します。
      </>
    ),
  },
];

const UseCase = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:mt-[200px] mt-[110px]">
      <Title sub="UseCase">使用事例</Title>
      <div className="bg-black py-4 md:mt-16 mt-8">
        <div className="flex max-md:flex-col items-center gap-5 justify-center mx-5 md:mx-[5vmin] overflow-hidden md:skew-x-[3deg]">
          {Articles.map((item, index) => (
            <div
              className="group md:hover:flex-grow-[10] md:flex-1 [transition:all_1s_ease-in-out] md:h-[75vmin] h-[400px] relative"
              key={index}
            >
              <img
                className="w-full h-full object-cover [transition:all_1s_ease-in-out] filter grayscale-[100%] filter md:group-hover:grayscale-0 max-md:grayscale-0"
                src={item.image}
              />
              <div className="absolute bottom-0 left-0 md:group-hover:w-full max-md:w-full group-hover:bottom-4">
                <div className="md:group-hover:text-center md:group-hover:rotate-0 max-md:rotate-0 md:group-hover:-skew-x-3 min-w-[320px] w-full h-[40px] bg-[rgba(13,_10,_142,_0.8)] -rotate-90 origin-[0%_0%] [transition:all_0.5s_ease-in-out] text-center  whitespace-nowrap flex items-center justify-center max-md:px-5">
                    <img
                    className="skew-x-[-3deg] max-md:hidden md:group-hover:hidden rotate-90"
                    src={item.title01}
                    alt=""
                    />
                    <img
                    className="md:group-hover:block md:hidden max-md:max-w-[100%]"
                    src={item.title02}
                    alt=""
                    />
                </div>
                <div className="md:group-hover:bg-black/80 max-md:bg-black/80 md:opacity-0 md:group-hover:opacity-100 md:pointer-events-none md:group-hover:pointer-events-auto md:translate-y-full md:absolute md:group-hover:relative md:group-hover:translate-y-0 flex items-center justify-center md:p-[30px] p-5 duration-150 delay-500">
                    <p className="font-gothic w-full max-w-[556px] md:opacity-0 md:group-hover:opacity-100 delay-500 duration-300 text-white md:text-[18px] text-[14px] font-light">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCase;
