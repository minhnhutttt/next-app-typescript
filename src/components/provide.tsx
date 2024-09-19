import { ReactNode } from 'react'

type dataContent = {
  id: string
  title: string
  content: ReactNode
}

type ProvidePropsType = {
  title: ReactNode
  items: dataContent[]
}
const Provide = ({ title, items }: ProvidePropsType) => {
  return (
    <section className="mb-[256px] max-md:mb-[82px]">
      <div className="container">
        <div className="grid grid-cols-[.5fr_.5fr] gap-[32px] max-md:grid-cols-1 max-md:gap-[64px] max-md:px-0">
          <div>
            <div className="sticky top-[20%]">
              <h2 className="mb-[32px] font-anton text-[calc(24px_+_5vw)] uppercase leading-[1.25]">
                {title}
              </h2>
              <a
                className="flex max-w-[200px] items-center gap-[16px] uppercase leading-none"
                href="/about"
              >
                About us
                <div className="block flex aspect-square w-[2em] items-center justify-center rounded-full bg-black text-[21px]">
                  <img
                    src="/assets/images/arrow-w.svg"
                    className="max-h-[50%]"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="relative flex flex-col gap-[64px] max-md:gap-[48px]">
            {items.map((item) => (
              <div
                className="relative rounded-[12px] border border-solid border-[rgba(172,172,172,0.3)] bg-white p-[10%] max-md:p-[8%]"
                key={item.id}
              >
                <div className="absolute left-[-1em] top-[-1em] flex h-[3em] w-[3em] items-center justify-center rounded-full bg-black text-[21px] text-white max-md:text-[16px]">
                  {item.id}
                </div>
                <div className="mb-[24px] text-[calc(16px_+_2vw)] uppercase">
                  {item.title}
                </div>
                <div>{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Provide
