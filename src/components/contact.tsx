import { ReactNode } from 'react'

type ContactPropsType = {
  title: ReactNode
  children: ReactNode
}

const Contact = ({ title, children }: ContactPropsType) => {
  return (
    <section className="mb-[256px] max-md:mb-[82px]">
      <div className="container grid grid-cols-[.3fr_.7fr] gap-[3em] max-md:grid-cols-1 max-md:gap-[16px]">
        <div>
          <a
            href="mailto:info@yumeaci.co.jp"
            className="text-bold rounded-full bg-black px-[16px] py-[8px] text-white duration-150 hover:opacity-75"
          >
            Contact
          </a>
        </div>
        <div>
          <div className="mb-[24px] text-[calc(18px_+_2vw)] text-[calc(21px_+_4vw)]">
            {title}
          </div>
          <div className="mb-[24px] max-w-[800px] text-[24px] max-md:text-[18px]">
            {children}
          </div>
          <a
            href="mailto:info@1stcon.co"
            className="flex max-w-[200px] items-center gap-[16px] uppercase leading-none"
          >
            Contact Us
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
    </section>
  )
}

export default Contact
