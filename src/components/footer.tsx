const Footer = () => {

  return (
    <>
        <div className="flex justify-center items-center bg-[#F8F5D8] md:p-7 p-5 gap-6">
            <div className="flex items-center gap-4">
                <figure>
                    <img src="/images/product.png" alt="" />
                </figure>
                <p className="font-hiragino font-semibold md:text-[26px] text-[16px]">
                    120g/パック <br />
                    ¥980〜
                </p>
            </div>
            <div className="">
                <a href="#" className="bg-[#FF0000] flex items-center justify-center w-[368px] h-[85px] text-white md:text-[26px] text-[18px] font-hiragino font-semibold">
                    商品一覧はこちら
                </a>
            </div>
        </div>
        <footer className=""></footer>
    </>
  );
};

export default Footer;
