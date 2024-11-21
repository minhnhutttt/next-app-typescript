'use client'

const Button = () => {
  return (
    <a
      href="/whitepaper"
      className=" flex items-center justify-end gap-4 tracking-[0.2em] duration-150 hover:opacity-70 md:text-[20px]"
    >
      <span>WHITEPEPAR</span>
      <span>
        <img
          className="relative rounded-full [box-shadow:0px_8px_30px_0px_rgba(134,1,0,0.4)] max-md:w-[60px]"
          src="/assets/images/ic-link.svg"
          alt=""
        />
      </span>
    </a>
  )
}

export default Button
