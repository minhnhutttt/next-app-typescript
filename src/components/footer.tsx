import Button from "./button";

export default function Footer() {
    return (
      <footer className="px-5 bg-[#242424]/[0.9] md:pt-[66px] pt-10 pb-5">
        <div className="flex justify-center items-center">
          <a href="/" className="block hover:opacity-75 duration-200">
            <img className="max-md:w-[240px]" src="/assets/images/logo-footer.png" alt="" />
          </a>
        </div>
        <ul className="flex justify-center items-center text-white text-[16px] gap-x-[70px] gap-y-6 md:mt-[50px] mt-8 md:pb-10 pb-8 max-md:flex-wrap">
          <li>
            <a href="#faq" className="block hover:opacity-75 duration-200">FAQ</a>
          </li>
          <li>
            <a href="#" className="block hover:opacity-75 duration-200">運営者</a>
          </li>
          <li>
            <a href="#" className="block hover:opacity-75 duration-200">プライバシーポリシー</a>
          </li>
        </ul>
        <p className="text-center text-white text-[14px] mb-5">外国人材の採用・活用に課題のある事業者様はお問い合わせください。</p>
        <div className="flex justify-center items-center max-md:flex-col gap-5 md:mb-12 mb-8">
          <Button href="/" text="資料請求" imgSrc="/assets/images/ic-document.svg" rect="bg-[#F25B54]" />
          <Button href="/" text="代理店募集" imgSrc="/assets/images/ic-building.svg" rect="bg-black" />
          <Button href="/" text="お問い合わせ" imgSrc="/assets/images/ic-line.svg" rect="bg-[#01B202]" />
        </div>
        <div className="text-center text-[13px] text-white md:text-[14px]">
        Copyright © Research Shield+AI
        </div>
      </footer>
    );
  }
  