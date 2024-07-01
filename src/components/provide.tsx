import { ReactNode } from "react";

type dataContent = {
    id: string;
    title: string;
    content: ReactNode;
}

type ProvidePropsType = {
    title: ReactNode;
    items: dataContent[];
};
const Provide = ({ title, items }: ProvidePropsType) => {
  return (
    <section className="mb-[256px] max-md:mb-[82px]">
      <div className="container">
        <div className="grid grid-cols-[.5fr_.5fr] max-md:grid-cols-1 gap-[32px] max-md:gap-[64px] max-md:px-0">
          <div>
            <div className="sticky top-[20%]">
              <h2 className="font-anton text-[calc(24px_+_5vw)] mb-[32px] uppercase leading-[1.25]">
                {title}
              </h2>
              <a
                className="max-w-[200px] flex items-center gap-[16px] uppercase leading-none"
                href="/about"
              >
                About us
                <div className="text-[21px] bg-black w-[2em] block flex justify-center items-center rounded-full aspect-square">
                  <img
                    src="/assets/images/arrow-w.svg"
                    className="max-h-[50%]"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[64px] max-md:gap-[48px] relative">
            {items.map((item)=>(
            <div className="bg-white p-[10%] max-md:p-[8%] rounded-[12px] border border-solid border-[rgba(172,172,172,0.3)] relative" key={item.id}>
              <div className="text-[21px] max-md:text-[16px] text-white flex items-center justify-center bg-black w-[3em] h-[3em] absolute top-[-1em] left-[-1em] rounded-full">
                {item.id}
              </div>
              <div className="font-anton text-[calc(16px_+_2vw)] uppercase mb-[24px]">
                {item.title}
              </div>
              <div>
              {item.content}
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provide;
