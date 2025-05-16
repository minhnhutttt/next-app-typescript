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
        <div className="mt-10 grid divide-[#111111] pb-8 text-[18px] font-light md:mt-[60px] md:grid-cols-3 md:divide-x md:pb-12 md:text-[20px]">
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
            ABOUT US
          </a>
          <a
            href="/members"
            className="flex h-10 items-center justify-center px-4 text-center"
          >
            MANAGEMENT TEAM
          </a>
        </div>
        <div className="relative flex justify-center pb-10 md:pb-14 md:gap-[60px] gap-7">
          <a
            href="https://www.facebook.com/share/1AbGdUJcw2/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-100 hover:opacity-75"
          >
            <img
              className="max-md:w-14"
              src="/assets/images/ic-facebook.svg"
              alt="Facebook"
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-100 hover:opacity-75"
          >
            <img
              className="max-md:w-14"
              src="/assets/images/ic-instagram.svg"
              alt="Instagram"
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-100 hover:opacity-75"
          >
            <img
              className="max-md:w-14"
              src="/assets/images/ic-tiktok.svg"
              alt="Tiktok"
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-100 hover:opacity-75"
          >
            <img
              className="max-md:w-14"
              src="/assets/images/ic-x.svg"
              alt="X"
            />
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
