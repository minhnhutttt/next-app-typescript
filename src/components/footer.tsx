const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#111111] px-5 py-8 md:px-10 md:pt-[64px]">
      <div className="mx-auto w-full max-w-[1240px]">
        <a href="/" className="flex">
          <img
            className="max-md:w-[60%]"
            src="/assets/images/seikai-footer.svg"
            alt=""
          />
        </a>
        <div className="mt-28 flex items-end gap-10 max-md:flex-col-reverse md:mt-[165px] md:justify-between">
          <ul className="flex gap-10 text-[15px] font-medium text-white/80 md:text-[19px]">
            <li>
              <a href="/" className="block p-4">
                利用規約
              </a>
            </li>
            <li>
              <a href="/" className="block p-4">
                プライバシーポリシー
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
