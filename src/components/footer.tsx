'use client'

const Footer = () => {
  return (
    <footer className="relative overflow-clip border-t border-[#F34927] px-5 pb-5 pt-[80px] md:pt-[132px]">
      <span className="pointer-events-none absolute aspect-[438/431] w-[200px] animate-[bounceRandomly1_80s_linear_infinite] bg-[url(/assets/images/footer-star.png)] bg-no-repeat [background-size:100%_100%] md:w-[438px]"></span>
      <span className="pointer-events-none absolute aspect-[438/431] w-[200px] animate-[bounceRandomly3_80s_linear_infinite] bg-[url(/assets/images/footer-star.png)] bg-no-repeat [background-size:100%_100%] md:w-[438px]"></span>
      <div className="mx-auto w-full max-w-[936px]">
        <div className="flex justify-center">
          <a href="/" className="">
            <img src="/assets/images/logo.svg" alt="" />
          </a>
        </div>
        <div className="mt-10 grid divide-[#111111] pb-[100px] text-[18px] font-light md:mt-[60px] md:grid-cols-3 md:divide-x md:pb-[185px] md:text-[20px]">
          <a
            href="/"
            className="flex h-10 items-center justify-center px-4 text-center"
          >
            HOME
          </a>
          <a
            href="/about"
            className="flex h-10 items-center justify-center px-4 text-center"
          >
            ABOUT
          </a>
          <a
            href="/members"
            className="flex h-10 items-center justify-center px-4 text-center"
          >
            MEMBERS
          </a>
        </div>
      </div>
      <p className="text-center text-[12px] font-light md:text-[14px]">
        © 2025  A-Nexus
      </p>
    </footer>
  )
}

export default Footer
