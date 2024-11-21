'use client'

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#101010] px-5 pb-2.5 pt-7 md:px-10 md:pt-[34px]">
      <div className="mx-auto mb-2.5 flex w-full max-w-[1020px] items-center justify-between max-md:flex-col max-md:pb-10">
        <a href="/" className="flex">
          <img
            className="max-md:w-[200px]"
            src="/assets/images/logo-footer.svg"
            alt=""
          />
        </a>
        <div className="flex items-end tracking-widest max-md:mt-10">
          <a
            href="/whitepaper"
            className="block text-[18px] font-medium text-white"
          >
            WHITEPAPER
          </a>
        </div>
      </div>
      <p className="text-center text-[14px] font-medium text-white">
        © 2024 CIP DAO
      </p>
    </footer>
  )
}

export default Footer
