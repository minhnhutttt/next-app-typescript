export default function Footer() {
    return (
     <footer className="bg-black px-6 py-10">
        <div className="w-full md:max-w-[1064px] max-w-[440px] mx-auto">
            <div className="flex justify-between max-md:flex-col">
                <div>
                    <a href="/">
                        <img className="max-md:w-[200px]" src="/images/logo-footer.png" alt="" />
                    </a>
                </div>
                <div className="max-md:mt-24">
                    <ul className="flex items-center max-md:justify-end md:text-[17px] text-[15px] font-bold text-white gap-6 md:gap-10 mb-5 md:mb-8">
                        <li>
                            <a href="/" className="block">Top</a>
                        </li>
                        <li>
                            <a href="/privacy-policy" className="block">プライバシーポリシー</a>
                        </li>
                        <li>
                            <a href="/" className="block">お問い合わせ</a>
                        </li>
                    </ul>
                    <p className="text-right text-white md:text-[16px] text-[14px] font-bold">Copyright © 2024 dxb.plus</p>
                </div>
            </div>
        </div>
     </footer>
    );
  }
  