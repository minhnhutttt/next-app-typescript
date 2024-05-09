const Footer = () => {

    return (
      <>
          <div className="flex justify-center items-center bg-[#F8F5D8] md:p-7 p-5 gap-6 max-md:flex-col">
              <div className="flex items-center gap-4">
                  <figure>
                      <img className="max-md:w-[100px]" src="/assets/images/product.png" alt="" />
                  </figure>
                  <p className="font-hiragino font-semibold md:text-[26px] text-[16px] w-[151px]">
                    1パック <br />
                    ¥880〜
                  </p>
              </div>
              <div className="">
                  <a href="#" className="bg-[#FF0000] flex items-center justify-center w-[300px] md:w-[368px] h-[60px] md:h-[85px] text-white md:text-[26px] text-[18px] font-hiragino font-semibold">
                      商品一覧はこちら
                  </a>
              </div>
          </div>
          <footer className="bg-[#92855d]">
              <div className="flex justify-center pt-10 md:pt-[80px] md:pb-[55px] pb-[30px]">
                  <a href="/">
                      <img className="max-md:w-[90px]" src="/assets/images/logo-footer.png" alt="" />
                  </a>
              </div>
              <div className="border-y border-white flex justify-center md:text-[16px] text-[13px] font-semibold font-hiragino text-white md:gap-8 gap-6 md:p-4 p-3">
                  <a href="/">プライバシーポリシー</a>
                  <a href="/">特定商品取引法による表記</a>
              </div>
              <p className="text-center md:text-[16px] text-[13px] text-white md:p-5 p-3">© 2023 干味専門 一福 .</p>
          </footer>
      </>
    );
  };
  
  export default Footer;
  