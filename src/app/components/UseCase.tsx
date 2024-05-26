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
      <div className="bg-black py-4 md:mt-16">
        <div className="flex items-center gap-5 justify-center mx-[5vmin] overflow-hidden skew-x-[3deg]">
          {Articles.map((item, index) => (
            <div
              className="group hover:flex-grow-[10] flex-1 [transition:all_1s_ease-in-out] h-[75vmin] relative"
              key={index}
            >
              <img
                className="w-full h-full object-cover [transition:all_1s_ease-in-out] filter grayscale-[100%] filter group-hover:grayscale-0"
                src={item.image}
              />
              <div className="">
                <div className="group-hover:text-center group-hover:top-[calc(100% - 60px)] group-hover:w-full group-hover:text-[white] group-hover:rotate-0 group-hover:-skew-x-3 min-w-[320px] w-full h-[60px] bg-[rgba(13,_10,_142,_0.8)] -rotate-90 origin-[0%_0%] [transition:all_0.5s_ease-in-out] text-center absolute bottom-[0] left-[0] whitespace-nowrap flex items-center justify-center">
                    <img
                    className="skew-x-[-3deg] group-hover:hidden rotate-90"
                    src={item.title01}
                    alt=""
                    />
                    <img
                    className="group-hover:block hidden"
                    src={item.title02}
                    alt=""
                    />
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
