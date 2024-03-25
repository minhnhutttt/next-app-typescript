export default function Footer() {
    return (
     <footer className="bg-black px-5 py-10">
        <div className="w-full max-w-[1064px] mx-auto">
            <div>
                <a href="/">
                    <img src="/images/logo-footer.png" alt="" />
                </a>
            </div>
            <div className="flex justify-end mt-[100px] mb-7">
                <ul className="flex items-center md:text-[17px] text-[13px] font-bold text-white gap-10">
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
            </div>
            <p className="text-right text-white md:text-[16px] text-[12px] font-bold">Copyright © 2024 dxb.plus</p>
        </div>
     </footer>
    );
  }
  